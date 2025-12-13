# Todo
[ ] 权限校验
    - ✅ 注解鉴权
    - ✅ 自动鉴权
    - ✅ 手动鉴权
    - ✅ 忽略鉴权





<!-- # 鉴权

## 注解鉴权

- 在controller方法上添加CheckPermission注解进行权限教研。

## 自动鉴权

规则下的路由会有一个默认权限校验
例如，controller层写入 sys/user

默认填充接口：
get /sys/user/list ：查询用户列表 sys:user:list
get /sys/user/:id/detail ：查询用户信息 sys:user:get
post /sys/user/:id/create ：创建用户 sys:user:create
put /sys/user/:id/update ：更新用户 sys:user:update
delete /sys/user/:id/delete ：删除用户 sys:user:delete

其他接口默认使用 sys:user:[method] 权限。

## 手动鉴权

在接口中使用 DataPermission 注解进行手动鉴权

是否存在 sys:user:query 与 sys:user:list 权限。 true表示满足其中一个即可
@DataPermission(['sys:user:query','sys:user:list'], true)

## 忽略鉴权

@IgnorePermission 注解用于忽略权限校验。

CheckLogin 注解用于检查用户是否登录。

CheckRole 注解用于检查用户是否有指定角色。

@CheckPermission 和controller一致

@CheckSafe 二级认证
 -->
