/**
 * ApiResponseJson 装饰器使用示例
 * 
 * 本文件展示了如何在不同场景下使用增强后的 ApiResponseJson 装饰器
 */

import { Controller, Get, Post, Put, Delete, Patch, Body, Param, Query } from '@nestjs/common';
import { AuthController } from './authController.decorator';
import { ApiResponseJson } from './api-response.decorator';

/**
 * 示例 DTO 类
 */
class UserDto {
  id: string;
  username: string;
  email: string;
}

class CreateUserDto {
  username: string;
  email: string;
  password: string;
}

class UpdateUserDto {
  username?: string;
  email?: string;
}

/**
 * ========================================
 * 示例 1: 基础使用 - 简单的 GET 请求
 * ========================================
 */
@AuthController({
  url: 'app',
  tag: 'app',
})
export class ExampleController1 {
  
  @Get('test')
  @ApiResponseJson(UserDto, '测试接口')
  test() {
    /**
     * 控制台输出:
     * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     * 📋 Controller Info:
     *   - Prefix: app
     *   - URL: app
     *   - Tag: app
     *   - Method: GET
     *   - Path: test
     *   - Full Path: app/test
     *   - Property Key: test
     * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     */
    return { id: '1', username: 'test', email: 'test@example.com' };
  }
}

/**
 * ========================================
 * 示例 2: 完整的 CRUD 操作
 * ========================================
 */
@AuthController({
  url: 'api/sys/user',
  tag: '用户管理',
  perms: 'sys:user'
})
export class ExampleUserController {
  
  // CREATE - POST 请求
  @Post()
  @ApiResponseJson(UserDto, { summary: '创建用户' })
  create(@Body() dto: CreateUserDto) {
    /**
     * 输出:
     * Prefix: sys:user
     * Method: POST
     * Full Path: api/sys/user
     */
    return { id: '1', ...dto };
  }

  // READ - GET 请求（列表）
  @Get()
  @ApiResponseJson([UserDto], '查询用户列表')
  findAll(@Query() query: any) {
    /**
     * 输出:
     * Prefix: sys:user
     * Method: GET
     * Full Path: api/sys/user
     */
    return [
      { id: '1', username: 'user1', email: 'user1@example.com' },
      { id: '2', username: 'user2', email: 'user2@example.com' },
    ];
  }

  // READ - GET 请求（详情）
  @Get(':id')
  @ApiResponseJson(UserDto, { summary: '查询用户详情' })
  findOne(@Param('id') id: string) {
    /**
     * 输出:
     * Prefix: sys:user
     * Method: GET
     * Path: :id
     * Full Path: api/sys/user/:id
     */
    return { id, username: 'user1', email: 'user1@example.com' };
  }

  // UPDATE - PUT 请求
  @Put(':id')
  @ApiResponseJson(UserDto, { summary: '更新用户' })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    /**
     * 输出:
     * Prefix: sys:user
     * Method: PUT
     * Path: :id
     * Full Path: api/sys/user/:id
     */
    return { id, username: 'updated', email: 'updated@example.com' };
  }

  // DELETE - DELETE 请求
  @Delete(':id')
  @ApiResponseJson(UserDto, { summary: '删除用户' })
  remove(@Param('id') id: string) {
    /**
     * 输出:
     * Prefix: sys:user
     * Method: DELETE
     * Path: :id
     * Full Path: api/sys/user/:id
     */
    return { id, username: 'deleted', email: 'deleted@example.com' };
  }

  // PATCH - PATCH 请求
  @Patch(':id/status')
  @ApiResponseJson(UserDto, '更新用户状态')
  updateStatus(@Param('id') id: string) {
    /**
     * 输出:
     * Prefix: sys:user
     * Method: PATCH
     * Path: :id/status
     * Full Path: api/sys/user/:id/status
     */
    return { id, username: 'user1', email: 'user1@example.com' };
  }
}

/**
 * ========================================
 * 示例 3: 自定义权限前缀
 * ========================================
 */
@AuthController({
  url: 'api/admin/settings',
  tag: '管理员设置',
  perms: 'admin:config'  // 自定义权限前缀，不使用默认生成
})
export class ExampleAdminController {
  
  @Get('system')
  @ApiResponseJson(UserDto, '获取系统设置')
  getSystemSettings() {
    /**
     * 输出:
     * Prefix: admin:config  ← 使用自定义的 perms
     * URL: api/admin/settings
     * Method: GET
     * Path: system
     * Full Path: api/admin/settings/system
     */
    return { setting: 'value' };
  }
}

/**
 * ========================================
 * 示例 4: 嵌套路径
 * ========================================
 */
@AuthController({
  url: 'api/v1/products',
  tag: '商品管理',
})
export class ExampleProductController {
  
  @Get('categories/:categoryId/items')
  @ApiResponseJson([UserDto], '获取分类下的商品')
  getProductsByCategory(@Param('categoryId') categoryId: string) {
    /**
     * 输出:
     * Prefix: v1:products  ← 自动去除 api/ 前缀
     * URL: api/v1/products
     * Method: GET
     * Path: categories/:categoryId/items
     * Full Path: api/v1/products/categories/:categoryId/items
     */
    return [];
  }
}

/**
 * ========================================
 * 示例 5: 多层嵌套路径
 * ========================================
 */
@AuthController({
  url: '/api/v2/admin/users',
  tag: 'V2管理员用户',
})
export class ExampleV2AdminUserController {
  
  @Post('bulk/import')
  @ApiResponseJson([UserDto], { 
    summary: '批量导入用户',
    description: '从 CSV 文件批量导入用户数据'
  })
  bulkImport(@Body() data: any) {
    /**
     * 输出:
     * Prefix: v2:admin:users  ← URL 转换为权限格式
     * URL: /api/v2/admin/users
     * Method: POST
     * Path: bulk/import
     * Full Path: api/v2/admin/users/bulk/import
     */
    return [];
  }
}

/**
 * ========================================
 * 示例 6: 不同的返回类型
 * ========================================
 */
@AuthController({
  url: 'data',
  tag: '数据接口',
})
export class ExampleDataController {
  
  // 返回单个对象
  @Get('single')
  @ApiResponseJson(UserDto, '返回单个对象')
  getSingle() {
    return { id: '1', username: 'user', email: 'user@example.com' };
  }

  // 返回数组
  @Get('array')
  @ApiResponseJson([UserDto], '返回对象数组')
  getArray() {
    return [
      { id: '1', username: 'user1', email: 'user1@example.com' },
      { id: '2', username: 'user2', email: 'user2@example.com' },
    ];
  }
}

/**
 * ========================================
 * 示例 7: 简化的 summary 写法
 * ========================================
 */
@AuthController({
  url: 'simple',
  tag: '简化示例',
})
export class ExampleSimpleController {
  
  // 使用字符串作为 summary
  @Get('test1')
  @ApiResponseJson(UserDto, '测试接口1')
  test1() {
    return {};
  }

  // 使用对象配置
  @Get('test2')
  @ApiResponseJson(UserDto, {
    summary: '测试接口2',
    description: '这是详细描述',
  })
  test2() {
    return {};
  }
}

/**
 * ========================================
 * 权限前缀生成规则示例
 * ========================================
 */

// URL: 'api/sys/user'       → Prefix: 'sys:user'
// URL: '/admin/role'        → Prefix: 'admin:role'
// URL: 'sys/menu/'          → Prefix: 'sys:menu'
// URL: 'user/:id'           → Prefix: 'user'
// URL: 'api/v1/products'    → Prefix: 'v1:products'
// URL: '/api/settings'      → Prefix: 'settings'

/**
 * ========================================
 * HTTP 方法映射示例
 * ========================================
 */
@AuthController({ url: 'methods', tag: 'HTTP方法' })
export class ExampleMethodsController {
  
  @Get('get')
  @ApiResponseJson(UserDto, 'GET 请求')
  getMethod() {
    // Method: GET
    return {};
  }

  @Post('post')
  @ApiResponseJson(UserDto, 'POST 请求')
  postMethod() {
    // Method: POST
    return {};
  }

  @Put('put')
  @ApiResponseJson(UserDto, 'PUT 请求')
  putMethod() {
    // Method: PUT
    return {};
  }

  @Delete('delete')
  @ApiResponseJson(UserDto, 'DELETE 请求')
  deleteMethod() {
    // Method: DELETE
    return {};
  }

  @Patch('patch')
  @ApiResponseJson(UserDto, 'PATCH 请求')
  patchMethod() {
    // Method: PATCH
    return {};
  }
}

/**
 * ========================================
 * 实际应用场景
 * ========================================
 */

/**
 * 场景 1: 菜单管理
 */
@AuthController({
  url: 'api/sys/menu',
  tag: '系统菜单',
  perms: 'sys:menu'
})
export class MenuController {
  
  @Post()
  @ApiResponseJson(UserDto, '创建菜单')
  create(@Body() dto: any) {
    // Prefix: sys:menu, Method: POST
    // 实际权限检查: sys:menu:add
    return {};
  }

  @Put(':id')
  @ApiResponseJson(UserDto, '更新菜单')
  update(@Param('id') id: string, @Body() dto: any) {
    // Prefix: sys:menu, Method: PUT
    // 实际权限检查: sys:menu:update
    return {};
  }

  @Delete(':id')
  @ApiResponseJson(UserDto, '删除菜单')
  delete(@Param('id') id: string) {
    // Prefix: sys:menu, Method: DELETE
    // 实际权限检查: sys:menu:delete
    return {};
  }

  @Get()
  @ApiResponseJson([UserDto], '查询菜单列表')
  list(@Query() query: any) {
    // Prefix: sys:menu, Method: GET
    // 实际权限检查: sys:menu:query
    return [];
  }
}

/**
 * 场景 2: 文件上传
 */
@AuthController({
  url: 'api/upload',
  tag: '文件上传',
  perms: 'sys:file'
})
export class UploadController {
  
  @Post('image')
  @ApiResponseJson(UserDto, '上传图片')
  uploadImage(@Body() file: any) {
    // Prefix: sys:file
    // Method: POST
    // Full Path: api/upload/image
    return { url: 'http://example.com/image.png' };
  }

  @Post('document')
  @ApiResponseJson(UserDto, '上传文档')
  uploadDocument(@Body() file: any) {
    // Prefix: sys:file
    // Method: POST
    // Full Path: api/upload/document
    return { url: 'http://example.com/doc.pdf' };
  }
}

/**
 * ========================================
 * 总结
 * ========================================
 * 
 * ApiResponseJson 装饰器现在可以自动获取并输出:
 * 
 * 1. prefix - 权限前缀（来自 AuthController）
 * 2. url - Controller 的 URL
 * 3. tag - API 标签（Swagger 分组）
 * 4. method - HTTP 请求方法
 * 5. path - 方法级别的路径
 * 6. fullPath - 完整的请求路径
 * 
 * 这些信息在应用启动时输出到控制台，便于:
 * - 调试路由配置
 * - 验证权限设置
 * - 生成 API 文档
 * - 追踪端点信息
 */
