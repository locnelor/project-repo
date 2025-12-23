
**概述**
- **用途**: api-kit 提供 API 层常用的工具与约定，包含 DTO、装饰器和拦截器，用于统一响应结构、分页和字段描述等。
- **主要文件**:
	- `src/base-curd.ts`: 基础 CRUD 工具/基类。
	- `src/index.ts`: 导出入口。
	- `src/decorators/`: 包含 `api-field.decorator.ts`（字段元信息）和 `api-result.decorator.ts`（接口返回注解），以及 `index.ts` 导出。
	- `src/dto/`: 包含 `BaseApiResponse.dto.ts`、`pagination.dto.ts` 和 `index.ts`（通用 DTO 定义与导出）。
	- `src/interceptors/`: 包含 `transform.interceptor.ts`（统一响应转换）和 `index.ts` 导出。
- **使用**: 直接从库导入所需装饰器、DTO 或拦截器，按需在 NestJS 模块中注册或作为全局拦截器使用。
- **备注**: 该库旨在提供轻量、可扩展的 API 层约定，便于团队统一响应格式与分页行为。

