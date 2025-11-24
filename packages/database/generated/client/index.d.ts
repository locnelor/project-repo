
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model sys_user
 * 
 */
export type sys_user = $Result.DefaultSelection<Prisma.$sys_userPayload>
/**
 * Model sys_log
 * 日志表
 */
export type sys_log = $Result.DefaultSelection<Prisma.$sys_logPayload>
/**
 * Model sys_menu
 * 
 */
export type sys_menu = $Result.DefaultSelection<Prisma.$sys_menuPayload>
/**
 * Model sys_config
 * 
 */
export type sys_config = $Result.DefaultSelection<Prisma.$sys_configPayload>
/**
 * Model sys_organization
 * 
 */
export type sys_organization = $Result.DefaultSelection<Prisma.$sys_organizationPayload>
/**
 * Model sys_dept
 * 
 */
export type sys_dept = $Result.DefaultSelection<Prisma.$sys_deptPayload>
/**
 * Model sys_role
 * 
 */
export type sys_role = $Result.DefaultSelection<Prisma.$sys_rolePayload>
/**
 * Model sys_role_menu
 * 
 */
export type sys_role_menu = $Result.DefaultSelection<Prisma.$sys_role_menuPayload>
/**
 * Model sys_role_user
 * 
 */
export type sys_role_user = $Result.DefaultSelection<Prisma.$sys_role_userPayload>
/**
 * Model sys_dict
 * 
 */
export type sys_dict = $Result.DefaultSelection<Prisma.$sys_dictPayload>
/**
 * Model sys_dict_detail
 * 
 */
export type sys_dict_detail = $Result.DefaultSelection<Prisma.$sys_dict_detailPayload>
/**
 * Model sys_file
 * 
 */
export type sys_file = $Result.DefaultSelection<Prisma.$sys_filePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const log_type: {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR'
};

export type log_type = (typeof log_type)[keyof typeof log_type]


export const config_type: {
  string: 'string',
  boolean: 'boolean',
  int: 'int',
  json: 'json'
};

export type config_type = (typeof config_type)[keyof typeof config_type]


export const data_scope_type: {
  all: 'all',
  currentOrg: 'currentOrg',
  currentDeptAndSubDept: 'currentDeptAndSubDept',
  custom: 'custom'
};

export type data_scope_type = (typeof data_scope_type)[keyof typeof data_scope_type]

}

export type log_type = $Enums.log_type

export const log_type: typeof $Enums.log_type

export type config_type = $Enums.config_type

export const config_type: typeof $Enums.config_type

export type data_scope_type = $Enums.data_scope_type

export const data_scope_type: typeof $Enums.data_scope_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sys_users
 * const sys_users = await prisma.sys_user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sys_users
   * const sys_users = await prisma.sys_user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sys_user`: Exposes CRUD operations for the **sys_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_users
    * const sys_users = await prisma.sys_user.findMany()
    * ```
    */
  get sys_user(): Prisma.sys_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_log`: Exposes CRUD operations for the **sys_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_logs
    * const sys_logs = await prisma.sys_log.findMany()
    * ```
    */
  get sys_log(): Prisma.sys_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_menu`: Exposes CRUD operations for the **sys_menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_menus
    * const sys_menus = await prisma.sys_menu.findMany()
    * ```
    */
  get sys_menu(): Prisma.sys_menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_config`: Exposes CRUD operations for the **sys_config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_configs
    * const sys_configs = await prisma.sys_config.findMany()
    * ```
    */
  get sys_config(): Prisma.sys_configDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_organization`: Exposes CRUD operations for the **sys_organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_organizations
    * const sys_organizations = await prisma.sys_organization.findMany()
    * ```
    */
  get sys_organization(): Prisma.sys_organizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_dept`: Exposes CRUD operations for the **sys_dept** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_depts
    * const sys_depts = await prisma.sys_dept.findMany()
    * ```
    */
  get sys_dept(): Prisma.sys_deptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_role`: Exposes CRUD operations for the **sys_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_roles
    * const sys_roles = await prisma.sys_role.findMany()
    * ```
    */
  get sys_role(): Prisma.sys_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_role_menu`: Exposes CRUD operations for the **sys_role_menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_role_menus
    * const sys_role_menus = await prisma.sys_role_menu.findMany()
    * ```
    */
  get sys_role_menu(): Prisma.sys_role_menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_role_user`: Exposes CRUD operations for the **sys_role_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_role_users
    * const sys_role_users = await prisma.sys_role_user.findMany()
    * ```
    */
  get sys_role_user(): Prisma.sys_role_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_dict`: Exposes CRUD operations for the **sys_dict** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_dicts
    * const sys_dicts = await prisma.sys_dict.findMany()
    * ```
    */
  get sys_dict(): Prisma.sys_dictDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_dict_detail`: Exposes CRUD operations for the **sys_dict_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_dict_details
    * const sys_dict_details = await prisma.sys_dict_detail.findMany()
    * ```
    */
  get sys_dict_detail(): Prisma.sys_dict_detailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sys_file`: Exposes CRUD operations for the **sys_file** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sys_files
    * const sys_files = await prisma.sys_file.findMany()
    * ```
    */
  get sys_file(): Prisma.sys_fileDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    sys_user: 'sys_user',
    sys_log: 'sys_log',
    sys_menu: 'sys_menu',
    sys_config: 'sys_config',
    sys_organization: 'sys_organization',
    sys_dept: 'sys_dept',
    sys_role: 'sys_role',
    sys_role_menu: 'sys_role_menu',
    sys_role_user: 'sys_role_user',
    sys_dict: 'sys_dict',
    sys_dict_detail: 'sys_dict_detail',
    sys_file: 'sys_file'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sys_user" | "sys_log" | "sys_menu" | "sys_config" | "sys_organization" | "sys_dept" | "sys_role" | "sys_role_menu" | "sys_role_user" | "sys_dict" | "sys_dict_detail" | "sys_file"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      sys_user: {
        payload: Prisma.$sys_userPayload<ExtArgs>
        fields: Prisma.sys_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          findFirst: {
            args: Prisma.sys_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          findMany: {
            args: Prisma.sys_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>[]
          }
          create: {
            args: Prisma.sys_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          createMany: {
            args: Prisma.sys_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          update: {
            args: Prisma.sys_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          deleteMany: {
            args: Prisma.sys_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_userPayload>
          }
          aggregate: {
            args: Prisma.Sys_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_user>
          }
          groupBy: {
            args: Prisma.sys_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_userCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_userCountAggregateOutputType> | number
          }
        }
      }
      sys_log: {
        payload: Prisma.$sys_logPayload<ExtArgs>
        fields: Prisma.sys_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_logPayload>
          }
          findFirst: {
            args: Prisma.sys_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_logPayload>
          }
          findMany: {
            args: Prisma.sys_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_logPayload>[]
          }
          create: {
            args: Prisma.sys_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_logPayload>
          }
          createMany: {
            args: Prisma.sys_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_logPayload>
          }
          update: {
            args: Prisma.sys_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_logPayload>
          }
          deleteMany: {
            args: Prisma.sys_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_logPayload>
          }
          aggregate: {
            args: Prisma.Sys_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_log>
          }
          groupBy: {
            args: Prisma.sys_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_logCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_logCountAggregateOutputType> | number
          }
        }
      }
      sys_menu: {
        payload: Prisma.$sys_menuPayload<ExtArgs>
        fields: Prisma.sys_menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          findFirst: {
            args: Prisma.sys_menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          findMany: {
            args: Prisma.sys_menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>[]
          }
          create: {
            args: Prisma.sys_menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          createMany: {
            args: Prisma.sys_menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          update: {
            args: Prisma.sys_menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          deleteMany: {
            args: Prisma.sys_menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_menuPayload>
          }
          aggregate: {
            args: Prisma.Sys_menuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_menu>
          }
          groupBy: {
            args: Prisma.sys_menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_menuGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_menuCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_menuCountAggregateOutputType> | number
          }
        }
      }
      sys_config: {
        payload: Prisma.$sys_configPayload<ExtArgs>
        fields: Prisma.sys_configFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_configFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_configFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          findFirst: {
            args: Prisma.sys_configFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_configFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          findMany: {
            args: Prisma.sys_configFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>[]
          }
          create: {
            args: Prisma.sys_configCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          createMany: {
            args: Prisma.sys_configCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_configDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          update: {
            args: Prisma.sys_configUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          deleteMany: {
            args: Prisma.sys_configDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_configUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_configUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_configPayload>
          }
          aggregate: {
            args: Prisma.Sys_configAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_config>
          }
          groupBy: {
            args: Prisma.sys_configGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_configGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_configCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_configCountAggregateOutputType> | number
          }
        }
      }
      sys_organization: {
        payload: Prisma.$sys_organizationPayload<ExtArgs>
        fields: Prisma.sys_organizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_organizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_organizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_organizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_organizationPayload>
          }
          findFirst: {
            args: Prisma.sys_organizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_organizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_organizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_organizationPayload>
          }
          findMany: {
            args: Prisma.sys_organizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_organizationPayload>[]
          }
          create: {
            args: Prisma.sys_organizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_organizationPayload>
          }
          createMany: {
            args: Prisma.sys_organizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_organizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_organizationPayload>
          }
          update: {
            args: Prisma.sys_organizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_organizationPayload>
          }
          deleteMany: {
            args: Prisma.sys_organizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_organizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_organizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_organizationPayload>
          }
          aggregate: {
            args: Prisma.Sys_organizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_organization>
          }
          groupBy: {
            args: Prisma.sys_organizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_organizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_organizationCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_organizationCountAggregateOutputType> | number
          }
        }
      }
      sys_dept: {
        payload: Prisma.$sys_deptPayload<ExtArgs>
        fields: Prisma.sys_deptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_deptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_deptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_deptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_deptPayload>
          }
          findFirst: {
            args: Prisma.sys_deptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_deptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_deptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_deptPayload>
          }
          findMany: {
            args: Prisma.sys_deptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_deptPayload>[]
          }
          create: {
            args: Prisma.sys_deptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_deptPayload>
          }
          createMany: {
            args: Prisma.sys_deptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_deptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_deptPayload>
          }
          update: {
            args: Prisma.sys_deptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_deptPayload>
          }
          deleteMany: {
            args: Prisma.sys_deptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_deptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_deptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_deptPayload>
          }
          aggregate: {
            args: Prisma.Sys_deptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_dept>
          }
          groupBy: {
            args: Prisma.sys_deptGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_deptGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_deptCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_deptCountAggregateOutputType> | number
          }
        }
      }
      sys_role: {
        payload: Prisma.$sys_rolePayload<ExtArgs>
        fields: Prisma.sys_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          findFirst: {
            args: Prisma.sys_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          findMany: {
            args: Prisma.sys_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>[]
          }
          create: {
            args: Prisma.sys_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          createMany: {
            args: Prisma.sys_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          update: {
            args: Prisma.sys_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          deleteMany: {
            args: Prisma.sys_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_rolePayload>
          }
          aggregate: {
            args: Prisma.Sys_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_role>
          }
          groupBy: {
            args: Prisma.sys_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_roleCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_roleCountAggregateOutputType> | number
          }
        }
      }
      sys_role_menu: {
        payload: Prisma.$sys_role_menuPayload<ExtArgs>
        fields: Prisma.sys_role_menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_role_menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_role_menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_menuPayload>
          }
          findFirst: {
            args: Prisma.sys_role_menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_role_menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_menuPayload>
          }
          findMany: {
            args: Prisma.sys_role_menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_menuPayload>[]
          }
          create: {
            args: Prisma.sys_role_menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_menuPayload>
          }
          createMany: {
            args: Prisma.sys_role_menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_role_menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_menuPayload>
          }
          update: {
            args: Prisma.sys_role_menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_menuPayload>
          }
          deleteMany: {
            args: Prisma.sys_role_menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_role_menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_role_menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_menuPayload>
          }
          aggregate: {
            args: Prisma.Sys_role_menuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_role_menu>
          }
          groupBy: {
            args: Prisma.sys_role_menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_role_menuGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_role_menuCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_role_menuCountAggregateOutputType> | number
          }
        }
      }
      sys_role_user: {
        payload: Prisma.$sys_role_userPayload<ExtArgs>
        fields: Prisma.sys_role_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_role_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_role_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_userPayload>
          }
          findFirst: {
            args: Prisma.sys_role_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_role_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_userPayload>
          }
          findMany: {
            args: Prisma.sys_role_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_userPayload>[]
          }
          create: {
            args: Prisma.sys_role_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_userPayload>
          }
          createMany: {
            args: Prisma.sys_role_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_role_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_userPayload>
          }
          update: {
            args: Prisma.sys_role_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_userPayload>
          }
          deleteMany: {
            args: Prisma.sys_role_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_role_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_role_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_role_userPayload>
          }
          aggregate: {
            args: Prisma.Sys_role_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_role_user>
          }
          groupBy: {
            args: Prisma.sys_role_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_role_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_role_userCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_role_userCountAggregateOutputType> | number
          }
        }
      }
      sys_dict: {
        payload: Prisma.$sys_dictPayload<ExtArgs>
        fields: Prisma.sys_dictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_dictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_dictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dictPayload>
          }
          findFirst: {
            args: Prisma.sys_dictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_dictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dictPayload>
          }
          findMany: {
            args: Prisma.sys_dictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dictPayload>[]
          }
          create: {
            args: Prisma.sys_dictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dictPayload>
          }
          createMany: {
            args: Prisma.sys_dictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_dictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dictPayload>
          }
          update: {
            args: Prisma.sys_dictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dictPayload>
          }
          deleteMany: {
            args: Prisma.sys_dictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_dictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_dictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dictPayload>
          }
          aggregate: {
            args: Prisma.Sys_dictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_dict>
          }
          groupBy: {
            args: Prisma.sys_dictGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_dictGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_dictCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_dictCountAggregateOutputType> | number
          }
        }
      }
      sys_dict_detail: {
        payload: Prisma.$sys_dict_detailPayload<ExtArgs>
        fields: Prisma.sys_dict_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_dict_detailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dict_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_dict_detailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dict_detailPayload>
          }
          findFirst: {
            args: Prisma.sys_dict_detailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dict_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_dict_detailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dict_detailPayload>
          }
          findMany: {
            args: Prisma.sys_dict_detailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dict_detailPayload>[]
          }
          create: {
            args: Prisma.sys_dict_detailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dict_detailPayload>
          }
          createMany: {
            args: Prisma.sys_dict_detailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_dict_detailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dict_detailPayload>
          }
          update: {
            args: Prisma.sys_dict_detailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dict_detailPayload>
          }
          deleteMany: {
            args: Prisma.sys_dict_detailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_dict_detailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_dict_detailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_dict_detailPayload>
          }
          aggregate: {
            args: Prisma.Sys_dict_detailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_dict_detail>
          }
          groupBy: {
            args: Prisma.sys_dict_detailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_dict_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_dict_detailCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_dict_detailCountAggregateOutputType> | number
          }
        }
      }
      sys_file: {
        payload: Prisma.$sys_filePayload<ExtArgs>
        fields: Prisma.sys_fileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sys_fileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_filePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sys_fileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_filePayload>
          }
          findFirst: {
            args: Prisma.sys_fileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_filePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sys_fileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_filePayload>
          }
          findMany: {
            args: Prisma.sys_fileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_filePayload>[]
          }
          create: {
            args: Prisma.sys_fileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_filePayload>
          }
          createMany: {
            args: Prisma.sys_fileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sys_fileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_filePayload>
          }
          update: {
            args: Prisma.sys_fileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_filePayload>
          }
          deleteMany: {
            args: Prisma.sys_fileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sys_fileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sys_fileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sys_filePayload>
          }
          aggregate: {
            args: Prisma.Sys_fileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSys_file>
          }
          groupBy: {
            args: Prisma.sys_fileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sys_fileGroupByOutputType>[]
          }
          count: {
            args: Prisma.sys_fileCountArgs<ExtArgs>
            result: $Utils.Optional<Sys_fileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sys_user?: sys_userOmit
    sys_log?: sys_logOmit
    sys_menu?: sys_menuOmit
    sys_config?: sys_configOmit
    sys_organization?: sys_organizationOmit
    sys_dept?: sys_deptOmit
    sys_role?: sys_roleOmit
    sys_role_menu?: sys_role_menuOmit
    sys_role_user?: sys_role_userOmit
    sys_dict?: sys_dictOmit
    sys_dict_detail?: sys_dict_detailOmit
    sys_file?: sys_fileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Sys_userCountOutputType
   */

  export type Sys_userCountOutputType = {
    sys_log: number
    role_users: number
  }

  export type Sys_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sys_log?: boolean | Sys_userCountOutputTypeCountSys_logArgs
    role_users?: boolean | Sys_userCountOutputTypeCountRole_usersArgs
  }

  // Custom InputTypes
  /**
   * Sys_userCountOutputType without action
   */
  export type Sys_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sys_userCountOutputType
     */
    select?: Sys_userCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sys_userCountOutputType without action
   */
  export type Sys_userCountOutputTypeCountSys_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_logWhereInput
  }

  /**
   * Sys_userCountOutputType without action
   */
  export type Sys_userCountOutputTypeCountRole_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_role_userWhereInput
  }


  /**
   * Count Type Sys_menuCountOutputType
   */

  export type Sys_menuCountOutputType = {
    children: number
    role_menus: number
  }

  export type Sys_menuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Sys_menuCountOutputTypeCountChildrenArgs
    role_menus?: boolean | Sys_menuCountOutputTypeCountRole_menusArgs
  }

  // Custom InputTypes
  /**
   * Sys_menuCountOutputType without action
   */
  export type Sys_menuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sys_menuCountOutputType
     */
    select?: Sys_menuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sys_menuCountOutputType without action
   */
  export type Sys_menuCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_menuWhereInput
  }

  /**
   * Sys_menuCountOutputType without action
   */
  export type Sys_menuCountOutputTypeCountRole_menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_role_menuWhereInput
  }


  /**
   * Count Type Sys_organizationCountOutputType
   */

  export type Sys_organizationCountOutputType = {
    children: number
    departments: number
    roles: number
    users: number
  }

  export type Sys_organizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Sys_organizationCountOutputTypeCountChildrenArgs
    departments?: boolean | Sys_organizationCountOutputTypeCountDepartmentsArgs
    roles?: boolean | Sys_organizationCountOutputTypeCountRolesArgs
    users?: boolean | Sys_organizationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * Sys_organizationCountOutputType without action
   */
  export type Sys_organizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sys_organizationCountOutputType
     */
    select?: Sys_organizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sys_organizationCountOutputType without action
   */
  export type Sys_organizationCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_organizationWhereInput
  }

  /**
   * Sys_organizationCountOutputType without action
   */
  export type Sys_organizationCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_deptWhereInput
  }

  /**
   * Sys_organizationCountOutputType without action
   */
  export type Sys_organizationCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_roleWhereInput
  }

  /**
   * Sys_organizationCountOutputType without action
   */
  export type Sys_organizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_userWhereInput
  }


  /**
   * Count Type Sys_deptCountOutputType
   */

  export type Sys_deptCountOutputType = {
    children: number
    users: number
  }

  export type Sys_deptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Sys_deptCountOutputTypeCountChildrenArgs
    users?: boolean | Sys_deptCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * Sys_deptCountOutputType without action
   */
  export type Sys_deptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sys_deptCountOutputType
     */
    select?: Sys_deptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sys_deptCountOutputType without action
   */
  export type Sys_deptCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_deptWhereInput
  }

  /**
   * Sys_deptCountOutputType without action
   */
  export type Sys_deptCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_userWhereInput
  }


  /**
   * Count Type Sys_roleCountOutputType
   */

  export type Sys_roleCountOutputType = {
    role_menus: number
    role_users: number
  }

  export type Sys_roleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role_menus?: boolean | Sys_roleCountOutputTypeCountRole_menusArgs
    role_users?: boolean | Sys_roleCountOutputTypeCountRole_usersArgs
  }

  // Custom InputTypes
  /**
   * Sys_roleCountOutputType without action
   */
  export type Sys_roleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sys_roleCountOutputType
     */
    select?: Sys_roleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sys_roleCountOutputType without action
   */
  export type Sys_roleCountOutputTypeCountRole_menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_role_menuWhereInput
  }

  /**
   * Sys_roleCountOutputType without action
   */
  export type Sys_roleCountOutputTypeCountRole_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_role_userWhereInput
  }


  /**
   * Count Type Sys_dictCountOutputType
   */

  export type Sys_dictCountOutputType = {
    details: number
  }

  export type Sys_dictCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | Sys_dictCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * Sys_dictCountOutputType without action
   */
  export type Sys_dictCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sys_dictCountOutputType
     */
    select?: Sys_dictCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sys_dictCountOutputType without action
   */
  export type Sys_dictCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_dict_detailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model sys_user
   */

  export type AggregateSys_user = {
    _count: Sys_userCountAggregateOutputType | null
    _avg: Sys_userAvgAggregateOutputType | null
    _sum: Sys_userSumAggregateOutputType | null
    _min: Sys_userMinAggregateOutputType | null
    _max: Sys_userMaxAggregateOutputType | null
  }

  export type Sys_userAvgAggregateOutputType = {
    status: number | null
    sort: number | null
  }

  export type Sys_userSumAggregateOutputType = {
    status: number | null
    sort: number | null
  }

  export type Sys_userMinAggregateOutputType = {
    id: string | null
    create_time: Date | null
    update_time: Date | null
    org_id: string | null
    org_code: string | null
    dept_id: string | null
    username: string | null
    password: string | null
    nickname: string | null
    real_name: string | null
    email: string | null
    phone: string | null
    job_no: string | null
    status: number | null
    hidden: boolean | null
    admin_flag: boolean | null
    avatar: string | null
    client_id: string | null
    sort: number | null
    user_function_codes: string | null
    deleted: boolean | null
  }

  export type Sys_userMaxAggregateOutputType = {
    id: string | null
    create_time: Date | null
    update_time: Date | null
    org_id: string | null
    org_code: string | null
    dept_id: string | null
    username: string | null
    password: string | null
    nickname: string | null
    real_name: string | null
    email: string | null
    phone: string | null
    job_no: string | null
    status: number | null
    hidden: boolean | null
    admin_flag: boolean | null
    avatar: string | null
    client_id: string | null
    sort: number | null
    user_function_codes: string | null
    deleted: boolean | null
  }

  export type Sys_userCountAggregateOutputType = {
    id: number
    create_time: number
    update_time: number
    org_id: number
    org_code: number
    dept_id: number
    username: number
    password: number
    nickname: number
    real_name: number
    email: number
    phone: number
    job_no: number
    status: number
    hidden: number
    admin_flag: number
    avatar: number
    client_id: number
    sort: number
    user_function_codes: number
    deleted: number
    _all: number
  }


  export type Sys_userAvgAggregateInputType = {
    status?: true
    sort?: true
  }

  export type Sys_userSumAggregateInputType = {
    status?: true
    sort?: true
  }

  export type Sys_userMinAggregateInputType = {
    id?: true
    create_time?: true
    update_time?: true
    org_id?: true
    org_code?: true
    dept_id?: true
    username?: true
    password?: true
    nickname?: true
    real_name?: true
    email?: true
    phone?: true
    job_no?: true
    status?: true
    hidden?: true
    admin_flag?: true
    avatar?: true
    client_id?: true
    sort?: true
    user_function_codes?: true
    deleted?: true
  }

  export type Sys_userMaxAggregateInputType = {
    id?: true
    create_time?: true
    update_time?: true
    org_id?: true
    org_code?: true
    dept_id?: true
    username?: true
    password?: true
    nickname?: true
    real_name?: true
    email?: true
    phone?: true
    job_no?: true
    status?: true
    hidden?: true
    admin_flag?: true
    avatar?: true
    client_id?: true
    sort?: true
    user_function_codes?: true
    deleted?: true
  }

  export type Sys_userCountAggregateInputType = {
    id?: true
    create_time?: true
    update_time?: true
    org_id?: true
    org_code?: true
    dept_id?: true
    username?: true
    password?: true
    nickname?: true
    real_name?: true
    email?: true
    phone?: true
    job_no?: true
    status?: true
    hidden?: true
    admin_flag?: true
    avatar?: true
    client_id?: true
    sort?: true
    user_function_codes?: true
    deleted?: true
    _all?: true
  }

  export type Sys_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_user to aggregate.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_users
    **/
    _count?: true | Sys_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_userMaxAggregateInputType
  }

  export type GetSys_userAggregateType<T extends Sys_userAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_user[P]>
      : GetScalarType<T[P], AggregateSys_user[P]>
  }




  export type sys_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_userWhereInput
    orderBy?: sys_userOrderByWithAggregationInput | sys_userOrderByWithAggregationInput[]
    by: Sys_userScalarFieldEnum[] | Sys_userScalarFieldEnum
    having?: sys_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_userCountAggregateInputType | true
    _avg?: Sys_userAvgAggregateInputType
    _sum?: Sys_userSumAggregateInputType
    _min?: Sys_userMinAggregateInputType
    _max?: Sys_userMaxAggregateInputType
  }

  export type Sys_userGroupByOutputType = {
    id: string
    create_time: Date
    update_time: Date
    org_id: string | null
    org_code: string | null
    dept_id: string | null
    username: string
    password: string | null
    nickname: string | null
    real_name: string | null
    email: string | null
    phone: string | null
    job_no: string | null
    status: number
    hidden: boolean
    admin_flag: boolean
    avatar: string | null
    client_id: string | null
    sort: number
    user_function_codes: string | null
    deleted: boolean
    _count: Sys_userCountAggregateOutputType | null
    _avg: Sys_userAvgAggregateOutputType | null
    _sum: Sys_userSumAggregateOutputType | null
    _min: Sys_userMinAggregateOutputType | null
    _max: Sys_userMaxAggregateOutputType | null
  }

  type GetSys_userGroupByPayload<T extends sys_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_userGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_userGroupByOutputType[P]>
        }
      >
    >


  export type sys_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    create_time?: boolean
    update_time?: boolean
    org_id?: boolean
    org_code?: boolean
    dept_id?: boolean
    username?: boolean
    password?: boolean
    nickname?: boolean
    real_name?: boolean
    email?: boolean
    phone?: boolean
    job_no?: boolean
    status?: boolean
    hidden?: boolean
    admin_flag?: boolean
    avatar?: boolean
    client_id?: boolean
    sort?: boolean
    user_function_codes?: boolean
    deleted?: boolean
    organization?: boolean | sys_user$organizationArgs<ExtArgs>
    department?: boolean | sys_user$departmentArgs<ExtArgs>
    sys_log?: boolean | sys_user$sys_logArgs<ExtArgs>
    role_users?: boolean | sys_user$role_usersArgs<ExtArgs>
    _count?: boolean | Sys_userCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_user"]>



  export type sys_userSelectScalar = {
    id?: boolean
    create_time?: boolean
    update_time?: boolean
    org_id?: boolean
    org_code?: boolean
    dept_id?: boolean
    username?: boolean
    password?: boolean
    nickname?: boolean
    real_name?: boolean
    email?: boolean
    phone?: boolean
    job_no?: boolean
    status?: boolean
    hidden?: boolean
    admin_flag?: boolean
    avatar?: boolean
    client_id?: boolean
    sort?: boolean
    user_function_codes?: boolean
    deleted?: boolean
  }

  export type sys_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "create_time" | "update_time" | "org_id" | "org_code" | "dept_id" | "username" | "password" | "nickname" | "real_name" | "email" | "phone" | "job_no" | "status" | "hidden" | "admin_flag" | "avatar" | "client_id" | "sort" | "user_function_codes" | "deleted", ExtArgs["result"]["sys_user"]>
  export type sys_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | sys_user$organizationArgs<ExtArgs>
    department?: boolean | sys_user$departmentArgs<ExtArgs>
    sys_log?: boolean | sys_user$sys_logArgs<ExtArgs>
    role_users?: boolean | sys_user$role_usersArgs<ExtArgs>
    _count?: boolean | Sys_userCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_user"
    objects: {
      organization: Prisma.$sys_organizationPayload<ExtArgs> | null
      department: Prisma.$sys_deptPayload<ExtArgs> | null
      sys_log: Prisma.$sys_logPayload<ExtArgs>[]
      /**
       * 用户角色关联
       */
      role_users: Prisma.$sys_role_userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      create_time: Date
      update_time: Date
      /**
       * 组织机构id
       */
      org_id: string | null
      /**
       * 组织机构code
       */
      org_code: string | null
      /**
       * 部门id
       */
      dept_id: string | null
      /**
       * 用户名
       */
      username: string
      /**
       * 密码
       */
      password: string | null
      /**
       * 昵称
       */
      nickname: string | null
      /**
       * 真实名称
       */
      real_name: string | null
      /**
       * 邮箱
       */
      email: string | null
      /**
       * 手机号
       */
      phone: string | null
      /**
       * 工号
       */
      job_no: string | null
      /**
       * 状态
       */
      status: number
      /**
       * 是否隐藏
       */
      hidden: boolean
      /**
       * 是否是管理员
       */
      admin_flag: boolean
      /**
       * 头像真实路径
       */
      avatar: string | null
      /**
       * 手机cid
       */
      client_id: string | null
      /**
       * 排序
       */
      sort: number
      /**
       * 用户职能字典codes
       */
      user_function_codes: string | null
      /**
       * 是否被删除
       */
      deleted: boolean
    }, ExtArgs["result"]["sys_user"]>
    composites: {}
  }

  type sys_userGetPayload<S extends boolean | null | undefined | sys_userDefaultArgs> = $Result.GetResult<Prisma.$sys_userPayload, S>

  type sys_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_userCountAggregateInputType | true
    }

  export interface sys_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_user'], meta: { name: 'sys_user' } }
    /**
     * Find zero or one Sys_user that matches the filter.
     * @param {sys_userFindUniqueArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_userFindUniqueArgs>(args: SelectSubset<T, sys_userFindUniqueArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_userFindUniqueOrThrowArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_userFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindFirstArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_userFindFirstArgs>(args?: SelectSubset<T, sys_userFindFirstArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindFirstOrThrowArgs} args - Arguments to find a Sys_user
     * @example
     * // Get one Sys_user
     * const sys_user = await prisma.sys_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_userFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_users
     * const sys_users = await prisma.sys_user.findMany()
     * 
     * // Get first 10 Sys_users
     * const sys_users = await prisma.sys_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_userWithIdOnly = await prisma.sys_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_userFindManyArgs>(args?: SelectSubset<T, sys_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_user.
     * @param {sys_userCreateArgs} args - Arguments to create a Sys_user.
     * @example
     * // Create one Sys_user
     * const Sys_user = await prisma.sys_user.create({
     *   data: {
     *     // ... data to create a Sys_user
     *   }
     * })
     * 
     */
    create<T extends sys_userCreateArgs>(args: SelectSubset<T, sys_userCreateArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_users.
     * @param {sys_userCreateManyArgs} args - Arguments to create many Sys_users.
     * @example
     * // Create many Sys_users
     * const sys_user = await prisma.sys_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_userCreateManyArgs>(args?: SelectSubset<T, sys_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_user.
     * @param {sys_userDeleteArgs} args - Arguments to delete one Sys_user.
     * @example
     * // Delete one Sys_user
     * const Sys_user = await prisma.sys_user.delete({
     *   where: {
     *     // ... filter to delete one Sys_user
     *   }
     * })
     * 
     */
    delete<T extends sys_userDeleteArgs>(args: SelectSubset<T, sys_userDeleteArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_user.
     * @param {sys_userUpdateArgs} args - Arguments to update one Sys_user.
     * @example
     * // Update one Sys_user
     * const sys_user = await prisma.sys_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_userUpdateArgs>(args: SelectSubset<T, sys_userUpdateArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_users.
     * @param {sys_userDeleteManyArgs} args - Arguments to filter Sys_users to delete.
     * @example
     * // Delete a few Sys_users
     * const { count } = await prisma.sys_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_userDeleteManyArgs>(args?: SelectSubset<T, sys_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_users
     * const sys_user = await prisma.sys_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_userUpdateManyArgs>(args: SelectSubset<T, sys_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_user.
     * @param {sys_userUpsertArgs} args - Arguments to update or create a Sys_user.
     * @example
     * // Update or create a Sys_user
     * const sys_user = await prisma.sys_user.upsert({
     *   create: {
     *     // ... data to create a Sys_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_user we want to update
     *   }
     * })
     */
    upsert<T extends sys_userUpsertArgs>(args: SelectSubset<T, sys_userUpsertArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userCountArgs} args - Arguments to filter Sys_users to count.
     * @example
     * // Count the number of Sys_users
     * const count = await prisma.sys_user.count({
     *   where: {
     *     // ... the filter for the Sys_users we want to count
     *   }
     * })
    **/
    count<T extends sys_userCountArgs>(
      args?: Subset<T, sys_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_userAggregateArgs>(args: Subset<T, Sys_userAggregateArgs>): Prisma.PrismaPromise<GetSys_userAggregateType<T>>

    /**
     * Group by Sys_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_userGroupByArgs['orderBy'] }
        : { orderBy?: sys_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_user model
   */
  readonly fields: sys_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends sys_user$organizationArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$organizationArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    department<T extends sys_user$departmentArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$departmentArgs<ExtArgs>>): Prisma__sys_deptClient<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sys_log<T extends sys_user$sys_logArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$sys_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role_users<T extends sys_user$role_usersArgs<ExtArgs> = {}>(args?: Subset<T, sys_user$role_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_user model
   */
  interface sys_userFieldRefs {
    readonly id: FieldRef<"sys_user", 'String'>
    readonly create_time: FieldRef<"sys_user", 'DateTime'>
    readonly update_time: FieldRef<"sys_user", 'DateTime'>
    readonly org_id: FieldRef<"sys_user", 'String'>
    readonly org_code: FieldRef<"sys_user", 'String'>
    readonly dept_id: FieldRef<"sys_user", 'String'>
    readonly username: FieldRef<"sys_user", 'String'>
    readonly password: FieldRef<"sys_user", 'String'>
    readonly nickname: FieldRef<"sys_user", 'String'>
    readonly real_name: FieldRef<"sys_user", 'String'>
    readonly email: FieldRef<"sys_user", 'String'>
    readonly phone: FieldRef<"sys_user", 'String'>
    readonly job_no: FieldRef<"sys_user", 'String'>
    readonly status: FieldRef<"sys_user", 'Int'>
    readonly hidden: FieldRef<"sys_user", 'Boolean'>
    readonly admin_flag: FieldRef<"sys_user", 'Boolean'>
    readonly avatar: FieldRef<"sys_user", 'String'>
    readonly client_id: FieldRef<"sys_user", 'String'>
    readonly sort: FieldRef<"sys_user", 'Int'>
    readonly user_function_codes: FieldRef<"sys_user", 'String'>
    readonly deleted: FieldRef<"sys_user", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * sys_user findUnique
   */
  export type sys_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user findUniqueOrThrow
   */
  export type sys_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user findFirst
   */
  export type sys_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_users.
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_users.
     */
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_user findFirstOrThrow
   */
  export type sys_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_user to fetch.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_users.
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_users.
     */
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_user findMany
   */
  export type sys_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_users to fetch.
     */
    where?: sys_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_users to fetch.
     */
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_users.
     */
    cursor?: sys_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_users.
     */
    skip?: number
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_user create
   */
  export type sys_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_user.
     */
    data: XOR<sys_userCreateInput, sys_userUncheckedCreateInput>
  }

  /**
   * sys_user createMany
   */
  export type sys_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_users.
     */
    data: sys_userCreateManyInput | sys_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_user update
   */
  export type sys_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_user.
     */
    data: XOR<sys_userUpdateInput, sys_userUncheckedUpdateInput>
    /**
     * Choose, which sys_user to update.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user updateMany
   */
  export type sys_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_users.
     */
    data: XOR<sys_userUpdateManyMutationInput, sys_userUncheckedUpdateManyInput>
    /**
     * Filter which sys_users to update
     */
    where?: sys_userWhereInput
    /**
     * Limit how many sys_users to update.
     */
    limit?: number
  }

  /**
   * sys_user upsert
   */
  export type sys_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_user to update in case it exists.
     */
    where: sys_userWhereUniqueInput
    /**
     * In case the sys_user found by the `where` argument doesn't exist, create a new sys_user with this data.
     */
    create: XOR<sys_userCreateInput, sys_userUncheckedCreateInput>
    /**
     * In case the sys_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_userUpdateInput, sys_userUncheckedUpdateInput>
  }

  /**
   * sys_user delete
   */
  export type sys_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    /**
     * Filter which sys_user to delete.
     */
    where: sys_userWhereUniqueInput
  }

  /**
   * sys_user deleteMany
   */
  export type sys_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_users to delete
     */
    where?: sys_userWhereInput
    /**
     * Limit how many sys_users to delete.
     */
    limit?: number
  }

  /**
   * sys_user.organization
   */
  export type sys_user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    where?: sys_organizationWhereInput
  }

  /**
   * sys_user.department
   */
  export type sys_user$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    where?: sys_deptWhereInput
  }

  /**
   * sys_user.sys_log
   */
  export type sys_user$sys_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
    where?: sys_logWhereInput
    orderBy?: sys_logOrderByWithRelationInput | sys_logOrderByWithRelationInput[]
    cursor?: sys_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_logScalarFieldEnum | Sys_logScalarFieldEnum[]
  }

  /**
   * sys_user.role_users
   */
  export type sys_user$role_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    where?: sys_role_userWhereInput
    orderBy?: sys_role_userOrderByWithRelationInput | sys_role_userOrderByWithRelationInput[]
    cursor?: sys_role_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_role_userScalarFieldEnum | Sys_role_userScalarFieldEnum[]
  }

  /**
   * sys_user without action
   */
  export type sys_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
  }


  /**
   * Model sys_log
   */

  export type AggregateSys_log = {
    _count: Sys_logCountAggregateOutputType | null
    _avg: Sys_logAvgAggregateOutputType | null
    _sum: Sys_logSumAggregateOutputType | null
    _min: Sys_logMinAggregateOutputType | null
    _max: Sys_logMaxAggregateOutputType | null
  }

  export type Sys_logAvgAggregateOutputType = {
    time: number | null
  }

  export type Sys_logSumAggregateOutputType = {
    time: bigint | null
  }

  export type Sys_logMinAggregateOutputType = {
    id: string | null
    request_unique: string | null
    description: string | null
    log_type: $Enums.log_type | null
    method: string | null
    params: string | null
    request_ip: string | null
    time: bigint | null
    user_id: string | null
    user_name: string | null
    address: string | null
    exception_detail: string | null
    create_time: Date | null
  }

  export type Sys_logMaxAggregateOutputType = {
    id: string | null
    request_unique: string | null
    description: string | null
    log_type: $Enums.log_type | null
    method: string | null
    params: string | null
    request_ip: string | null
    time: bigint | null
    user_id: string | null
    user_name: string | null
    address: string | null
    exception_detail: string | null
    create_time: Date | null
  }

  export type Sys_logCountAggregateOutputType = {
    id: number
    request_unique: number
    description: number
    log_type: number
    method: number
    params: number
    request_ip: number
    time: number
    user_id: number
    user_name: number
    address: number
    exception_detail: number
    create_time: number
    _all: number
  }


  export type Sys_logAvgAggregateInputType = {
    time?: true
  }

  export type Sys_logSumAggregateInputType = {
    time?: true
  }

  export type Sys_logMinAggregateInputType = {
    id?: true
    request_unique?: true
    description?: true
    log_type?: true
    method?: true
    params?: true
    request_ip?: true
    time?: true
    user_id?: true
    user_name?: true
    address?: true
    exception_detail?: true
    create_time?: true
  }

  export type Sys_logMaxAggregateInputType = {
    id?: true
    request_unique?: true
    description?: true
    log_type?: true
    method?: true
    params?: true
    request_ip?: true
    time?: true
    user_id?: true
    user_name?: true
    address?: true
    exception_detail?: true
    create_time?: true
  }

  export type Sys_logCountAggregateInputType = {
    id?: true
    request_unique?: true
    description?: true
    log_type?: true
    method?: true
    params?: true
    request_ip?: true
    time?: true
    user_id?: true
    user_name?: true
    address?: true
    exception_detail?: true
    create_time?: true
    _all?: true
  }

  export type Sys_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_log to aggregate.
     */
    where?: sys_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_logs to fetch.
     */
    orderBy?: sys_logOrderByWithRelationInput | sys_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_logs
    **/
    _count?: true | Sys_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_logMaxAggregateInputType
  }

  export type GetSys_logAggregateType<T extends Sys_logAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_log[P]>
      : GetScalarType<T[P], AggregateSys_log[P]>
  }




  export type sys_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_logWhereInput
    orderBy?: sys_logOrderByWithAggregationInput | sys_logOrderByWithAggregationInput[]
    by: Sys_logScalarFieldEnum[] | Sys_logScalarFieldEnum
    having?: sys_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_logCountAggregateInputType | true
    _avg?: Sys_logAvgAggregateInputType
    _sum?: Sys_logSumAggregateInputType
    _min?: Sys_logMinAggregateInputType
    _max?: Sys_logMaxAggregateInputType
  }

  export type Sys_logGroupByOutputType = {
    id: string
    request_unique: string | null
    description: string | null
    log_type: $Enums.log_type | null
    method: string | null
    params: string | null
    request_ip: string | null
    time: bigint | null
    user_id: string | null
    user_name: string | null
    address: string | null
    exception_detail: string | null
    create_time: Date
    _count: Sys_logCountAggregateOutputType | null
    _avg: Sys_logAvgAggregateOutputType | null
    _sum: Sys_logSumAggregateOutputType | null
    _min: Sys_logMinAggregateOutputType | null
    _max: Sys_logMaxAggregateOutputType | null
  }

  type GetSys_logGroupByPayload<T extends sys_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_logGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_logGroupByOutputType[P]>
        }
      >
    >


  export type sys_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_unique?: boolean
    description?: boolean
    log_type?: boolean
    method?: boolean
    params?: boolean
    request_ip?: boolean
    time?: boolean
    user_id?: boolean
    user_name?: boolean
    address?: boolean
    exception_detail?: boolean
    create_time?: boolean
    user?: boolean | sys_log$userArgs<ExtArgs>
  }, ExtArgs["result"]["sys_log"]>



  export type sys_logSelectScalar = {
    id?: boolean
    request_unique?: boolean
    description?: boolean
    log_type?: boolean
    method?: boolean
    params?: boolean
    request_ip?: boolean
    time?: boolean
    user_id?: boolean
    user_name?: boolean
    address?: boolean
    exception_detail?: boolean
    create_time?: boolean
  }

  export type sys_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "request_unique" | "description" | "log_type" | "method" | "params" | "request_ip" | "time" | "user_id" | "user_name" | "address" | "exception_detail" | "create_time", ExtArgs["result"]["sys_log"]>
  export type sys_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | sys_log$userArgs<ExtArgs>
  }

  export type $sys_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_log"
    objects: {
      user: Prisma.$sys_userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * ID
       */
      id: string
      /**
       * 请求唯一码
       */
      request_unique: string | null
      /**
       * 日志描述
       */
      description: string | null
      /**
       * 日志类型
       */
      log_type: $Enums.log_type | null
      /**
       * 请求方法
       */
      method: string | null
      /**
       * 请求参数
       */
      params: string | null
      /**
       * 请求IP
       */
      request_ip: string | null
      /**
       * 耗时
       */
      time: bigint | null
      /**
       * 用户ID
       */
      user_id: string | null
      /**
       * 用户名称
       */
      user_name: string | null
      /**
       * 地址
       */
      address: string | null
      /**
       * 异常信息
       */
      exception_detail: string | null
      /**
       * 创建时间
       */
      create_time: Date
    }, ExtArgs["result"]["sys_log"]>
    composites: {}
  }

  type sys_logGetPayload<S extends boolean | null | undefined | sys_logDefaultArgs> = $Result.GetResult<Prisma.$sys_logPayload, S>

  type sys_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_logCountAggregateInputType | true
    }

  export interface sys_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_log'], meta: { name: 'sys_log' } }
    /**
     * Find zero or one Sys_log that matches the filter.
     * @param {sys_logFindUniqueArgs} args - Arguments to find a Sys_log
     * @example
     * // Get one Sys_log
     * const sys_log = await prisma.sys_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_logFindUniqueArgs>(args: SelectSubset<T, sys_logFindUniqueArgs<ExtArgs>>): Prisma__sys_logClient<$Result.GetResult<Prisma.$sys_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_logFindUniqueOrThrowArgs} args - Arguments to find a Sys_log
     * @example
     * // Get one Sys_log
     * const sys_log = await prisma.sys_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_logFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_logClient<$Result.GetResult<Prisma.$sys_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_logFindFirstArgs} args - Arguments to find a Sys_log
     * @example
     * // Get one Sys_log
     * const sys_log = await prisma.sys_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_logFindFirstArgs>(args?: SelectSubset<T, sys_logFindFirstArgs<ExtArgs>>): Prisma__sys_logClient<$Result.GetResult<Prisma.$sys_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_logFindFirstOrThrowArgs} args - Arguments to find a Sys_log
     * @example
     * // Get one Sys_log
     * const sys_log = await prisma.sys_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_logFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_logClient<$Result.GetResult<Prisma.$sys_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_logs
     * const sys_logs = await prisma.sys_log.findMany()
     * 
     * // Get first 10 Sys_logs
     * const sys_logs = await prisma.sys_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_logWithIdOnly = await prisma.sys_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_logFindManyArgs>(args?: SelectSubset<T, sys_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_log.
     * @param {sys_logCreateArgs} args - Arguments to create a Sys_log.
     * @example
     * // Create one Sys_log
     * const Sys_log = await prisma.sys_log.create({
     *   data: {
     *     // ... data to create a Sys_log
     *   }
     * })
     * 
     */
    create<T extends sys_logCreateArgs>(args: SelectSubset<T, sys_logCreateArgs<ExtArgs>>): Prisma__sys_logClient<$Result.GetResult<Prisma.$sys_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_logs.
     * @param {sys_logCreateManyArgs} args - Arguments to create many Sys_logs.
     * @example
     * // Create many Sys_logs
     * const sys_log = await prisma.sys_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_logCreateManyArgs>(args?: SelectSubset<T, sys_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_log.
     * @param {sys_logDeleteArgs} args - Arguments to delete one Sys_log.
     * @example
     * // Delete one Sys_log
     * const Sys_log = await prisma.sys_log.delete({
     *   where: {
     *     // ... filter to delete one Sys_log
     *   }
     * })
     * 
     */
    delete<T extends sys_logDeleteArgs>(args: SelectSubset<T, sys_logDeleteArgs<ExtArgs>>): Prisma__sys_logClient<$Result.GetResult<Prisma.$sys_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_log.
     * @param {sys_logUpdateArgs} args - Arguments to update one Sys_log.
     * @example
     * // Update one Sys_log
     * const sys_log = await prisma.sys_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_logUpdateArgs>(args: SelectSubset<T, sys_logUpdateArgs<ExtArgs>>): Prisma__sys_logClient<$Result.GetResult<Prisma.$sys_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_logs.
     * @param {sys_logDeleteManyArgs} args - Arguments to filter Sys_logs to delete.
     * @example
     * // Delete a few Sys_logs
     * const { count } = await prisma.sys_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_logDeleteManyArgs>(args?: SelectSubset<T, sys_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_logs
     * const sys_log = await prisma.sys_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_logUpdateManyArgs>(args: SelectSubset<T, sys_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_log.
     * @param {sys_logUpsertArgs} args - Arguments to update or create a Sys_log.
     * @example
     * // Update or create a Sys_log
     * const sys_log = await prisma.sys_log.upsert({
     *   create: {
     *     // ... data to create a Sys_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_log we want to update
     *   }
     * })
     */
    upsert<T extends sys_logUpsertArgs>(args: SelectSubset<T, sys_logUpsertArgs<ExtArgs>>): Prisma__sys_logClient<$Result.GetResult<Prisma.$sys_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_logCountArgs} args - Arguments to filter Sys_logs to count.
     * @example
     * // Count the number of Sys_logs
     * const count = await prisma.sys_log.count({
     *   where: {
     *     // ... the filter for the Sys_logs we want to count
     *   }
     * })
    **/
    count<T extends sys_logCountArgs>(
      args?: Subset<T, sys_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_logAggregateArgs>(args: Subset<T, Sys_logAggregateArgs>): Prisma.PrismaPromise<GetSys_logAggregateType<T>>

    /**
     * Group by Sys_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_logGroupByArgs['orderBy'] }
        : { orderBy?: sys_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_log model
   */
  readonly fields: sys_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends sys_log$userArgs<ExtArgs> = {}>(args?: Subset<T, sys_log$userArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_log model
   */
  interface sys_logFieldRefs {
    readonly id: FieldRef<"sys_log", 'String'>
    readonly request_unique: FieldRef<"sys_log", 'String'>
    readonly description: FieldRef<"sys_log", 'String'>
    readonly log_type: FieldRef<"sys_log", 'log_type'>
    readonly method: FieldRef<"sys_log", 'String'>
    readonly params: FieldRef<"sys_log", 'String'>
    readonly request_ip: FieldRef<"sys_log", 'String'>
    readonly time: FieldRef<"sys_log", 'BigInt'>
    readonly user_id: FieldRef<"sys_log", 'String'>
    readonly user_name: FieldRef<"sys_log", 'String'>
    readonly address: FieldRef<"sys_log", 'String'>
    readonly exception_detail: FieldRef<"sys_log", 'String'>
    readonly create_time: FieldRef<"sys_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sys_log findUnique
   */
  export type sys_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
    /**
     * Filter, which sys_log to fetch.
     */
    where: sys_logWhereUniqueInput
  }

  /**
   * sys_log findUniqueOrThrow
   */
  export type sys_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
    /**
     * Filter, which sys_log to fetch.
     */
    where: sys_logWhereUniqueInput
  }

  /**
   * sys_log findFirst
   */
  export type sys_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
    /**
     * Filter, which sys_log to fetch.
     */
    where?: sys_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_logs to fetch.
     */
    orderBy?: sys_logOrderByWithRelationInput | sys_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_logs.
     */
    cursor?: sys_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_logs.
     */
    distinct?: Sys_logScalarFieldEnum | Sys_logScalarFieldEnum[]
  }

  /**
   * sys_log findFirstOrThrow
   */
  export type sys_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
    /**
     * Filter, which sys_log to fetch.
     */
    where?: sys_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_logs to fetch.
     */
    orderBy?: sys_logOrderByWithRelationInput | sys_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_logs.
     */
    cursor?: sys_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_logs.
     */
    distinct?: Sys_logScalarFieldEnum | Sys_logScalarFieldEnum[]
  }

  /**
   * sys_log findMany
   */
  export type sys_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
    /**
     * Filter, which sys_logs to fetch.
     */
    where?: sys_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_logs to fetch.
     */
    orderBy?: sys_logOrderByWithRelationInput | sys_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_logs.
     */
    cursor?: sys_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_logs.
     */
    skip?: number
    distinct?: Sys_logScalarFieldEnum | Sys_logScalarFieldEnum[]
  }

  /**
   * sys_log create
   */
  export type sys_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_log.
     */
    data?: XOR<sys_logCreateInput, sys_logUncheckedCreateInput>
  }

  /**
   * sys_log createMany
   */
  export type sys_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_logs.
     */
    data: sys_logCreateManyInput | sys_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_log update
   */
  export type sys_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_log.
     */
    data: XOR<sys_logUpdateInput, sys_logUncheckedUpdateInput>
    /**
     * Choose, which sys_log to update.
     */
    where: sys_logWhereUniqueInput
  }

  /**
   * sys_log updateMany
   */
  export type sys_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_logs.
     */
    data: XOR<sys_logUpdateManyMutationInput, sys_logUncheckedUpdateManyInput>
    /**
     * Filter which sys_logs to update
     */
    where?: sys_logWhereInput
    /**
     * Limit how many sys_logs to update.
     */
    limit?: number
  }

  /**
   * sys_log upsert
   */
  export type sys_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_log to update in case it exists.
     */
    where: sys_logWhereUniqueInput
    /**
     * In case the sys_log found by the `where` argument doesn't exist, create a new sys_log with this data.
     */
    create: XOR<sys_logCreateInput, sys_logUncheckedCreateInput>
    /**
     * In case the sys_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_logUpdateInput, sys_logUncheckedUpdateInput>
  }

  /**
   * sys_log delete
   */
  export type sys_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
    /**
     * Filter which sys_log to delete.
     */
    where: sys_logWhereUniqueInput
  }

  /**
   * sys_log deleteMany
   */
  export type sys_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_logs to delete
     */
    where?: sys_logWhereInput
    /**
     * Limit how many sys_logs to delete.
     */
    limit?: number
  }

  /**
   * sys_log.user
   */
  export type sys_log$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    where?: sys_userWhereInput
  }

  /**
   * sys_log without action
   */
  export type sys_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_log
     */
    select?: sys_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_log
     */
    omit?: sys_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_logInclude<ExtArgs> | null
  }


  /**
   * Model sys_menu
   */

  export type AggregateSys_menu = {
    _count: Sys_menuCountAggregateOutputType | null
    _avg: Sys_menuAvgAggregateOutputType | null
    _sum: Sys_menuSumAggregateOutputType | null
    _min: Sys_menuMinAggregateOutputType | null
    _max: Sys_menuMaxAggregateOutputType | null
  }

  export type Sys_menuAvgAggregateOutputType = {
    type: number | null
    orderNum: number | null
  }

  export type Sys_menuSumAggregateOutputType = {
    type: number | null
    orderNum: number | null
  }

  export type Sys_menuMinAggregateOutputType = {
    id: string | null
    create_time: Date | null
    update_time: Date | null
    create_by: string | null
    update_by: string | null
    pid: string | null
    name: string | null
    url: string | null
    perms: string | null
    type: number | null
    mode: string | null
    icon: string | null
    color: string | null
    routeUrl: string | null
    breadCrumb: string | null
    componentName: string | null
    componentPath: string | null
    orderNum: number | null
    display: boolean | null
    deleted: boolean | null
  }

  export type Sys_menuMaxAggregateOutputType = {
    id: string | null
    create_time: Date | null
    update_time: Date | null
    create_by: string | null
    update_by: string | null
    pid: string | null
    name: string | null
    url: string | null
    perms: string | null
    type: number | null
    mode: string | null
    icon: string | null
    color: string | null
    routeUrl: string | null
    breadCrumb: string | null
    componentName: string | null
    componentPath: string | null
    orderNum: number | null
    display: boolean | null
    deleted: boolean | null
  }

  export type Sys_menuCountAggregateOutputType = {
    id: number
    create_time: number
    update_time: number
    create_by: number
    update_by: number
    pid: number
    name: number
    url: number
    perms: number
    type: number
    mode: number
    icon: number
    color: number
    routeUrl: number
    breadCrumb: number
    componentName: number
    componentPath: number
    orderNum: number
    display: number
    deleted: number
    _all: number
  }


  export type Sys_menuAvgAggregateInputType = {
    type?: true
    orderNum?: true
  }

  export type Sys_menuSumAggregateInputType = {
    type?: true
    orderNum?: true
  }

  export type Sys_menuMinAggregateInputType = {
    id?: true
    create_time?: true
    update_time?: true
    create_by?: true
    update_by?: true
    pid?: true
    name?: true
    url?: true
    perms?: true
    type?: true
    mode?: true
    icon?: true
    color?: true
    routeUrl?: true
    breadCrumb?: true
    componentName?: true
    componentPath?: true
    orderNum?: true
    display?: true
    deleted?: true
  }

  export type Sys_menuMaxAggregateInputType = {
    id?: true
    create_time?: true
    update_time?: true
    create_by?: true
    update_by?: true
    pid?: true
    name?: true
    url?: true
    perms?: true
    type?: true
    mode?: true
    icon?: true
    color?: true
    routeUrl?: true
    breadCrumb?: true
    componentName?: true
    componentPath?: true
    orderNum?: true
    display?: true
    deleted?: true
  }

  export type Sys_menuCountAggregateInputType = {
    id?: true
    create_time?: true
    update_time?: true
    create_by?: true
    update_by?: true
    pid?: true
    name?: true
    url?: true
    perms?: true
    type?: true
    mode?: true
    icon?: true
    color?: true
    routeUrl?: true
    breadCrumb?: true
    componentName?: true
    componentPath?: true
    orderNum?: true
    display?: true
    deleted?: true
    _all?: true
  }

  export type Sys_menuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_menu to aggregate.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_menus
    **/
    _count?: true | Sys_menuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_menuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_menuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_menuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_menuMaxAggregateInputType
  }

  export type GetSys_menuAggregateType<T extends Sys_menuAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_menu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_menu[P]>
      : GetScalarType<T[P], AggregateSys_menu[P]>
  }




  export type sys_menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_menuWhereInput
    orderBy?: sys_menuOrderByWithAggregationInput | sys_menuOrderByWithAggregationInput[]
    by: Sys_menuScalarFieldEnum[] | Sys_menuScalarFieldEnum
    having?: sys_menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_menuCountAggregateInputType | true
    _avg?: Sys_menuAvgAggregateInputType
    _sum?: Sys_menuSumAggregateInputType
    _min?: Sys_menuMinAggregateInputType
    _max?: Sys_menuMaxAggregateInputType
  }

  export type Sys_menuGroupByOutputType = {
    id: string
    create_time: Date
    update_time: Date
    create_by: string | null
    update_by: string | null
    pid: string | null
    name: string | null
    url: string | null
    perms: string | null
    type: number
    mode: string | null
    icon: string | null
    color: string | null
    routeUrl: string | null
    breadCrumb: string | null
    componentName: string | null
    componentPath: string | null
    orderNum: number
    display: boolean
    deleted: boolean
    _count: Sys_menuCountAggregateOutputType | null
    _avg: Sys_menuAvgAggregateOutputType | null
    _sum: Sys_menuSumAggregateOutputType | null
    _min: Sys_menuMinAggregateOutputType | null
    _max: Sys_menuMaxAggregateOutputType | null
  }

  type GetSys_menuGroupByPayload<T extends sys_menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_menuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_menuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_menuGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_menuGroupByOutputType[P]>
        }
      >
    >


  export type sys_menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    create_time?: boolean
    update_time?: boolean
    create_by?: boolean
    update_by?: boolean
    pid?: boolean
    name?: boolean
    url?: boolean
    perms?: boolean
    type?: boolean
    mode?: boolean
    icon?: boolean
    color?: boolean
    routeUrl?: boolean
    breadCrumb?: boolean
    componentName?: boolean
    componentPath?: boolean
    orderNum?: boolean
    display?: boolean
    deleted?: boolean
    parent?: boolean | sys_menu$parentArgs<ExtArgs>
    children?: boolean | sys_menu$childrenArgs<ExtArgs>
    role_menus?: boolean | sys_menu$role_menusArgs<ExtArgs>
    _count?: boolean | Sys_menuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_menu"]>



  export type sys_menuSelectScalar = {
    id?: boolean
    create_time?: boolean
    update_time?: boolean
    create_by?: boolean
    update_by?: boolean
    pid?: boolean
    name?: boolean
    url?: boolean
    perms?: boolean
    type?: boolean
    mode?: boolean
    icon?: boolean
    color?: boolean
    routeUrl?: boolean
    breadCrumb?: boolean
    componentName?: boolean
    componentPath?: boolean
    orderNum?: boolean
    display?: boolean
    deleted?: boolean
  }

  export type sys_menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "create_time" | "update_time" | "create_by" | "update_by" | "pid" | "name" | "url" | "perms" | "type" | "mode" | "icon" | "color" | "routeUrl" | "breadCrumb" | "componentName" | "componentPath" | "orderNum" | "display" | "deleted", ExtArgs["result"]["sys_menu"]>
  export type sys_menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | sys_menu$parentArgs<ExtArgs>
    children?: boolean | sys_menu$childrenArgs<ExtArgs>
    role_menus?: boolean | sys_menu$role_menusArgs<ExtArgs>
    _count?: boolean | Sys_menuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_menu"
    objects: {
      parent: Prisma.$sys_menuPayload<ExtArgs> | null
      children: Prisma.$sys_menuPayload<ExtArgs>[]
      /**
       * 菜单角色关联
       */
      role_menus: Prisma.$sys_role_menuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      create_time: Date
      update_time: Date
      /**
       * 创建人id
       */
      create_by: string | null
      /**
       * 更新人id
       */
      update_by: string | null
      /**
       * 父菜单ID
       */
      pid: string | null
      /**
       * 菜单名称
       */
      name: string | null
      /**
       * 菜单URL
       */
      url: string | null
      /**
       * 授权（多个用逗号分隔，如： user:list,user:create
       */
      perms: string | null
      /**
       * 类型 0:目录 1:菜单 2:按钮
       */
      type: number
      /**
       * 模式：pc，app
       */
      mode: string | null
      /**
       * 菜单图标
       */
      icon: string | null
      /**
       * 颜色
       */
      color: string | null
      /**
       * 路由地址
       */
      routeUrl: string | null
      /**
       * 是否显示面包屑
       */
      breadCrumb: string | null
      /**
       * 组件路径
       */
      componentName: string | null
      /**
       * 组件名称
       */
      componentPath: string | null
      /**
       * 排序
       */
      orderNum: number
      /**
       * 是否显示
       */
      display: boolean
      /**
       * 是否被删除
       */
      deleted: boolean
    }, ExtArgs["result"]["sys_menu"]>
    composites: {}
  }

  type sys_menuGetPayload<S extends boolean | null | undefined | sys_menuDefaultArgs> = $Result.GetResult<Prisma.$sys_menuPayload, S>

  type sys_menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_menuCountAggregateInputType | true
    }

  export interface sys_menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_menu'], meta: { name: 'sys_menu' } }
    /**
     * Find zero or one Sys_menu that matches the filter.
     * @param {sys_menuFindUniqueArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_menuFindUniqueArgs>(args: SelectSubset<T, sys_menuFindUniqueArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_menuFindUniqueOrThrowArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_menuFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuFindFirstArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_menuFindFirstArgs>(args?: SelectSubset<T, sys_menuFindFirstArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuFindFirstOrThrowArgs} args - Arguments to find a Sys_menu
     * @example
     * // Get one Sys_menu
     * const sys_menu = await prisma.sys_menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_menuFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_menus
     * const sys_menus = await prisma.sys_menu.findMany()
     * 
     * // Get first 10 Sys_menus
     * const sys_menus = await prisma.sys_menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_menuWithIdOnly = await prisma.sys_menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_menuFindManyArgs>(args?: SelectSubset<T, sys_menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_menu.
     * @param {sys_menuCreateArgs} args - Arguments to create a Sys_menu.
     * @example
     * // Create one Sys_menu
     * const Sys_menu = await prisma.sys_menu.create({
     *   data: {
     *     // ... data to create a Sys_menu
     *   }
     * })
     * 
     */
    create<T extends sys_menuCreateArgs>(args: SelectSubset<T, sys_menuCreateArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_menus.
     * @param {sys_menuCreateManyArgs} args - Arguments to create many Sys_menus.
     * @example
     * // Create many Sys_menus
     * const sys_menu = await prisma.sys_menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_menuCreateManyArgs>(args?: SelectSubset<T, sys_menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_menu.
     * @param {sys_menuDeleteArgs} args - Arguments to delete one Sys_menu.
     * @example
     * // Delete one Sys_menu
     * const Sys_menu = await prisma.sys_menu.delete({
     *   where: {
     *     // ... filter to delete one Sys_menu
     *   }
     * })
     * 
     */
    delete<T extends sys_menuDeleteArgs>(args: SelectSubset<T, sys_menuDeleteArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_menu.
     * @param {sys_menuUpdateArgs} args - Arguments to update one Sys_menu.
     * @example
     * // Update one Sys_menu
     * const sys_menu = await prisma.sys_menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_menuUpdateArgs>(args: SelectSubset<T, sys_menuUpdateArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_menus.
     * @param {sys_menuDeleteManyArgs} args - Arguments to filter Sys_menus to delete.
     * @example
     * // Delete a few Sys_menus
     * const { count } = await prisma.sys_menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_menuDeleteManyArgs>(args?: SelectSubset<T, sys_menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_menus
     * const sys_menu = await prisma.sys_menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_menuUpdateManyArgs>(args: SelectSubset<T, sys_menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_menu.
     * @param {sys_menuUpsertArgs} args - Arguments to update or create a Sys_menu.
     * @example
     * // Update or create a Sys_menu
     * const sys_menu = await prisma.sys_menu.upsert({
     *   create: {
     *     // ... data to create a Sys_menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_menu we want to update
     *   }
     * })
     */
    upsert<T extends sys_menuUpsertArgs>(args: SelectSubset<T, sys_menuUpsertArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuCountArgs} args - Arguments to filter Sys_menus to count.
     * @example
     * // Count the number of Sys_menus
     * const count = await prisma.sys_menu.count({
     *   where: {
     *     // ... the filter for the Sys_menus we want to count
     *   }
     * })
    **/
    count<T extends sys_menuCountArgs>(
      args?: Subset<T, sys_menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_menuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_menuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_menuAggregateArgs>(args: Subset<T, Sys_menuAggregateArgs>): Prisma.PrismaPromise<GetSys_menuAggregateType<T>>

    /**
     * Group by Sys_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_menuGroupByArgs['orderBy'] }
        : { orderBy?: sys_menuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_menuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_menu model
   */
  readonly fields: sys_menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends sys_menu$parentArgs<ExtArgs> = {}>(args?: Subset<T, sys_menu$parentArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends sys_menu$childrenArgs<ExtArgs> = {}>(args?: Subset<T, sys_menu$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role_menus<T extends sys_menu$role_menusArgs<ExtArgs> = {}>(args?: Subset<T, sys_menu$role_menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_menu model
   */
  interface sys_menuFieldRefs {
    readonly id: FieldRef<"sys_menu", 'String'>
    readonly create_time: FieldRef<"sys_menu", 'DateTime'>
    readonly update_time: FieldRef<"sys_menu", 'DateTime'>
    readonly create_by: FieldRef<"sys_menu", 'String'>
    readonly update_by: FieldRef<"sys_menu", 'String'>
    readonly pid: FieldRef<"sys_menu", 'String'>
    readonly name: FieldRef<"sys_menu", 'String'>
    readonly url: FieldRef<"sys_menu", 'String'>
    readonly perms: FieldRef<"sys_menu", 'String'>
    readonly type: FieldRef<"sys_menu", 'Int'>
    readonly mode: FieldRef<"sys_menu", 'String'>
    readonly icon: FieldRef<"sys_menu", 'String'>
    readonly color: FieldRef<"sys_menu", 'String'>
    readonly routeUrl: FieldRef<"sys_menu", 'String'>
    readonly breadCrumb: FieldRef<"sys_menu", 'String'>
    readonly componentName: FieldRef<"sys_menu", 'String'>
    readonly componentPath: FieldRef<"sys_menu", 'String'>
    readonly orderNum: FieldRef<"sys_menu", 'Int'>
    readonly display: FieldRef<"sys_menu", 'Boolean'>
    readonly deleted: FieldRef<"sys_menu", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * sys_menu findUnique
   */
  export type sys_menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu findUniqueOrThrow
   */
  export type sys_menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu findFirst
   */
  export type sys_menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_menus.
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_menus.
     */
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu findFirstOrThrow
   */
  export type sys_menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_menu to fetch.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_menus.
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_menus.
     */
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu findMany
   */
  export type sys_menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_menus to fetch.
     */
    where?: sys_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_menus to fetch.
     */
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_menus.
     */
    cursor?: sys_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_menus.
     */
    skip?: number
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu create
   */
  export type sys_menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_menu.
     */
    data?: XOR<sys_menuCreateInput, sys_menuUncheckedCreateInput>
  }

  /**
   * sys_menu createMany
   */
  export type sys_menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_menus.
     */
    data: sys_menuCreateManyInput | sys_menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_menu update
   */
  export type sys_menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_menu.
     */
    data: XOR<sys_menuUpdateInput, sys_menuUncheckedUpdateInput>
    /**
     * Choose, which sys_menu to update.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu updateMany
   */
  export type sys_menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_menus.
     */
    data: XOR<sys_menuUpdateManyMutationInput, sys_menuUncheckedUpdateManyInput>
    /**
     * Filter which sys_menus to update
     */
    where?: sys_menuWhereInput
    /**
     * Limit how many sys_menus to update.
     */
    limit?: number
  }

  /**
   * sys_menu upsert
   */
  export type sys_menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_menu to update in case it exists.
     */
    where: sys_menuWhereUniqueInput
    /**
     * In case the sys_menu found by the `where` argument doesn't exist, create a new sys_menu with this data.
     */
    create: XOR<sys_menuCreateInput, sys_menuUncheckedCreateInput>
    /**
     * In case the sys_menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_menuUpdateInput, sys_menuUncheckedUpdateInput>
  }

  /**
   * sys_menu delete
   */
  export type sys_menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    /**
     * Filter which sys_menu to delete.
     */
    where: sys_menuWhereUniqueInput
  }

  /**
   * sys_menu deleteMany
   */
  export type sys_menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_menus to delete
     */
    where?: sys_menuWhereInput
    /**
     * Limit how many sys_menus to delete.
     */
    limit?: number
  }

  /**
   * sys_menu.parent
   */
  export type sys_menu$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    where?: sys_menuWhereInput
  }

  /**
   * sys_menu.children
   */
  export type sys_menu$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    where?: sys_menuWhereInput
    orderBy?: sys_menuOrderByWithRelationInput | sys_menuOrderByWithRelationInput[]
    cursor?: sys_menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_menuScalarFieldEnum | Sys_menuScalarFieldEnum[]
  }

  /**
   * sys_menu.role_menus
   */
  export type sys_menu$role_menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    where?: sys_role_menuWhereInput
    orderBy?: sys_role_menuOrderByWithRelationInput | sys_role_menuOrderByWithRelationInput[]
    cursor?: sys_role_menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_role_menuScalarFieldEnum | Sys_role_menuScalarFieldEnum[]
  }

  /**
   * sys_menu without action
   */
  export type sys_menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
  }


  /**
   * Model sys_config
   */

  export type AggregateSys_config = {
    _count: Sys_configCountAggregateOutputType | null
    _avg: Sys_configAvgAggregateOutputType | null
    _sum: Sys_configSumAggregateOutputType | null
    _min: Sys_configMinAggregateOutputType | null
    _max: Sys_configMaxAggregateOutputType | null
  }

  export type Sys_configAvgAggregateOutputType = {
    sort: number | null
  }

  export type Sys_configSumAggregateOutputType = {
    sort: number | null
  }

  export type Sys_configMinAggregateOutputType = {
    id: string | null
    code: string | null
    type: $Enums.config_type | null
    describe: string | null
    value: string | null
    sort: number | null
    enabled: boolean | null
    cache: boolean | null
    update_by: string | null
    update_time: Date | null
    create_by: string | null
    create_time: Date | null
    deleted: boolean | null
  }

  export type Sys_configMaxAggregateOutputType = {
    id: string | null
    code: string | null
    type: $Enums.config_type | null
    describe: string | null
    value: string | null
    sort: number | null
    enabled: boolean | null
    cache: boolean | null
    update_by: string | null
    update_time: Date | null
    create_by: string | null
    create_time: Date | null
    deleted: boolean | null
  }

  export type Sys_configCountAggregateOutputType = {
    id: number
    code: number
    type: number
    describe: number
    value: number
    sort: number
    enabled: number
    cache: number
    update_by: number
    update_time: number
    create_by: number
    create_time: number
    deleted: number
    _all: number
  }


  export type Sys_configAvgAggregateInputType = {
    sort?: true
  }

  export type Sys_configSumAggregateInputType = {
    sort?: true
  }

  export type Sys_configMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    describe?: true
    value?: true
    sort?: true
    enabled?: true
    cache?: true
    update_by?: true
    update_time?: true
    create_by?: true
    create_time?: true
    deleted?: true
  }

  export type Sys_configMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    describe?: true
    value?: true
    sort?: true
    enabled?: true
    cache?: true
    update_by?: true
    update_time?: true
    create_by?: true
    create_time?: true
    deleted?: true
  }

  export type Sys_configCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    describe?: true
    value?: true
    sort?: true
    enabled?: true
    cache?: true
    update_by?: true
    update_time?: true
    create_by?: true
    create_time?: true
    deleted?: true
    _all?: true
  }

  export type Sys_configAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_config to aggregate.
     */
    where?: sys_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_configs to fetch.
     */
    orderBy?: sys_configOrderByWithRelationInput | sys_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_configs
    **/
    _count?: true | Sys_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_configAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_configSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_configMaxAggregateInputType
  }

  export type GetSys_configAggregateType<T extends Sys_configAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_config[P]>
      : GetScalarType<T[P], AggregateSys_config[P]>
  }




  export type sys_configGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_configWhereInput
    orderBy?: sys_configOrderByWithAggregationInput | sys_configOrderByWithAggregationInput[]
    by: Sys_configScalarFieldEnum[] | Sys_configScalarFieldEnum
    having?: sys_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_configCountAggregateInputType | true
    _avg?: Sys_configAvgAggregateInputType
    _sum?: Sys_configSumAggregateInputType
    _min?: Sys_configMinAggregateInputType
    _max?: Sys_configMaxAggregateInputType
  }

  export type Sys_configGroupByOutputType = {
    id: string
    code: string | null
    type: $Enums.config_type
    describe: string | null
    value: string | null
    sort: number
    enabled: boolean
    cache: boolean
    update_by: string
    update_time: Date | null
    create_by: string
    create_time: Date | null
    deleted: boolean
    _count: Sys_configCountAggregateOutputType | null
    _avg: Sys_configAvgAggregateOutputType | null
    _sum: Sys_configSumAggregateOutputType | null
    _min: Sys_configMinAggregateOutputType | null
    _max: Sys_configMaxAggregateOutputType | null
  }

  type GetSys_configGroupByPayload<T extends sys_configGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_configGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_configGroupByOutputType[P]>
        }
      >
    >


  export type sys_configSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    describe?: boolean
    value?: boolean
    sort?: boolean
    enabled?: boolean
    cache?: boolean
    update_by?: boolean
    update_time?: boolean
    create_by?: boolean
    create_time?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["sys_config"]>



  export type sys_configSelectScalar = {
    id?: boolean
    code?: boolean
    type?: boolean
    describe?: boolean
    value?: boolean
    sort?: boolean
    enabled?: boolean
    cache?: boolean
    update_by?: boolean
    update_time?: boolean
    create_by?: boolean
    create_time?: boolean
    deleted?: boolean
  }

  export type sys_configOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "type" | "describe" | "value" | "sort" | "enabled" | "cache" | "update_by" | "update_time" | "create_by" | "create_time" | "deleted", ExtArgs["result"]["sys_config"]>

  export type $sys_configPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * ID
       */
      id: string
      /**
       * 配置编码
       */
      code: string | null
      /**
       * 类型:string、boolean、int、json
       */
      type: $Enums.config_type
      /**
       * 描述
       */
      describe: string | null
      /**
       * 值
       */
      value: string | null
      /**
       * 排序
       */
      sort: number
      /**
       * 是否启用
       */
      enabled: boolean
      /**
       * 是否加入缓存
       */
      cache: boolean
      /**
       * 修改者
       */
      update_by: string
      /**
       * 修改时间
       */
      update_time: Date | null
      /**
       * 创建者
       */
      create_by: string
      /**
       * 创建时间
       */
      create_time: Date | null
      /**
       * 是否被删除
       */
      deleted: boolean
    }, ExtArgs["result"]["sys_config"]>
    composites: {}
  }

  type sys_configGetPayload<S extends boolean | null | undefined | sys_configDefaultArgs> = $Result.GetResult<Prisma.$sys_configPayload, S>

  type sys_configCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_configFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_configCountAggregateInputType | true
    }

  export interface sys_configDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_config'], meta: { name: 'sys_config' } }
    /**
     * Find zero or one Sys_config that matches the filter.
     * @param {sys_configFindUniqueArgs} args - Arguments to find a Sys_config
     * @example
     * // Get one Sys_config
     * const sys_config = await prisma.sys_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_configFindUniqueArgs>(args: SelectSubset<T, sys_configFindUniqueArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_configFindUniqueOrThrowArgs} args - Arguments to find a Sys_config
     * @example
     * // Get one Sys_config
     * const sys_config = await prisma.sys_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_configFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_configFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configFindFirstArgs} args - Arguments to find a Sys_config
     * @example
     * // Get one Sys_config
     * const sys_config = await prisma.sys_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_configFindFirstArgs>(args?: SelectSubset<T, sys_configFindFirstArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configFindFirstOrThrowArgs} args - Arguments to find a Sys_config
     * @example
     * // Get one Sys_config
     * const sys_config = await prisma.sys_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_configFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_configFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_configs
     * const sys_configs = await prisma.sys_config.findMany()
     * 
     * // Get first 10 Sys_configs
     * const sys_configs = await prisma.sys_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_configWithIdOnly = await prisma.sys_config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_configFindManyArgs>(args?: SelectSubset<T, sys_configFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_config.
     * @param {sys_configCreateArgs} args - Arguments to create a Sys_config.
     * @example
     * // Create one Sys_config
     * const Sys_config = await prisma.sys_config.create({
     *   data: {
     *     // ... data to create a Sys_config
     *   }
     * })
     * 
     */
    create<T extends sys_configCreateArgs>(args: SelectSubset<T, sys_configCreateArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_configs.
     * @param {sys_configCreateManyArgs} args - Arguments to create many Sys_configs.
     * @example
     * // Create many Sys_configs
     * const sys_config = await prisma.sys_config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_configCreateManyArgs>(args?: SelectSubset<T, sys_configCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_config.
     * @param {sys_configDeleteArgs} args - Arguments to delete one Sys_config.
     * @example
     * // Delete one Sys_config
     * const Sys_config = await prisma.sys_config.delete({
     *   where: {
     *     // ... filter to delete one Sys_config
     *   }
     * })
     * 
     */
    delete<T extends sys_configDeleteArgs>(args: SelectSubset<T, sys_configDeleteArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_config.
     * @param {sys_configUpdateArgs} args - Arguments to update one Sys_config.
     * @example
     * // Update one Sys_config
     * const sys_config = await prisma.sys_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_configUpdateArgs>(args: SelectSubset<T, sys_configUpdateArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_configs.
     * @param {sys_configDeleteManyArgs} args - Arguments to filter Sys_configs to delete.
     * @example
     * // Delete a few Sys_configs
     * const { count } = await prisma.sys_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_configDeleteManyArgs>(args?: SelectSubset<T, sys_configDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_configs
     * const sys_config = await prisma.sys_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_configUpdateManyArgs>(args: SelectSubset<T, sys_configUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_config.
     * @param {sys_configUpsertArgs} args - Arguments to update or create a Sys_config.
     * @example
     * // Update or create a Sys_config
     * const sys_config = await prisma.sys_config.upsert({
     *   create: {
     *     // ... data to create a Sys_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_config we want to update
     *   }
     * })
     */
    upsert<T extends sys_configUpsertArgs>(args: SelectSubset<T, sys_configUpsertArgs<ExtArgs>>): Prisma__sys_configClient<$Result.GetResult<Prisma.$sys_configPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configCountArgs} args - Arguments to filter Sys_configs to count.
     * @example
     * // Count the number of Sys_configs
     * const count = await prisma.sys_config.count({
     *   where: {
     *     // ... the filter for the Sys_configs we want to count
     *   }
     * })
    **/
    count<T extends sys_configCountArgs>(
      args?: Subset<T, sys_configCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_configAggregateArgs>(args: Subset<T, Sys_configAggregateArgs>): Prisma.PrismaPromise<GetSys_configAggregateType<T>>

    /**
     * Group by Sys_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_configGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_configGroupByArgs['orderBy'] }
        : { orderBy?: sys_configGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_configGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_config model
   */
  readonly fields: sys_configFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_configClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_config model
   */
  interface sys_configFieldRefs {
    readonly id: FieldRef<"sys_config", 'String'>
    readonly code: FieldRef<"sys_config", 'String'>
    readonly type: FieldRef<"sys_config", 'config_type'>
    readonly describe: FieldRef<"sys_config", 'String'>
    readonly value: FieldRef<"sys_config", 'String'>
    readonly sort: FieldRef<"sys_config", 'Int'>
    readonly enabled: FieldRef<"sys_config", 'Boolean'>
    readonly cache: FieldRef<"sys_config", 'Boolean'>
    readonly update_by: FieldRef<"sys_config", 'String'>
    readonly update_time: FieldRef<"sys_config", 'DateTime'>
    readonly create_by: FieldRef<"sys_config", 'String'>
    readonly create_time: FieldRef<"sys_config", 'DateTime'>
    readonly deleted: FieldRef<"sys_config", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * sys_config findUnique
   */
  export type sys_configFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter, which sys_config to fetch.
     */
    where: sys_configWhereUniqueInput
  }

  /**
   * sys_config findUniqueOrThrow
   */
  export type sys_configFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter, which sys_config to fetch.
     */
    where: sys_configWhereUniqueInput
  }

  /**
   * sys_config findFirst
   */
  export type sys_configFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter, which sys_config to fetch.
     */
    where?: sys_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_configs to fetch.
     */
    orderBy?: sys_configOrderByWithRelationInput | sys_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_configs.
     */
    cursor?: sys_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_configs.
     */
    distinct?: Sys_configScalarFieldEnum | Sys_configScalarFieldEnum[]
  }

  /**
   * sys_config findFirstOrThrow
   */
  export type sys_configFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter, which sys_config to fetch.
     */
    where?: sys_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_configs to fetch.
     */
    orderBy?: sys_configOrderByWithRelationInput | sys_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_configs.
     */
    cursor?: sys_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_configs.
     */
    distinct?: Sys_configScalarFieldEnum | Sys_configScalarFieldEnum[]
  }

  /**
   * sys_config findMany
   */
  export type sys_configFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter, which sys_configs to fetch.
     */
    where?: sys_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_configs to fetch.
     */
    orderBy?: sys_configOrderByWithRelationInput | sys_configOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_configs.
     */
    cursor?: sys_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_configs.
     */
    skip?: number
    distinct?: Sys_configScalarFieldEnum | Sys_configScalarFieldEnum[]
  }

  /**
   * sys_config create
   */
  export type sys_configCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * The data needed to create a sys_config.
     */
    data: XOR<sys_configCreateInput, sys_configUncheckedCreateInput>
  }

  /**
   * sys_config createMany
   */
  export type sys_configCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_configs.
     */
    data: sys_configCreateManyInput | sys_configCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_config update
   */
  export type sys_configUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * The data needed to update a sys_config.
     */
    data: XOR<sys_configUpdateInput, sys_configUncheckedUpdateInput>
    /**
     * Choose, which sys_config to update.
     */
    where: sys_configWhereUniqueInput
  }

  /**
   * sys_config updateMany
   */
  export type sys_configUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_configs.
     */
    data: XOR<sys_configUpdateManyMutationInput, sys_configUncheckedUpdateManyInput>
    /**
     * Filter which sys_configs to update
     */
    where?: sys_configWhereInput
    /**
     * Limit how many sys_configs to update.
     */
    limit?: number
  }

  /**
   * sys_config upsert
   */
  export type sys_configUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * The filter to search for the sys_config to update in case it exists.
     */
    where: sys_configWhereUniqueInput
    /**
     * In case the sys_config found by the `where` argument doesn't exist, create a new sys_config with this data.
     */
    create: XOR<sys_configCreateInput, sys_configUncheckedCreateInput>
    /**
     * In case the sys_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_configUpdateInput, sys_configUncheckedUpdateInput>
  }

  /**
   * sys_config delete
   */
  export type sys_configDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
    /**
     * Filter which sys_config to delete.
     */
    where: sys_configWhereUniqueInput
  }

  /**
   * sys_config deleteMany
   */
  export type sys_configDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_configs to delete
     */
    where?: sys_configWhereInput
    /**
     * Limit how many sys_configs to delete.
     */
    limit?: number
  }

  /**
   * sys_config without action
   */
  export type sys_configDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_config
     */
    select?: sys_configSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_config
     */
    omit?: sys_configOmit<ExtArgs> | null
  }


  /**
   * Model sys_organization
   */

  export type AggregateSys_organization = {
    _count: Sys_organizationCountAggregateOutputType | null
    _avg: Sys_organizationAvgAggregateOutputType | null
    _sum: Sys_organizationSumAggregateOutputType | null
    _min: Sys_organizationMinAggregateOutputType | null
    _max: Sys_organizationMaxAggregateOutputType | null
  }

  export type Sys_organizationAvgAggregateOutputType = {
    sort: number | null
    lng: Decimal | null
    lat: Decimal | null
  }

  export type Sys_organizationSumAggregateOutputType = {
    sort: number | null
    lng: Decimal | null
    lat: Decimal | null
  }

  export type Sys_organizationMinAggregateOutputType = {
    id: string | null
    pid: string | null
    code: string | null
    name: string | null
    alias: string | null
    description: string | null
    full_path: string | null
    sort: number | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean | null
    lng: Decimal | null
    lat: Decimal | null
    car_sys_org_id: string | null
    car_clear_sys_org_id: string | null
  }

  export type Sys_organizationMaxAggregateOutputType = {
    id: string | null
    pid: string | null
    code: string | null
    name: string | null
    alias: string | null
    description: string | null
    full_path: string | null
    sort: number | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean | null
    lng: Decimal | null
    lat: Decimal | null
    car_sys_org_id: string | null
    car_clear_sys_org_id: string | null
  }

  export type Sys_organizationCountAggregateOutputType = {
    id: number
    pid: number
    code: number
    name: number
    alias: number
    description: number
    full_path: number
    sort: number
    create_by: number
    update_by: number
    create_time: number
    update_time: number
    deleted: number
    lng: number
    lat: number
    car_sys_org_id: number
    car_clear_sys_org_id: number
    _all: number
  }


  export type Sys_organizationAvgAggregateInputType = {
    sort?: true
    lng?: true
    lat?: true
  }

  export type Sys_organizationSumAggregateInputType = {
    sort?: true
    lng?: true
    lat?: true
  }

  export type Sys_organizationMinAggregateInputType = {
    id?: true
    pid?: true
    code?: true
    name?: true
    alias?: true
    description?: true
    full_path?: true
    sort?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
    lng?: true
    lat?: true
    car_sys_org_id?: true
    car_clear_sys_org_id?: true
  }

  export type Sys_organizationMaxAggregateInputType = {
    id?: true
    pid?: true
    code?: true
    name?: true
    alias?: true
    description?: true
    full_path?: true
    sort?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
    lng?: true
    lat?: true
    car_sys_org_id?: true
    car_clear_sys_org_id?: true
  }

  export type Sys_organizationCountAggregateInputType = {
    id?: true
    pid?: true
    code?: true
    name?: true
    alias?: true
    description?: true
    full_path?: true
    sort?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
    lng?: true
    lat?: true
    car_sys_org_id?: true
    car_clear_sys_org_id?: true
    _all?: true
  }

  export type Sys_organizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_organization to aggregate.
     */
    where?: sys_organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_organizations to fetch.
     */
    orderBy?: sys_organizationOrderByWithRelationInput | sys_organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_organizations
    **/
    _count?: true | Sys_organizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_organizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_organizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_organizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_organizationMaxAggregateInputType
  }

  export type GetSys_organizationAggregateType<T extends Sys_organizationAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_organization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_organization[P]>
      : GetScalarType<T[P], AggregateSys_organization[P]>
  }




  export type sys_organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_organizationWhereInput
    orderBy?: sys_organizationOrderByWithAggregationInput | sys_organizationOrderByWithAggregationInput[]
    by: Sys_organizationScalarFieldEnum[] | Sys_organizationScalarFieldEnum
    having?: sys_organizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_organizationCountAggregateInputType | true
    _avg?: Sys_organizationAvgAggregateInputType
    _sum?: Sys_organizationSumAggregateInputType
    _min?: Sys_organizationMinAggregateInputType
    _max?: Sys_organizationMaxAggregateInputType
  }

  export type Sys_organizationGroupByOutputType = {
    id: string
    pid: string | null
    code: string
    name: string | null
    alias: string | null
    description: string | null
    full_path: string | null
    sort: number
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean
    lng: Decimal | null
    lat: Decimal | null
    car_sys_org_id: string | null
    car_clear_sys_org_id: string | null
    _count: Sys_organizationCountAggregateOutputType | null
    _avg: Sys_organizationAvgAggregateOutputType | null
    _sum: Sys_organizationSumAggregateOutputType | null
    _min: Sys_organizationMinAggregateOutputType | null
    _max: Sys_organizationMaxAggregateOutputType | null
  }

  type GetSys_organizationGroupByPayload<T extends sys_organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_organizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_organizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_organizationGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_organizationGroupByOutputType[P]>
        }
      >
    >


  export type sys_organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pid?: boolean
    code?: boolean
    name?: boolean
    alias?: boolean
    description?: boolean
    full_path?: boolean
    sort?: boolean
    create_by?: boolean
    update_by?: boolean
    create_time?: boolean
    update_time?: boolean
    deleted?: boolean
    lng?: boolean
    lat?: boolean
    car_sys_org_id?: boolean
    car_clear_sys_org_id?: boolean
    parent?: boolean | sys_organization$parentArgs<ExtArgs>
    children?: boolean | sys_organization$childrenArgs<ExtArgs>
    departments?: boolean | sys_organization$departmentsArgs<ExtArgs>
    roles?: boolean | sys_organization$rolesArgs<ExtArgs>
    users?: boolean | sys_organization$usersArgs<ExtArgs>
    _count?: boolean | Sys_organizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_organization"]>



  export type sys_organizationSelectScalar = {
    id?: boolean
    pid?: boolean
    code?: boolean
    name?: boolean
    alias?: boolean
    description?: boolean
    full_path?: boolean
    sort?: boolean
    create_by?: boolean
    update_by?: boolean
    create_time?: boolean
    update_time?: boolean
    deleted?: boolean
    lng?: boolean
    lat?: boolean
    car_sys_org_id?: boolean
    car_clear_sys_org_id?: boolean
  }

  export type sys_organizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pid" | "code" | "name" | "alias" | "description" | "full_path" | "sort" | "create_by" | "update_by" | "create_time" | "update_time" | "deleted" | "lng" | "lat" | "car_sys_org_id" | "car_clear_sys_org_id", ExtArgs["result"]["sys_organization"]>
  export type sys_organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | sys_organization$parentArgs<ExtArgs>
    children?: boolean | sys_organization$childrenArgs<ExtArgs>
    departments?: boolean | sys_organization$departmentsArgs<ExtArgs>
    roles?: boolean | sys_organization$rolesArgs<ExtArgs>
    users?: boolean | sys_organization$usersArgs<ExtArgs>
    _count?: boolean | Sys_organizationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_organization"
    objects: {
      parent: Prisma.$sys_organizationPayload<ExtArgs> | null
      children: Prisma.$sys_organizationPayload<ExtArgs>[]
      /**
       * 部门
       */
      departments: Prisma.$sys_deptPayload<ExtArgs>[]
      /**
       * 角色
       */
      roles: Prisma.$sys_rolePayload<ExtArgs>[]
      /**
       * 用户
       */
      users: Prisma.$sys_userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * ID
       */
      id: string
      /**
       * 父级组织结构
       */
      pid: string | null
      /**
       * 编号
       */
      code: string
      /**
       * 组织结构名称
       */
      name: string | null
      /**
       * 别名
       */
      alias: string | null
      /**
       * 组织结构描述
       */
      description: string | null
      /**
       * 全路径
       */
      full_path: string | null
      /**
       * 排序
       */
      sort: number
      /**
       * 创建者
       */
      create_by: string | null
      /**
       * 更新者
       */
      update_by: string | null
      /**
       * 创建日期
       */
      create_time: Date | null
      /**
       * 更新时间
       */
      update_time: Date | null
      /**
       * 是否被删除
       */
      deleted: boolean
      /**
       * 经度
       */
      lng: Prisma.Decimal | null
      /**
       * 纬度
       */
      lat: Prisma.Decimal | null
      /**
       * 单车核算系统中的机构id
       */
      car_sys_org_id: string | null
      /**
       * 车辆清运系统中的机构id
       */
      car_clear_sys_org_id: string | null
    }, ExtArgs["result"]["sys_organization"]>
    composites: {}
  }

  type sys_organizationGetPayload<S extends boolean | null | undefined | sys_organizationDefaultArgs> = $Result.GetResult<Prisma.$sys_organizationPayload, S>

  type sys_organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_organizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_organizationCountAggregateInputType | true
    }

  export interface sys_organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_organization'], meta: { name: 'sys_organization' } }
    /**
     * Find zero or one Sys_organization that matches the filter.
     * @param {sys_organizationFindUniqueArgs} args - Arguments to find a Sys_organization
     * @example
     * // Get one Sys_organization
     * const sys_organization = await prisma.sys_organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_organizationFindUniqueArgs>(args: SelectSubset<T, sys_organizationFindUniqueArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_organizationFindUniqueOrThrowArgs} args - Arguments to find a Sys_organization
     * @example
     * // Get one Sys_organization
     * const sys_organization = await prisma.sys_organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_organizationFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_organizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_organizationFindFirstArgs} args - Arguments to find a Sys_organization
     * @example
     * // Get one Sys_organization
     * const sys_organization = await prisma.sys_organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_organizationFindFirstArgs>(args?: SelectSubset<T, sys_organizationFindFirstArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_organizationFindFirstOrThrowArgs} args - Arguments to find a Sys_organization
     * @example
     * // Get one Sys_organization
     * const sys_organization = await prisma.sys_organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_organizationFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_organizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_organizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_organizations
     * const sys_organizations = await prisma.sys_organization.findMany()
     * 
     * // Get first 10 Sys_organizations
     * const sys_organizations = await prisma.sys_organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_organizationWithIdOnly = await prisma.sys_organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_organizationFindManyArgs>(args?: SelectSubset<T, sys_organizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_organization.
     * @param {sys_organizationCreateArgs} args - Arguments to create a Sys_organization.
     * @example
     * // Create one Sys_organization
     * const Sys_organization = await prisma.sys_organization.create({
     *   data: {
     *     // ... data to create a Sys_organization
     *   }
     * })
     * 
     */
    create<T extends sys_organizationCreateArgs>(args: SelectSubset<T, sys_organizationCreateArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_organizations.
     * @param {sys_organizationCreateManyArgs} args - Arguments to create many Sys_organizations.
     * @example
     * // Create many Sys_organizations
     * const sys_organization = await prisma.sys_organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_organizationCreateManyArgs>(args?: SelectSubset<T, sys_organizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_organization.
     * @param {sys_organizationDeleteArgs} args - Arguments to delete one Sys_organization.
     * @example
     * // Delete one Sys_organization
     * const Sys_organization = await prisma.sys_organization.delete({
     *   where: {
     *     // ... filter to delete one Sys_organization
     *   }
     * })
     * 
     */
    delete<T extends sys_organizationDeleteArgs>(args: SelectSubset<T, sys_organizationDeleteArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_organization.
     * @param {sys_organizationUpdateArgs} args - Arguments to update one Sys_organization.
     * @example
     * // Update one Sys_organization
     * const sys_organization = await prisma.sys_organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_organizationUpdateArgs>(args: SelectSubset<T, sys_organizationUpdateArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_organizations.
     * @param {sys_organizationDeleteManyArgs} args - Arguments to filter Sys_organizations to delete.
     * @example
     * // Delete a few Sys_organizations
     * const { count } = await prisma.sys_organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_organizationDeleteManyArgs>(args?: SelectSubset<T, sys_organizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_organizations
     * const sys_organization = await prisma.sys_organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_organizationUpdateManyArgs>(args: SelectSubset<T, sys_organizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_organization.
     * @param {sys_organizationUpsertArgs} args - Arguments to update or create a Sys_organization.
     * @example
     * // Update or create a Sys_organization
     * const sys_organization = await prisma.sys_organization.upsert({
     *   create: {
     *     // ... data to create a Sys_organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_organization we want to update
     *   }
     * })
     */
    upsert<T extends sys_organizationUpsertArgs>(args: SelectSubset<T, sys_organizationUpsertArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_organizationCountArgs} args - Arguments to filter Sys_organizations to count.
     * @example
     * // Count the number of Sys_organizations
     * const count = await prisma.sys_organization.count({
     *   where: {
     *     // ... the filter for the Sys_organizations we want to count
     *   }
     * })
    **/
    count<T extends sys_organizationCountArgs>(
      args?: Subset<T, sys_organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_organizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_organizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_organizationAggregateArgs>(args: Subset<T, Sys_organizationAggregateArgs>): Prisma.PrismaPromise<GetSys_organizationAggregateType<T>>

    /**
     * Group by Sys_organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_organizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_organizationGroupByArgs['orderBy'] }
        : { orderBy?: sys_organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_organizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_organizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_organization model
   */
  readonly fields: sys_organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_organizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends sys_organization$parentArgs<ExtArgs> = {}>(args?: Subset<T, sys_organization$parentArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends sys_organization$childrenArgs<ExtArgs> = {}>(args?: Subset<T, sys_organization$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departments<T extends sys_organization$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, sys_organization$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends sys_organization$rolesArgs<ExtArgs> = {}>(args?: Subset<T, sys_organization$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends sys_organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, sys_organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_organization model
   */
  interface sys_organizationFieldRefs {
    readonly id: FieldRef<"sys_organization", 'String'>
    readonly pid: FieldRef<"sys_organization", 'String'>
    readonly code: FieldRef<"sys_organization", 'String'>
    readonly name: FieldRef<"sys_organization", 'String'>
    readonly alias: FieldRef<"sys_organization", 'String'>
    readonly description: FieldRef<"sys_organization", 'String'>
    readonly full_path: FieldRef<"sys_organization", 'String'>
    readonly sort: FieldRef<"sys_organization", 'Int'>
    readonly create_by: FieldRef<"sys_organization", 'String'>
    readonly update_by: FieldRef<"sys_organization", 'String'>
    readonly create_time: FieldRef<"sys_organization", 'DateTime'>
    readonly update_time: FieldRef<"sys_organization", 'DateTime'>
    readonly deleted: FieldRef<"sys_organization", 'Boolean'>
    readonly lng: FieldRef<"sys_organization", 'Decimal'>
    readonly lat: FieldRef<"sys_organization", 'Decimal'>
    readonly car_sys_org_id: FieldRef<"sys_organization", 'String'>
    readonly car_clear_sys_org_id: FieldRef<"sys_organization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sys_organization findUnique
   */
  export type sys_organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    /**
     * Filter, which sys_organization to fetch.
     */
    where: sys_organizationWhereUniqueInput
  }

  /**
   * sys_organization findUniqueOrThrow
   */
  export type sys_organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    /**
     * Filter, which sys_organization to fetch.
     */
    where: sys_organizationWhereUniqueInput
  }

  /**
   * sys_organization findFirst
   */
  export type sys_organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    /**
     * Filter, which sys_organization to fetch.
     */
    where?: sys_organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_organizations to fetch.
     */
    orderBy?: sys_organizationOrderByWithRelationInput | sys_organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_organizations.
     */
    cursor?: sys_organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_organizations.
     */
    distinct?: Sys_organizationScalarFieldEnum | Sys_organizationScalarFieldEnum[]
  }

  /**
   * sys_organization findFirstOrThrow
   */
  export type sys_organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    /**
     * Filter, which sys_organization to fetch.
     */
    where?: sys_organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_organizations to fetch.
     */
    orderBy?: sys_organizationOrderByWithRelationInput | sys_organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_organizations.
     */
    cursor?: sys_organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_organizations.
     */
    distinct?: Sys_organizationScalarFieldEnum | Sys_organizationScalarFieldEnum[]
  }

  /**
   * sys_organization findMany
   */
  export type sys_organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    /**
     * Filter, which sys_organizations to fetch.
     */
    where?: sys_organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_organizations to fetch.
     */
    orderBy?: sys_organizationOrderByWithRelationInput | sys_organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_organizations.
     */
    cursor?: sys_organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_organizations.
     */
    skip?: number
    distinct?: Sys_organizationScalarFieldEnum | Sys_organizationScalarFieldEnum[]
  }

  /**
   * sys_organization create
   */
  export type sys_organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_organization.
     */
    data: XOR<sys_organizationCreateInput, sys_organizationUncheckedCreateInput>
  }

  /**
   * sys_organization createMany
   */
  export type sys_organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_organizations.
     */
    data: sys_organizationCreateManyInput | sys_organizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_organization update
   */
  export type sys_organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_organization.
     */
    data: XOR<sys_organizationUpdateInput, sys_organizationUncheckedUpdateInput>
    /**
     * Choose, which sys_organization to update.
     */
    where: sys_organizationWhereUniqueInput
  }

  /**
   * sys_organization updateMany
   */
  export type sys_organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_organizations.
     */
    data: XOR<sys_organizationUpdateManyMutationInput, sys_organizationUncheckedUpdateManyInput>
    /**
     * Filter which sys_organizations to update
     */
    where?: sys_organizationWhereInput
    /**
     * Limit how many sys_organizations to update.
     */
    limit?: number
  }

  /**
   * sys_organization upsert
   */
  export type sys_organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_organization to update in case it exists.
     */
    where: sys_organizationWhereUniqueInput
    /**
     * In case the sys_organization found by the `where` argument doesn't exist, create a new sys_organization with this data.
     */
    create: XOR<sys_organizationCreateInput, sys_organizationUncheckedCreateInput>
    /**
     * In case the sys_organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_organizationUpdateInput, sys_organizationUncheckedUpdateInput>
  }

  /**
   * sys_organization delete
   */
  export type sys_organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    /**
     * Filter which sys_organization to delete.
     */
    where: sys_organizationWhereUniqueInput
  }

  /**
   * sys_organization deleteMany
   */
  export type sys_organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_organizations to delete
     */
    where?: sys_organizationWhereInput
    /**
     * Limit how many sys_organizations to delete.
     */
    limit?: number
  }

  /**
   * sys_organization.parent
   */
  export type sys_organization$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    where?: sys_organizationWhereInput
  }

  /**
   * sys_organization.children
   */
  export type sys_organization$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    where?: sys_organizationWhereInput
    orderBy?: sys_organizationOrderByWithRelationInput | sys_organizationOrderByWithRelationInput[]
    cursor?: sys_organizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_organizationScalarFieldEnum | Sys_organizationScalarFieldEnum[]
  }

  /**
   * sys_organization.departments
   */
  export type sys_organization$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    where?: sys_deptWhereInput
    orderBy?: sys_deptOrderByWithRelationInput | sys_deptOrderByWithRelationInput[]
    cursor?: sys_deptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_deptScalarFieldEnum | Sys_deptScalarFieldEnum[]
  }

  /**
   * sys_organization.roles
   */
  export type sys_organization$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    where?: sys_roleWhereInput
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    cursor?: sys_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_roleScalarFieldEnum | Sys_roleScalarFieldEnum[]
  }

  /**
   * sys_organization.users
   */
  export type sys_organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    where?: sys_userWhereInput
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    cursor?: sys_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_organization without action
   */
  export type sys_organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
  }


  /**
   * Model sys_dept
   */

  export type AggregateSys_dept = {
    _count: Sys_deptCountAggregateOutputType | null
    _avg: Sys_deptAvgAggregateOutputType | null
    _sum: Sys_deptSumAggregateOutputType | null
    _min: Sys_deptMinAggregateOutputType | null
    _max: Sys_deptMaxAggregateOutputType | null
  }

  export type Sys_deptAvgAggregateOutputType = {
    sort: number | null
  }

  export type Sys_deptSumAggregateOutputType = {
    sort: number | null
  }

  export type Sys_deptMinAggregateOutputType = {
    id: string | null
    pid: string | null
    parent_link_ids: string | null
    org_code: string | null
    org_id: string | null
    name: string | null
    display: boolean | null
    sort: number | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean | null
  }

  export type Sys_deptMaxAggregateOutputType = {
    id: string | null
    pid: string | null
    parent_link_ids: string | null
    org_code: string | null
    org_id: string | null
    name: string | null
    display: boolean | null
    sort: number | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean | null
  }

  export type Sys_deptCountAggregateOutputType = {
    id: number
    pid: number
    parent_link_ids: number
    org_code: number
    org_id: number
    name: number
    display: number
    sort: number
    create_by: number
    update_by: number
    create_time: number
    update_time: number
    deleted: number
    _all: number
  }


  export type Sys_deptAvgAggregateInputType = {
    sort?: true
  }

  export type Sys_deptSumAggregateInputType = {
    sort?: true
  }

  export type Sys_deptMinAggregateInputType = {
    id?: true
    pid?: true
    parent_link_ids?: true
    org_code?: true
    org_id?: true
    name?: true
    display?: true
    sort?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
  }

  export type Sys_deptMaxAggregateInputType = {
    id?: true
    pid?: true
    parent_link_ids?: true
    org_code?: true
    org_id?: true
    name?: true
    display?: true
    sort?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
  }

  export type Sys_deptCountAggregateInputType = {
    id?: true
    pid?: true
    parent_link_ids?: true
    org_code?: true
    org_id?: true
    name?: true
    display?: true
    sort?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
    _all?: true
  }

  export type Sys_deptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_dept to aggregate.
     */
    where?: sys_deptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_depts to fetch.
     */
    orderBy?: sys_deptOrderByWithRelationInput | sys_deptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_deptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_depts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_depts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_depts
    **/
    _count?: true | Sys_deptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_deptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_deptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_deptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_deptMaxAggregateInputType
  }

  export type GetSys_deptAggregateType<T extends Sys_deptAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_dept]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_dept[P]>
      : GetScalarType<T[P], AggregateSys_dept[P]>
  }




  export type sys_deptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_deptWhereInput
    orderBy?: sys_deptOrderByWithAggregationInput | sys_deptOrderByWithAggregationInput[]
    by: Sys_deptScalarFieldEnum[] | Sys_deptScalarFieldEnum
    having?: sys_deptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_deptCountAggregateInputType | true
    _avg?: Sys_deptAvgAggregateInputType
    _sum?: Sys_deptSumAggregateInputType
    _min?: Sys_deptMinAggregateInputType
    _max?: Sys_deptMaxAggregateInputType
  }

  export type Sys_deptGroupByOutputType = {
    id: string
    pid: string | null
    parent_link_ids: string | null
    org_code: string
    org_id: string
    name: string
    display: boolean
    sort: number
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean
    _count: Sys_deptCountAggregateOutputType | null
    _avg: Sys_deptAvgAggregateOutputType | null
    _sum: Sys_deptSumAggregateOutputType | null
    _min: Sys_deptMinAggregateOutputType | null
    _max: Sys_deptMaxAggregateOutputType | null
  }

  type GetSys_deptGroupByPayload<T extends sys_deptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_deptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_deptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_deptGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_deptGroupByOutputType[P]>
        }
      >
    >


  export type sys_deptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pid?: boolean
    parent_link_ids?: boolean
    org_code?: boolean
    org_id?: boolean
    name?: boolean
    display?: boolean
    sort?: boolean
    create_by?: boolean
    update_by?: boolean
    create_time?: boolean
    update_time?: boolean
    deleted?: boolean
    parent?: boolean | sys_dept$parentArgs<ExtArgs>
    children?: boolean | sys_dept$childrenArgs<ExtArgs>
    organization?: boolean | sys_organizationDefaultArgs<ExtArgs>
    users?: boolean | sys_dept$usersArgs<ExtArgs>
    _count?: boolean | Sys_deptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_dept"]>



  export type sys_deptSelectScalar = {
    id?: boolean
    pid?: boolean
    parent_link_ids?: boolean
    org_code?: boolean
    org_id?: boolean
    name?: boolean
    display?: boolean
    sort?: boolean
    create_by?: boolean
    update_by?: boolean
    create_time?: boolean
    update_time?: boolean
    deleted?: boolean
  }

  export type sys_deptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pid" | "parent_link_ids" | "org_code" | "org_id" | "name" | "display" | "sort" | "create_by" | "update_by" | "create_time" | "update_time" | "deleted", ExtArgs["result"]["sys_dept"]>
  export type sys_deptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | sys_dept$parentArgs<ExtArgs>
    children?: boolean | sys_dept$childrenArgs<ExtArgs>
    organization?: boolean | sys_organizationDefaultArgs<ExtArgs>
    users?: boolean | sys_dept$usersArgs<ExtArgs>
    _count?: boolean | Sys_deptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_deptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_dept"
    objects: {
      parent: Prisma.$sys_deptPayload<ExtArgs> | null
      children: Prisma.$sys_deptPayload<ExtArgs>[]
      organization: Prisma.$sys_organizationPayload<ExtArgs>
      /**
       * 用户
       */
      users: Prisma.$sys_userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * ID
       */
      id: string
      /**
       * PID
       */
      pid: string | null
      /**
       * 父级完成链路ids
       */
      parent_link_ids: string | null
      /**
       * 组织机构code
       */
      org_code: string
      /**
       * 组织机构id
       */
      org_id: string
      /**
       * 部门名称
       */
      name: string
      /**
       * 是否显示
       */
      display: boolean
      /**
       * 排序
       */
      sort: number
      /**
       * 创建者
       */
      create_by: string | null
      /**
       * 更新者
       */
      update_by: string | null
      /**
       * 创建日期
       */
      create_time: Date | null
      /**
       * 更新时间
       */
      update_time: Date | null
      /**
       * 删除标志
       */
      deleted: boolean
    }, ExtArgs["result"]["sys_dept"]>
    composites: {}
  }

  type sys_deptGetPayload<S extends boolean | null | undefined | sys_deptDefaultArgs> = $Result.GetResult<Prisma.$sys_deptPayload, S>

  type sys_deptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_deptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_deptCountAggregateInputType | true
    }

  export interface sys_deptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_dept'], meta: { name: 'sys_dept' } }
    /**
     * Find zero or one Sys_dept that matches the filter.
     * @param {sys_deptFindUniqueArgs} args - Arguments to find a Sys_dept
     * @example
     * // Get one Sys_dept
     * const sys_dept = await prisma.sys_dept.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_deptFindUniqueArgs>(args: SelectSubset<T, sys_deptFindUniqueArgs<ExtArgs>>): Prisma__sys_deptClient<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_dept that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_deptFindUniqueOrThrowArgs} args - Arguments to find a Sys_dept
     * @example
     * // Get one Sys_dept
     * const sys_dept = await prisma.sys_dept.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_deptFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_deptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_deptClient<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_dept that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_deptFindFirstArgs} args - Arguments to find a Sys_dept
     * @example
     * // Get one Sys_dept
     * const sys_dept = await prisma.sys_dept.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_deptFindFirstArgs>(args?: SelectSubset<T, sys_deptFindFirstArgs<ExtArgs>>): Prisma__sys_deptClient<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_dept that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_deptFindFirstOrThrowArgs} args - Arguments to find a Sys_dept
     * @example
     * // Get one Sys_dept
     * const sys_dept = await prisma.sys_dept.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_deptFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_deptFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_deptClient<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_depts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_deptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_depts
     * const sys_depts = await prisma.sys_dept.findMany()
     * 
     * // Get first 10 Sys_depts
     * const sys_depts = await prisma.sys_dept.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_deptWithIdOnly = await prisma.sys_dept.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_deptFindManyArgs>(args?: SelectSubset<T, sys_deptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_dept.
     * @param {sys_deptCreateArgs} args - Arguments to create a Sys_dept.
     * @example
     * // Create one Sys_dept
     * const Sys_dept = await prisma.sys_dept.create({
     *   data: {
     *     // ... data to create a Sys_dept
     *   }
     * })
     * 
     */
    create<T extends sys_deptCreateArgs>(args: SelectSubset<T, sys_deptCreateArgs<ExtArgs>>): Prisma__sys_deptClient<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_depts.
     * @param {sys_deptCreateManyArgs} args - Arguments to create many Sys_depts.
     * @example
     * // Create many Sys_depts
     * const sys_dept = await prisma.sys_dept.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_deptCreateManyArgs>(args?: SelectSubset<T, sys_deptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_dept.
     * @param {sys_deptDeleteArgs} args - Arguments to delete one Sys_dept.
     * @example
     * // Delete one Sys_dept
     * const Sys_dept = await prisma.sys_dept.delete({
     *   where: {
     *     // ... filter to delete one Sys_dept
     *   }
     * })
     * 
     */
    delete<T extends sys_deptDeleteArgs>(args: SelectSubset<T, sys_deptDeleteArgs<ExtArgs>>): Prisma__sys_deptClient<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_dept.
     * @param {sys_deptUpdateArgs} args - Arguments to update one Sys_dept.
     * @example
     * // Update one Sys_dept
     * const sys_dept = await prisma.sys_dept.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_deptUpdateArgs>(args: SelectSubset<T, sys_deptUpdateArgs<ExtArgs>>): Prisma__sys_deptClient<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_depts.
     * @param {sys_deptDeleteManyArgs} args - Arguments to filter Sys_depts to delete.
     * @example
     * // Delete a few Sys_depts
     * const { count } = await prisma.sys_dept.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_deptDeleteManyArgs>(args?: SelectSubset<T, sys_deptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_depts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_deptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_depts
     * const sys_dept = await prisma.sys_dept.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_deptUpdateManyArgs>(args: SelectSubset<T, sys_deptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_dept.
     * @param {sys_deptUpsertArgs} args - Arguments to update or create a Sys_dept.
     * @example
     * // Update or create a Sys_dept
     * const sys_dept = await prisma.sys_dept.upsert({
     *   create: {
     *     // ... data to create a Sys_dept
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_dept we want to update
     *   }
     * })
     */
    upsert<T extends sys_deptUpsertArgs>(args: SelectSubset<T, sys_deptUpsertArgs<ExtArgs>>): Prisma__sys_deptClient<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_depts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_deptCountArgs} args - Arguments to filter Sys_depts to count.
     * @example
     * // Count the number of Sys_depts
     * const count = await prisma.sys_dept.count({
     *   where: {
     *     // ... the filter for the Sys_depts we want to count
     *   }
     * })
    **/
    count<T extends sys_deptCountArgs>(
      args?: Subset<T, sys_deptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_deptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_dept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_deptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_deptAggregateArgs>(args: Subset<T, Sys_deptAggregateArgs>): Prisma.PrismaPromise<GetSys_deptAggregateType<T>>

    /**
     * Group by Sys_dept.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_deptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_deptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_deptGroupByArgs['orderBy'] }
        : { orderBy?: sys_deptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_deptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_deptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_dept model
   */
  readonly fields: sys_deptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_dept.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_deptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends sys_dept$parentArgs<ExtArgs> = {}>(args?: Subset<T, sys_dept$parentArgs<ExtArgs>>): Prisma__sys_deptClient<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends sys_dept$childrenArgs<ExtArgs> = {}>(args?: Subset<T, sys_dept$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_deptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organization<T extends sys_organizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sys_organizationDefaultArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends sys_dept$usersArgs<ExtArgs> = {}>(args?: Subset<T, sys_dept$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_dept model
   */
  interface sys_deptFieldRefs {
    readonly id: FieldRef<"sys_dept", 'String'>
    readonly pid: FieldRef<"sys_dept", 'String'>
    readonly parent_link_ids: FieldRef<"sys_dept", 'String'>
    readonly org_code: FieldRef<"sys_dept", 'String'>
    readonly org_id: FieldRef<"sys_dept", 'String'>
    readonly name: FieldRef<"sys_dept", 'String'>
    readonly display: FieldRef<"sys_dept", 'Boolean'>
    readonly sort: FieldRef<"sys_dept", 'Int'>
    readonly create_by: FieldRef<"sys_dept", 'String'>
    readonly update_by: FieldRef<"sys_dept", 'String'>
    readonly create_time: FieldRef<"sys_dept", 'DateTime'>
    readonly update_time: FieldRef<"sys_dept", 'DateTime'>
    readonly deleted: FieldRef<"sys_dept", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * sys_dept findUnique
   */
  export type sys_deptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    /**
     * Filter, which sys_dept to fetch.
     */
    where: sys_deptWhereUniqueInput
  }

  /**
   * sys_dept findUniqueOrThrow
   */
  export type sys_deptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    /**
     * Filter, which sys_dept to fetch.
     */
    where: sys_deptWhereUniqueInput
  }

  /**
   * sys_dept findFirst
   */
  export type sys_deptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    /**
     * Filter, which sys_dept to fetch.
     */
    where?: sys_deptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_depts to fetch.
     */
    orderBy?: sys_deptOrderByWithRelationInput | sys_deptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_depts.
     */
    cursor?: sys_deptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_depts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_depts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_depts.
     */
    distinct?: Sys_deptScalarFieldEnum | Sys_deptScalarFieldEnum[]
  }

  /**
   * sys_dept findFirstOrThrow
   */
  export type sys_deptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    /**
     * Filter, which sys_dept to fetch.
     */
    where?: sys_deptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_depts to fetch.
     */
    orderBy?: sys_deptOrderByWithRelationInput | sys_deptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_depts.
     */
    cursor?: sys_deptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_depts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_depts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_depts.
     */
    distinct?: Sys_deptScalarFieldEnum | Sys_deptScalarFieldEnum[]
  }

  /**
   * sys_dept findMany
   */
  export type sys_deptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    /**
     * Filter, which sys_depts to fetch.
     */
    where?: sys_deptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_depts to fetch.
     */
    orderBy?: sys_deptOrderByWithRelationInput | sys_deptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_depts.
     */
    cursor?: sys_deptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_depts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_depts.
     */
    skip?: number
    distinct?: Sys_deptScalarFieldEnum | Sys_deptScalarFieldEnum[]
  }

  /**
   * sys_dept create
   */
  export type sys_deptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_dept.
     */
    data: XOR<sys_deptCreateInput, sys_deptUncheckedCreateInput>
  }

  /**
   * sys_dept createMany
   */
  export type sys_deptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_depts.
     */
    data: sys_deptCreateManyInput | sys_deptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_dept update
   */
  export type sys_deptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_dept.
     */
    data: XOR<sys_deptUpdateInput, sys_deptUncheckedUpdateInput>
    /**
     * Choose, which sys_dept to update.
     */
    where: sys_deptWhereUniqueInput
  }

  /**
   * sys_dept updateMany
   */
  export type sys_deptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_depts.
     */
    data: XOR<sys_deptUpdateManyMutationInput, sys_deptUncheckedUpdateManyInput>
    /**
     * Filter which sys_depts to update
     */
    where?: sys_deptWhereInput
    /**
     * Limit how many sys_depts to update.
     */
    limit?: number
  }

  /**
   * sys_dept upsert
   */
  export type sys_deptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_dept to update in case it exists.
     */
    where: sys_deptWhereUniqueInput
    /**
     * In case the sys_dept found by the `where` argument doesn't exist, create a new sys_dept with this data.
     */
    create: XOR<sys_deptCreateInput, sys_deptUncheckedCreateInput>
    /**
     * In case the sys_dept was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_deptUpdateInput, sys_deptUncheckedUpdateInput>
  }

  /**
   * sys_dept delete
   */
  export type sys_deptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    /**
     * Filter which sys_dept to delete.
     */
    where: sys_deptWhereUniqueInput
  }

  /**
   * sys_dept deleteMany
   */
  export type sys_deptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_depts to delete
     */
    where?: sys_deptWhereInput
    /**
     * Limit how many sys_depts to delete.
     */
    limit?: number
  }

  /**
   * sys_dept.parent
   */
  export type sys_dept$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    where?: sys_deptWhereInput
  }

  /**
   * sys_dept.children
   */
  export type sys_dept$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
    where?: sys_deptWhereInput
    orderBy?: sys_deptOrderByWithRelationInput | sys_deptOrderByWithRelationInput[]
    cursor?: sys_deptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_deptScalarFieldEnum | Sys_deptScalarFieldEnum[]
  }

  /**
   * sys_dept.users
   */
  export type sys_dept$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    where?: sys_userWhereInput
    orderBy?: sys_userOrderByWithRelationInput | sys_userOrderByWithRelationInput[]
    cursor?: sys_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_userScalarFieldEnum | Sys_userScalarFieldEnum[]
  }

  /**
   * sys_dept without action
   */
  export type sys_deptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dept
     */
    select?: sys_deptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dept
     */
    omit?: sys_deptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_deptInclude<ExtArgs> | null
  }


  /**
   * Model sys_role
   */

  export type AggregateSys_role = {
    _count: Sys_roleCountAggregateOutputType | null
    _min: Sys_roleMinAggregateOutputType | null
    _max: Sys_roleMaxAggregateOutputType | null
  }

  export type Sys_roleMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    org_code: string | null
    name: string | null
    description: string | null
    data_scope_type: $Enums.data_scope_type | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean | null
  }

  export type Sys_roleMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    org_code: string | null
    name: string | null
    description: string | null
    data_scope_type: $Enums.data_scope_type | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean | null
  }

  export type Sys_roleCountAggregateOutputType = {
    id: number
    org_id: number
    org_code: number
    name: number
    description: number
    data_scope_type: number
    create_by: number
    update_by: number
    create_time: number
    update_time: number
    deleted: number
    _all: number
  }


  export type Sys_roleMinAggregateInputType = {
    id?: true
    org_id?: true
    org_code?: true
    name?: true
    description?: true
    data_scope_type?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
  }

  export type Sys_roleMaxAggregateInputType = {
    id?: true
    org_id?: true
    org_code?: true
    name?: true
    description?: true
    data_scope_type?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
  }

  export type Sys_roleCountAggregateInputType = {
    id?: true
    org_id?: true
    org_code?: true
    name?: true
    description?: true
    data_scope_type?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
    _all?: true
  }

  export type Sys_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_role to aggregate.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_roles
    **/
    _count?: true | Sys_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_roleMaxAggregateInputType
  }

  export type GetSys_roleAggregateType<T extends Sys_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_role[P]>
      : GetScalarType<T[P], AggregateSys_role[P]>
  }




  export type sys_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_roleWhereInput
    orderBy?: sys_roleOrderByWithAggregationInput | sys_roleOrderByWithAggregationInput[]
    by: Sys_roleScalarFieldEnum[] | Sys_roleScalarFieldEnum
    having?: sys_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_roleCountAggregateInputType | true
    _min?: Sys_roleMinAggregateInputType
    _max?: Sys_roleMaxAggregateInputType
  }

  export type Sys_roleGroupByOutputType = {
    id: string
    org_id: string | null
    org_code: string | null
    name: string | null
    description: string | null
    data_scope_type: $Enums.data_scope_type | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean
    _count: Sys_roleCountAggregateOutputType | null
    _min: Sys_roleMinAggregateOutputType | null
    _max: Sys_roleMaxAggregateOutputType | null
  }

  type GetSys_roleGroupByPayload<T extends sys_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_roleGroupByOutputType[P]>
        }
      >
    >


  export type sys_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    org_code?: boolean
    name?: boolean
    description?: boolean
    data_scope_type?: boolean
    create_by?: boolean
    update_by?: boolean
    create_time?: boolean
    update_time?: boolean
    deleted?: boolean
    organization?: boolean | sys_role$organizationArgs<ExtArgs>
    role_menus?: boolean | sys_role$role_menusArgs<ExtArgs>
    role_users?: boolean | sys_role$role_usersArgs<ExtArgs>
    _count?: boolean | Sys_roleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_role"]>



  export type sys_roleSelectScalar = {
    id?: boolean
    org_id?: boolean
    org_code?: boolean
    name?: boolean
    description?: boolean
    data_scope_type?: boolean
    create_by?: boolean
    update_by?: boolean
    create_time?: boolean
    update_time?: boolean
    deleted?: boolean
  }

  export type sys_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "org_code" | "name" | "description" | "data_scope_type" | "create_by" | "update_by" | "create_time" | "update_time" | "deleted", ExtArgs["result"]["sys_role"]>
  export type sys_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | sys_role$organizationArgs<ExtArgs>
    role_menus?: boolean | sys_role$role_menusArgs<ExtArgs>
    role_users?: boolean | sys_role$role_usersArgs<ExtArgs>
    _count?: boolean | Sys_roleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_role"
    objects: {
      organization: Prisma.$sys_organizationPayload<ExtArgs> | null
      /**
       * 角色菜单关联
       */
      role_menus: Prisma.$sys_role_menuPayload<ExtArgs>[]
      /**
       * 角色用户关联
       */
      role_users: Prisma.$sys_role_userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * ID
       */
      id: string
      /**
       * 组织机构id
       */
      org_id: string | null
      /**
       * 组织机构code
       */
      org_code: string | null
      /**
       * 角色名称
       */
      name: string | null
      /**
       * 角色描述
       */
      description: string | null
      /**
       * 数据权限类型(all、currentOrg、currentDeptAndSubDept、custom)
       */
      data_scope_type: $Enums.data_scope_type | null
      /**
       * 创建者
       */
      create_by: string | null
      /**
       * 更新者
       */
      update_by: string | null
      /**
       * 创建日期
       */
      create_time: Date | null
      /**
       * 更新时间
       */
      update_time: Date | null
      /**
       * 是否被删除
       */
      deleted: boolean
    }, ExtArgs["result"]["sys_role"]>
    composites: {}
  }

  type sys_roleGetPayload<S extends boolean | null | undefined | sys_roleDefaultArgs> = $Result.GetResult<Prisma.$sys_rolePayload, S>

  type sys_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_roleCountAggregateInputType | true
    }

  export interface sys_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_role'], meta: { name: 'sys_role' } }
    /**
     * Find zero or one Sys_role that matches the filter.
     * @param {sys_roleFindUniqueArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_roleFindUniqueArgs>(args: SelectSubset<T, sys_roleFindUniqueArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_roleFindUniqueOrThrowArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleFindFirstArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_roleFindFirstArgs>(args?: SelectSubset<T, sys_roleFindFirstArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleFindFirstOrThrowArgs} args - Arguments to find a Sys_role
     * @example
     * // Get one Sys_role
     * const sys_role = await prisma.sys_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_roles
     * const sys_roles = await prisma.sys_role.findMany()
     * 
     * // Get first 10 Sys_roles
     * const sys_roles = await prisma.sys_role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_roleWithIdOnly = await prisma.sys_role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_roleFindManyArgs>(args?: SelectSubset<T, sys_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_role.
     * @param {sys_roleCreateArgs} args - Arguments to create a Sys_role.
     * @example
     * // Create one Sys_role
     * const Sys_role = await prisma.sys_role.create({
     *   data: {
     *     // ... data to create a Sys_role
     *   }
     * })
     * 
     */
    create<T extends sys_roleCreateArgs>(args: SelectSubset<T, sys_roleCreateArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_roles.
     * @param {sys_roleCreateManyArgs} args - Arguments to create many Sys_roles.
     * @example
     * // Create many Sys_roles
     * const sys_role = await prisma.sys_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_roleCreateManyArgs>(args?: SelectSubset<T, sys_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_role.
     * @param {sys_roleDeleteArgs} args - Arguments to delete one Sys_role.
     * @example
     * // Delete one Sys_role
     * const Sys_role = await prisma.sys_role.delete({
     *   where: {
     *     // ... filter to delete one Sys_role
     *   }
     * })
     * 
     */
    delete<T extends sys_roleDeleteArgs>(args: SelectSubset<T, sys_roleDeleteArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_role.
     * @param {sys_roleUpdateArgs} args - Arguments to update one Sys_role.
     * @example
     * // Update one Sys_role
     * const sys_role = await prisma.sys_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_roleUpdateArgs>(args: SelectSubset<T, sys_roleUpdateArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_roles.
     * @param {sys_roleDeleteManyArgs} args - Arguments to filter Sys_roles to delete.
     * @example
     * // Delete a few Sys_roles
     * const { count } = await prisma.sys_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_roleDeleteManyArgs>(args?: SelectSubset<T, sys_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_roles
     * const sys_role = await prisma.sys_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_roleUpdateManyArgs>(args: SelectSubset<T, sys_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_role.
     * @param {sys_roleUpsertArgs} args - Arguments to update or create a Sys_role.
     * @example
     * // Update or create a Sys_role
     * const sys_role = await prisma.sys_role.upsert({
     *   create: {
     *     // ... data to create a Sys_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_role we want to update
     *   }
     * })
     */
    upsert<T extends sys_roleUpsertArgs>(args: SelectSubset<T, sys_roleUpsertArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleCountArgs} args - Arguments to filter Sys_roles to count.
     * @example
     * // Count the number of Sys_roles
     * const count = await prisma.sys_role.count({
     *   where: {
     *     // ... the filter for the Sys_roles we want to count
     *   }
     * })
    **/
    count<T extends sys_roleCountArgs>(
      args?: Subset<T, sys_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_roleAggregateArgs>(args: Subset<T, Sys_roleAggregateArgs>): Prisma.PrismaPromise<GetSys_roleAggregateType<T>>

    /**
     * Group by Sys_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_roleGroupByArgs['orderBy'] }
        : { orderBy?: sys_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_role model
   */
  readonly fields: sys_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends sys_role$organizationArgs<ExtArgs> = {}>(args?: Subset<T, sys_role$organizationArgs<ExtArgs>>): Prisma__sys_organizationClient<$Result.GetResult<Prisma.$sys_organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role_menus<T extends sys_role$role_menusArgs<ExtArgs> = {}>(args?: Subset<T, sys_role$role_menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role_users<T extends sys_role$role_usersArgs<ExtArgs> = {}>(args?: Subset<T, sys_role$role_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_role model
   */
  interface sys_roleFieldRefs {
    readonly id: FieldRef<"sys_role", 'String'>
    readonly org_id: FieldRef<"sys_role", 'String'>
    readonly org_code: FieldRef<"sys_role", 'String'>
    readonly name: FieldRef<"sys_role", 'String'>
    readonly description: FieldRef<"sys_role", 'String'>
    readonly data_scope_type: FieldRef<"sys_role", 'data_scope_type'>
    readonly create_by: FieldRef<"sys_role", 'String'>
    readonly update_by: FieldRef<"sys_role", 'String'>
    readonly create_time: FieldRef<"sys_role", 'DateTime'>
    readonly update_time: FieldRef<"sys_role", 'DateTime'>
    readonly deleted: FieldRef<"sys_role", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * sys_role findUnique
   */
  export type sys_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role findUniqueOrThrow
   */
  export type sys_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role findFirst
   */
  export type sys_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_roles.
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_roles.
     */
    distinct?: Sys_roleScalarFieldEnum | Sys_roleScalarFieldEnum[]
  }

  /**
   * sys_role findFirstOrThrow
   */
  export type sys_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_role to fetch.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_roles.
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_roles.
     */
    distinct?: Sys_roleScalarFieldEnum | Sys_roleScalarFieldEnum[]
  }

  /**
   * sys_role findMany
   */
  export type sys_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter, which sys_roles to fetch.
     */
    where?: sys_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_roles to fetch.
     */
    orderBy?: sys_roleOrderByWithRelationInput | sys_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_roles.
     */
    cursor?: sys_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_roles.
     */
    skip?: number
    distinct?: Sys_roleScalarFieldEnum | Sys_roleScalarFieldEnum[]
  }

  /**
   * sys_role create
   */
  export type sys_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_role.
     */
    data: XOR<sys_roleCreateInput, sys_roleUncheckedCreateInput>
  }

  /**
   * sys_role createMany
   */
  export type sys_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_roles.
     */
    data: sys_roleCreateManyInput | sys_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_role update
   */
  export type sys_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_role.
     */
    data: XOR<sys_roleUpdateInput, sys_roleUncheckedUpdateInput>
    /**
     * Choose, which sys_role to update.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role updateMany
   */
  export type sys_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_roles.
     */
    data: XOR<sys_roleUpdateManyMutationInput, sys_roleUncheckedUpdateManyInput>
    /**
     * Filter which sys_roles to update
     */
    where?: sys_roleWhereInput
    /**
     * Limit how many sys_roles to update.
     */
    limit?: number
  }

  /**
   * sys_role upsert
   */
  export type sys_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_role to update in case it exists.
     */
    where: sys_roleWhereUniqueInput
    /**
     * In case the sys_role found by the `where` argument doesn't exist, create a new sys_role with this data.
     */
    create: XOR<sys_roleCreateInput, sys_roleUncheckedCreateInput>
    /**
     * In case the sys_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_roleUpdateInput, sys_roleUncheckedUpdateInput>
  }

  /**
   * sys_role delete
   */
  export type sys_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    /**
     * Filter which sys_role to delete.
     */
    where: sys_roleWhereUniqueInput
  }

  /**
   * sys_role deleteMany
   */
  export type sys_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_roles to delete
     */
    where?: sys_roleWhereInput
    /**
     * Limit how many sys_roles to delete.
     */
    limit?: number
  }

  /**
   * sys_role.organization
   */
  export type sys_role$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_organization
     */
    select?: sys_organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_organization
     */
    omit?: sys_organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_organizationInclude<ExtArgs> | null
    where?: sys_organizationWhereInput
  }

  /**
   * sys_role.role_menus
   */
  export type sys_role$role_menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    where?: sys_role_menuWhereInput
    orderBy?: sys_role_menuOrderByWithRelationInput | sys_role_menuOrderByWithRelationInput[]
    cursor?: sys_role_menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_role_menuScalarFieldEnum | Sys_role_menuScalarFieldEnum[]
  }

  /**
   * sys_role.role_users
   */
  export type sys_role$role_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    where?: sys_role_userWhereInput
    orderBy?: sys_role_userOrderByWithRelationInput | sys_role_userOrderByWithRelationInput[]
    cursor?: sys_role_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_role_userScalarFieldEnum | Sys_role_userScalarFieldEnum[]
  }

  /**
   * sys_role without action
   */
  export type sys_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
  }


  /**
   * Model sys_role_menu
   */

  export type AggregateSys_role_menu = {
    _count: Sys_role_menuCountAggregateOutputType | null
    _min: Sys_role_menuMinAggregateOutputType | null
    _max: Sys_role_menuMaxAggregateOutputType | null
  }

  export type Sys_role_menuMinAggregateOutputType = {
    id: string | null
    role_id: string | null
    menu_id: string | null
    create_by: string | null
    create_time: Date | null
    deleted: boolean | null
  }

  export type Sys_role_menuMaxAggregateOutputType = {
    id: string | null
    role_id: string | null
    menu_id: string | null
    create_by: string | null
    create_time: Date | null
    deleted: boolean | null
  }

  export type Sys_role_menuCountAggregateOutputType = {
    id: number
    role_id: number
    menu_id: number
    create_by: number
    create_time: number
    deleted: number
    _all: number
  }


  export type Sys_role_menuMinAggregateInputType = {
    id?: true
    role_id?: true
    menu_id?: true
    create_by?: true
    create_time?: true
    deleted?: true
  }

  export type Sys_role_menuMaxAggregateInputType = {
    id?: true
    role_id?: true
    menu_id?: true
    create_by?: true
    create_time?: true
    deleted?: true
  }

  export type Sys_role_menuCountAggregateInputType = {
    id?: true
    role_id?: true
    menu_id?: true
    create_by?: true
    create_time?: true
    deleted?: true
    _all?: true
  }

  export type Sys_role_menuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_role_menu to aggregate.
     */
    where?: sys_role_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_role_menus to fetch.
     */
    orderBy?: sys_role_menuOrderByWithRelationInput | sys_role_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_role_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_role_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_role_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_role_menus
    **/
    _count?: true | Sys_role_menuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_role_menuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_role_menuMaxAggregateInputType
  }

  export type GetSys_role_menuAggregateType<T extends Sys_role_menuAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_role_menu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_role_menu[P]>
      : GetScalarType<T[P], AggregateSys_role_menu[P]>
  }




  export type sys_role_menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_role_menuWhereInput
    orderBy?: sys_role_menuOrderByWithAggregationInput | sys_role_menuOrderByWithAggregationInput[]
    by: Sys_role_menuScalarFieldEnum[] | Sys_role_menuScalarFieldEnum
    having?: sys_role_menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_role_menuCountAggregateInputType | true
    _min?: Sys_role_menuMinAggregateInputType
    _max?: Sys_role_menuMaxAggregateInputType
  }

  export type Sys_role_menuGroupByOutputType = {
    id: string
    role_id: string | null
    menu_id: string | null
    create_by: string | null
    create_time: Date | null
    deleted: boolean
    _count: Sys_role_menuCountAggregateOutputType | null
    _min: Sys_role_menuMinAggregateOutputType | null
    _max: Sys_role_menuMaxAggregateOutputType | null
  }

  type GetSys_role_menuGroupByPayload<T extends sys_role_menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_role_menuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_role_menuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_role_menuGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_role_menuGroupByOutputType[P]>
        }
      >
    >


  export type sys_role_menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    menu_id?: boolean
    create_by?: boolean
    create_time?: boolean
    deleted?: boolean
    role?: boolean | sys_role_menu$roleArgs<ExtArgs>
    menu?: boolean | sys_role_menu$menuArgs<ExtArgs>
  }, ExtArgs["result"]["sys_role_menu"]>



  export type sys_role_menuSelectScalar = {
    id?: boolean
    role_id?: boolean
    menu_id?: boolean
    create_by?: boolean
    create_time?: boolean
    deleted?: boolean
  }

  export type sys_role_menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_id" | "menu_id" | "create_by" | "create_time" | "deleted", ExtArgs["result"]["sys_role_menu"]>
  export type sys_role_menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | sys_role_menu$roleArgs<ExtArgs>
    menu?: boolean | sys_role_menu$menuArgs<ExtArgs>
  }

  export type $sys_role_menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_role_menu"
    objects: {
      role: Prisma.$sys_rolePayload<ExtArgs> | null
      menu: Prisma.$sys_menuPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * ID
       */
      id: string
      /**
       * 角色id
       */
      role_id: string | null
      /**
       * 菜单id
       */
      menu_id: string | null
      /**
       * 创建者
       */
      create_by: string | null
      /**
       * 创建日期
       */
      create_time: Date | null
      /**
       * 是否被删除
       */
      deleted: boolean
    }, ExtArgs["result"]["sys_role_menu"]>
    composites: {}
  }

  type sys_role_menuGetPayload<S extends boolean | null | undefined | sys_role_menuDefaultArgs> = $Result.GetResult<Prisma.$sys_role_menuPayload, S>

  type sys_role_menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_role_menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_role_menuCountAggregateInputType | true
    }

  export interface sys_role_menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_role_menu'], meta: { name: 'sys_role_menu' } }
    /**
     * Find zero or one Sys_role_menu that matches the filter.
     * @param {sys_role_menuFindUniqueArgs} args - Arguments to find a Sys_role_menu
     * @example
     * // Get one Sys_role_menu
     * const sys_role_menu = await prisma.sys_role_menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_role_menuFindUniqueArgs>(args: SelectSubset<T, sys_role_menuFindUniqueArgs<ExtArgs>>): Prisma__sys_role_menuClient<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_role_menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_role_menuFindUniqueOrThrowArgs} args - Arguments to find a Sys_role_menu
     * @example
     * // Get one Sys_role_menu
     * const sys_role_menu = await prisma.sys_role_menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_role_menuFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_role_menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_role_menuClient<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_role_menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_menuFindFirstArgs} args - Arguments to find a Sys_role_menu
     * @example
     * // Get one Sys_role_menu
     * const sys_role_menu = await prisma.sys_role_menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_role_menuFindFirstArgs>(args?: SelectSubset<T, sys_role_menuFindFirstArgs<ExtArgs>>): Prisma__sys_role_menuClient<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_role_menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_menuFindFirstOrThrowArgs} args - Arguments to find a Sys_role_menu
     * @example
     * // Get one Sys_role_menu
     * const sys_role_menu = await prisma.sys_role_menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_role_menuFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_role_menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_role_menuClient<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_role_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_role_menus
     * const sys_role_menus = await prisma.sys_role_menu.findMany()
     * 
     * // Get first 10 Sys_role_menus
     * const sys_role_menus = await prisma.sys_role_menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_role_menuWithIdOnly = await prisma.sys_role_menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_role_menuFindManyArgs>(args?: SelectSubset<T, sys_role_menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_role_menu.
     * @param {sys_role_menuCreateArgs} args - Arguments to create a Sys_role_menu.
     * @example
     * // Create one Sys_role_menu
     * const Sys_role_menu = await prisma.sys_role_menu.create({
     *   data: {
     *     // ... data to create a Sys_role_menu
     *   }
     * })
     * 
     */
    create<T extends sys_role_menuCreateArgs>(args: SelectSubset<T, sys_role_menuCreateArgs<ExtArgs>>): Prisma__sys_role_menuClient<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_role_menus.
     * @param {sys_role_menuCreateManyArgs} args - Arguments to create many Sys_role_menus.
     * @example
     * // Create many Sys_role_menus
     * const sys_role_menu = await prisma.sys_role_menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_role_menuCreateManyArgs>(args?: SelectSubset<T, sys_role_menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_role_menu.
     * @param {sys_role_menuDeleteArgs} args - Arguments to delete one Sys_role_menu.
     * @example
     * // Delete one Sys_role_menu
     * const Sys_role_menu = await prisma.sys_role_menu.delete({
     *   where: {
     *     // ... filter to delete one Sys_role_menu
     *   }
     * })
     * 
     */
    delete<T extends sys_role_menuDeleteArgs>(args: SelectSubset<T, sys_role_menuDeleteArgs<ExtArgs>>): Prisma__sys_role_menuClient<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_role_menu.
     * @param {sys_role_menuUpdateArgs} args - Arguments to update one Sys_role_menu.
     * @example
     * // Update one Sys_role_menu
     * const sys_role_menu = await prisma.sys_role_menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_role_menuUpdateArgs>(args: SelectSubset<T, sys_role_menuUpdateArgs<ExtArgs>>): Prisma__sys_role_menuClient<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_role_menus.
     * @param {sys_role_menuDeleteManyArgs} args - Arguments to filter Sys_role_menus to delete.
     * @example
     * // Delete a few Sys_role_menus
     * const { count } = await prisma.sys_role_menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_role_menuDeleteManyArgs>(args?: SelectSubset<T, sys_role_menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_role_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_role_menus
     * const sys_role_menu = await prisma.sys_role_menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_role_menuUpdateManyArgs>(args: SelectSubset<T, sys_role_menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_role_menu.
     * @param {sys_role_menuUpsertArgs} args - Arguments to update or create a Sys_role_menu.
     * @example
     * // Update or create a Sys_role_menu
     * const sys_role_menu = await prisma.sys_role_menu.upsert({
     *   create: {
     *     // ... data to create a Sys_role_menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_role_menu we want to update
     *   }
     * })
     */
    upsert<T extends sys_role_menuUpsertArgs>(args: SelectSubset<T, sys_role_menuUpsertArgs<ExtArgs>>): Prisma__sys_role_menuClient<$Result.GetResult<Prisma.$sys_role_menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_role_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_menuCountArgs} args - Arguments to filter Sys_role_menus to count.
     * @example
     * // Count the number of Sys_role_menus
     * const count = await prisma.sys_role_menu.count({
     *   where: {
     *     // ... the filter for the Sys_role_menus we want to count
     *   }
     * })
    **/
    count<T extends sys_role_menuCountArgs>(
      args?: Subset<T, sys_role_menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_role_menuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_role_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_role_menuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_role_menuAggregateArgs>(args: Subset<T, Sys_role_menuAggregateArgs>): Prisma.PrismaPromise<GetSys_role_menuAggregateType<T>>

    /**
     * Group by Sys_role_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_menuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_role_menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_role_menuGroupByArgs['orderBy'] }
        : { orderBy?: sys_role_menuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_role_menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_role_menuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_role_menu model
   */
  readonly fields: sys_role_menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_role_menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_role_menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends sys_role_menu$roleArgs<ExtArgs> = {}>(args?: Subset<T, sys_role_menu$roleArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    menu<T extends sys_role_menu$menuArgs<ExtArgs> = {}>(args?: Subset<T, sys_role_menu$menuArgs<ExtArgs>>): Prisma__sys_menuClient<$Result.GetResult<Prisma.$sys_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_role_menu model
   */
  interface sys_role_menuFieldRefs {
    readonly id: FieldRef<"sys_role_menu", 'String'>
    readonly role_id: FieldRef<"sys_role_menu", 'String'>
    readonly menu_id: FieldRef<"sys_role_menu", 'String'>
    readonly create_by: FieldRef<"sys_role_menu", 'String'>
    readonly create_time: FieldRef<"sys_role_menu", 'DateTime'>
    readonly deleted: FieldRef<"sys_role_menu", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * sys_role_menu findUnique
   */
  export type sys_role_menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_role_menu to fetch.
     */
    where: sys_role_menuWhereUniqueInput
  }

  /**
   * sys_role_menu findUniqueOrThrow
   */
  export type sys_role_menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_role_menu to fetch.
     */
    where: sys_role_menuWhereUniqueInput
  }

  /**
   * sys_role_menu findFirst
   */
  export type sys_role_menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_role_menu to fetch.
     */
    where?: sys_role_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_role_menus to fetch.
     */
    orderBy?: sys_role_menuOrderByWithRelationInput | sys_role_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_role_menus.
     */
    cursor?: sys_role_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_role_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_role_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_role_menus.
     */
    distinct?: Sys_role_menuScalarFieldEnum | Sys_role_menuScalarFieldEnum[]
  }

  /**
   * sys_role_menu findFirstOrThrow
   */
  export type sys_role_menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_role_menu to fetch.
     */
    where?: sys_role_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_role_menus to fetch.
     */
    orderBy?: sys_role_menuOrderByWithRelationInput | sys_role_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_role_menus.
     */
    cursor?: sys_role_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_role_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_role_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_role_menus.
     */
    distinct?: Sys_role_menuScalarFieldEnum | Sys_role_menuScalarFieldEnum[]
  }

  /**
   * sys_role_menu findMany
   */
  export type sys_role_menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    /**
     * Filter, which sys_role_menus to fetch.
     */
    where?: sys_role_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_role_menus to fetch.
     */
    orderBy?: sys_role_menuOrderByWithRelationInput | sys_role_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_role_menus.
     */
    cursor?: sys_role_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_role_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_role_menus.
     */
    skip?: number
    distinct?: Sys_role_menuScalarFieldEnum | Sys_role_menuScalarFieldEnum[]
  }

  /**
   * sys_role_menu create
   */
  export type sys_role_menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_role_menu.
     */
    data: XOR<sys_role_menuCreateInput, sys_role_menuUncheckedCreateInput>
  }

  /**
   * sys_role_menu createMany
   */
  export type sys_role_menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_role_menus.
     */
    data: sys_role_menuCreateManyInput | sys_role_menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_role_menu update
   */
  export type sys_role_menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_role_menu.
     */
    data: XOR<sys_role_menuUpdateInput, sys_role_menuUncheckedUpdateInput>
    /**
     * Choose, which sys_role_menu to update.
     */
    where: sys_role_menuWhereUniqueInput
  }

  /**
   * sys_role_menu updateMany
   */
  export type sys_role_menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_role_menus.
     */
    data: XOR<sys_role_menuUpdateManyMutationInput, sys_role_menuUncheckedUpdateManyInput>
    /**
     * Filter which sys_role_menus to update
     */
    where?: sys_role_menuWhereInput
    /**
     * Limit how many sys_role_menus to update.
     */
    limit?: number
  }

  /**
   * sys_role_menu upsert
   */
  export type sys_role_menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_role_menu to update in case it exists.
     */
    where: sys_role_menuWhereUniqueInput
    /**
     * In case the sys_role_menu found by the `where` argument doesn't exist, create a new sys_role_menu with this data.
     */
    create: XOR<sys_role_menuCreateInput, sys_role_menuUncheckedCreateInput>
    /**
     * In case the sys_role_menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_role_menuUpdateInput, sys_role_menuUncheckedUpdateInput>
  }

  /**
   * sys_role_menu delete
   */
  export type sys_role_menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
    /**
     * Filter which sys_role_menu to delete.
     */
    where: sys_role_menuWhereUniqueInput
  }

  /**
   * sys_role_menu deleteMany
   */
  export type sys_role_menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_role_menus to delete
     */
    where?: sys_role_menuWhereInput
    /**
     * Limit how many sys_role_menus to delete.
     */
    limit?: number
  }

  /**
   * sys_role_menu.role
   */
  export type sys_role_menu$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    where?: sys_roleWhereInput
  }

  /**
   * sys_role_menu.menu
   */
  export type sys_role_menu$menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_menu
     */
    select?: sys_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_menu
     */
    omit?: sys_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_menuInclude<ExtArgs> | null
    where?: sys_menuWhereInput
  }

  /**
   * sys_role_menu without action
   */
  export type sys_role_menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_menu
     */
    select?: sys_role_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_menu
     */
    omit?: sys_role_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_menuInclude<ExtArgs> | null
  }


  /**
   * Model sys_role_user
   */

  export type AggregateSys_role_user = {
    _count: Sys_role_userCountAggregateOutputType | null
    _min: Sys_role_userMinAggregateOutputType | null
    _max: Sys_role_userMaxAggregateOutputType | null
  }

  export type Sys_role_userMinAggregateOutputType = {
    id: string | null
    role_id: string | null
    user_id: string | null
    create_by: string | null
    create_time: Date | null
    deleted: boolean | null
  }

  export type Sys_role_userMaxAggregateOutputType = {
    id: string | null
    role_id: string | null
    user_id: string | null
    create_by: string | null
    create_time: Date | null
    deleted: boolean | null
  }

  export type Sys_role_userCountAggregateOutputType = {
    id: number
    role_id: number
    user_id: number
    create_by: number
    create_time: number
    deleted: number
    _all: number
  }


  export type Sys_role_userMinAggregateInputType = {
    id?: true
    role_id?: true
    user_id?: true
    create_by?: true
    create_time?: true
    deleted?: true
  }

  export type Sys_role_userMaxAggregateInputType = {
    id?: true
    role_id?: true
    user_id?: true
    create_by?: true
    create_time?: true
    deleted?: true
  }

  export type Sys_role_userCountAggregateInputType = {
    id?: true
    role_id?: true
    user_id?: true
    create_by?: true
    create_time?: true
    deleted?: true
    _all?: true
  }

  export type Sys_role_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_role_user to aggregate.
     */
    where?: sys_role_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_role_users to fetch.
     */
    orderBy?: sys_role_userOrderByWithRelationInput | sys_role_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_role_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_role_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_role_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_role_users
    **/
    _count?: true | Sys_role_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_role_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_role_userMaxAggregateInputType
  }

  export type GetSys_role_userAggregateType<T extends Sys_role_userAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_role_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_role_user[P]>
      : GetScalarType<T[P], AggregateSys_role_user[P]>
  }




  export type sys_role_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_role_userWhereInput
    orderBy?: sys_role_userOrderByWithAggregationInput | sys_role_userOrderByWithAggregationInput[]
    by: Sys_role_userScalarFieldEnum[] | Sys_role_userScalarFieldEnum
    having?: sys_role_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_role_userCountAggregateInputType | true
    _min?: Sys_role_userMinAggregateInputType
    _max?: Sys_role_userMaxAggregateInputType
  }

  export type Sys_role_userGroupByOutputType = {
    id: string
    role_id: string | null
    user_id: string | null
    create_by: string | null
    create_time: Date | null
    deleted: boolean
    _count: Sys_role_userCountAggregateOutputType | null
    _min: Sys_role_userMinAggregateOutputType | null
    _max: Sys_role_userMaxAggregateOutputType | null
  }

  type GetSys_role_userGroupByPayload<T extends sys_role_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_role_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_role_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_role_userGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_role_userGroupByOutputType[P]>
        }
      >
    >


  export type sys_role_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    user_id?: boolean
    create_by?: boolean
    create_time?: boolean
    deleted?: boolean
    role?: boolean | sys_role_user$roleArgs<ExtArgs>
    user?: boolean | sys_role_user$userArgs<ExtArgs>
  }, ExtArgs["result"]["sys_role_user"]>



  export type sys_role_userSelectScalar = {
    id?: boolean
    role_id?: boolean
    user_id?: boolean
    create_by?: boolean
    create_time?: boolean
    deleted?: boolean
  }

  export type sys_role_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_id" | "user_id" | "create_by" | "create_time" | "deleted", ExtArgs["result"]["sys_role_user"]>
  export type sys_role_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | sys_role_user$roleArgs<ExtArgs>
    user?: boolean | sys_role_user$userArgs<ExtArgs>
  }

  export type $sys_role_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_role_user"
    objects: {
      role: Prisma.$sys_rolePayload<ExtArgs> | null
      user: Prisma.$sys_userPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * ID
       */
      id: string
      /**
       * 角色id
       */
      role_id: string | null
      /**
       * 用户id
       */
      user_id: string | null
      /**
       * 创建者
       */
      create_by: string | null
      /**
       * 创建日期
       */
      create_time: Date | null
      /**
       * 是否被删除
       */
      deleted: boolean
    }, ExtArgs["result"]["sys_role_user"]>
    composites: {}
  }

  type sys_role_userGetPayload<S extends boolean | null | undefined | sys_role_userDefaultArgs> = $Result.GetResult<Prisma.$sys_role_userPayload, S>

  type sys_role_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_role_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_role_userCountAggregateInputType | true
    }

  export interface sys_role_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_role_user'], meta: { name: 'sys_role_user' } }
    /**
     * Find zero or one Sys_role_user that matches the filter.
     * @param {sys_role_userFindUniqueArgs} args - Arguments to find a Sys_role_user
     * @example
     * // Get one Sys_role_user
     * const sys_role_user = await prisma.sys_role_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_role_userFindUniqueArgs>(args: SelectSubset<T, sys_role_userFindUniqueArgs<ExtArgs>>): Prisma__sys_role_userClient<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_role_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_role_userFindUniqueOrThrowArgs} args - Arguments to find a Sys_role_user
     * @example
     * // Get one Sys_role_user
     * const sys_role_user = await prisma.sys_role_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_role_userFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_role_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_role_userClient<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_role_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_userFindFirstArgs} args - Arguments to find a Sys_role_user
     * @example
     * // Get one Sys_role_user
     * const sys_role_user = await prisma.sys_role_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_role_userFindFirstArgs>(args?: SelectSubset<T, sys_role_userFindFirstArgs<ExtArgs>>): Prisma__sys_role_userClient<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_role_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_userFindFirstOrThrowArgs} args - Arguments to find a Sys_role_user
     * @example
     * // Get one Sys_role_user
     * const sys_role_user = await prisma.sys_role_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_role_userFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_role_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_role_userClient<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_role_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_role_users
     * const sys_role_users = await prisma.sys_role_user.findMany()
     * 
     * // Get first 10 Sys_role_users
     * const sys_role_users = await prisma.sys_role_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_role_userWithIdOnly = await prisma.sys_role_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_role_userFindManyArgs>(args?: SelectSubset<T, sys_role_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_role_user.
     * @param {sys_role_userCreateArgs} args - Arguments to create a Sys_role_user.
     * @example
     * // Create one Sys_role_user
     * const Sys_role_user = await prisma.sys_role_user.create({
     *   data: {
     *     // ... data to create a Sys_role_user
     *   }
     * })
     * 
     */
    create<T extends sys_role_userCreateArgs>(args: SelectSubset<T, sys_role_userCreateArgs<ExtArgs>>): Prisma__sys_role_userClient<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_role_users.
     * @param {sys_role_userCreateManyArgs} args - Arguments to create many Sys_role_users.
     * @example
     * // Create many Sys_role_users
     * const sys_role_user = await prisma.sys_role_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_role_userCreateManyArgs>(args?: SelectSubset<T, sys_role_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_role_user.
     * @param {sys_role_userDeleteArgs} args - Arguments to delete one Sys_role_user.
     * @example
     * // Delete one Sys_role_user
     * const Sys_role_user = await prisma.sys_role_user.delete({
     *   where: {
     *     // ... filter to delete one Sys_role_user
     *   }
     * })
     * 
     */
    delete<T extends sys_role_userDeleteArgs>(args: SelectSubset<T, sys_role_userDeleteArgs<ExtArgs>>): Prisma__sys_role_userClient<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_role_user.
     * @param {sys_role_userUpdateArgs} args - Arguments to update one Sys_role_user.
     * @example
     * // Update one Sys_role_user
     * const sys_role_user = await prisma.sys_role_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_role_userUpdateArgs>(args: SelectSubset<T, sys_role_userUpdateArgs<ExtArgs>>): Prisma__sys_role_userClient<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_role_users.
     * @param {sys_role_userDeleteManyArgs} args - Arguments to filter Sys_role_users to delete.
     * @example
     * // Delete a few Sys_role_users
     * const { count } = await prisma.sys_role_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_role_userDeleteManyArgs>(args?: SelectSubset<T, sys_role_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_role_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_role_users
     * const sys_role_user = await prisma.sys_role_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_role_userUpdateManyArgs>(args: SelectSubset<T, sys_role_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_role_user.
     * @param {sys_role_userUpsertArgs} args - Arguments to update or create a Sys_role_user.
     * @example
     * // Update or create a Sys_role_user
     * const sys_role_user = await prisma.sys_role_user.upsert({
     *   create: {
     *     // ... data to create a Sys_role_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_role_user we want to update
     *   }
     * })
     */
    upsert<T extends sys_role_userUpsertArgs>(args: SelectSubset<T, sys_role_userUpsertArgs<ExtArgs>>): Prisma__sys_role_userClient<$Result.GetResult<Prisma.$sys_role_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_role_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_userCountArgs} args - Arguments to filter Sys_role_users to count.
     * @example
     * // Count the number of Sys_role_users
     * const count = await prisma.sys_role_user.count({
     *   where: {
     *     // ... the filter for the Sys_role_users we want to count
     *   }
     * })
    **/
    count<T extends sys_role_userCountArgs>(
      args?: Subset<T, sys_role_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_role_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_role_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_role_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_role_userAggregateArgs>(args: Subset<T, Sys_role_userAggregateArgs>): Prisma.PrismaPromise<GetSys_role_userAggregateType<T>>

    /**
     * Group by Sys_role_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_role_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_role_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_role_userGroupByArgs['orderBy'] }
        : { orderBy?: sys_role_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_role_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_role_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_role_user model
   */
  readonly fields: sys_role_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_role_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_role_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends sys_role_user$roleArgs<ExtArgs> = {}>(args?: Subset<T, sys_role_user$roleArgs<ExtArgs>>): Prisma__sys_roleClient<$Result.GetResult<Prisma.$sys_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends sys_role_user$userArgs<ExtArgs> = {}>(args?: Subset<T, sys_role_user$userArgs<ExtArgs>>): Prisma__sys_userClient<$Result.GetResult<Prisma.$sys_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_role_user model
   */
  interface sys_role_userFieldRefs {
    readonly id: FieldRef<"sys_role_user", 'String'>
    readonly role_id: FieldRef<"sys_role_user", 'String'>
    readonly user_id: FieldRef<"sys_role_user", 'String'>
    readonly create_by: FieldRef<"sys_role_user", 'String'>
    readonly create_time: FieldRef<"sys_role_user", 'DateTime'>
    readonly deleted: FieldRef<"sys_role_user", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * sys_role_user findUnique
   */
  export type sys_role_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_role_user to fetch.
     */
    where: sys_role_userWhereUniqueInput
  }

  /**
   * sys_role_user findUniqueOrThrow
   */
  export type sys_role_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_role_user to fetch.
     */
    where: sys_role_userWhereUniqueInput
  }

  /**
   * sys_role_user findFirst
   */
  export type sys_role_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_role_user to fetch.
     */
    where?: sys_role_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_role_users to fetch.
     */
    orderBy?: sys_role_userOrderByWithRelationInput | sys_role_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_role_users.
     */
    cursor?: sys_role_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_role_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_role_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_role_users.
     */
    distinct?: Sys_role_userScalarFieldEnum | Sys_role_userScalarFieldEnum[]
  }

  /**
   * sys_role_user findFirstOrThrow
   */
  export type sys_role_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_role_user to fetch.
     */
    where?: sys_role_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_role_users to fetch.
     */
    orderBy?: sys_role_userOrderByWithRelationInput | sys_role_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_role_users.
     */
    cursor?: sys_role_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_role_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_role_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_role_users.
     */
    distinct?: Sys_role_userScalarFieldEnum | Sys_role_userScalarFieldEnum[]
  }

  /**
   * sys_role_user findMany
   */
  export type sys_role_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    /**
     * Filter, which sys_role_users to fetch.
     */
    where?: sys_role_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_role_users to fetch.
     */
    orderBy?: sys_role_userOrderByWithRelationInput | sys_role_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_role_users.
     */
    cursor?: sys_role_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_role_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_role_users.
     */
    skip?: number
    distinct?: Sys_role_userScalarFieldEnum | Sys_role_userScalarFieldEnum[]
  }

  /**
   * sys_role_user create
   */
  export type sys_role_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_role_user.
     */
    data: XOR<sys_role_userCreateInput, sys_role_userUncheckedCreateInput>
  }

  /**
   * sys_role_user createMany
   */
  export type sys_role_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_role_users.
     */
    data: sys_role_userCreateManyInput | sys_role_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_role_user update
   */
  export type sys_role_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_role_user.
     */
    data: XOR<sys_role_userUpdateInput, sys_role_userUncheckedUpdateInput>
    /**
     * Choose, which sys_role_user to update.
     */
    where: sys_role_userWhereUniqueInput
  }

  /**
   * sys_role_user updateMany
   */
  export type sys_role_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_role_users.
     */
    data: XOR<sys_role_userUpdateManyMutationInput, sys_role_userUncheckedUpdateManyInput>
    /**
     * Filter which sys_role_users to update
     */
    where?: sys_role_userWhereInput
    /**
     * Limit how many sys_role_users to update.
     */
    limit?: number
  }

  /**
   * sys_role_user upsert
   */
  export type sys_role_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_role_user to update in case it exists.
     */
    where: sys_role_userWhereUniqueInput
    /**
     * In case the sys_role_user found by the `where` argument doesn't exist, create a new sys_role_user with this data.
     */
    create: XOR<sys_role_userCreateInput, sys_role_userUncheckedCreateInput>
    /**
     * In case the sys_role_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_role_userUpdateInput, sys_role_userUncheckedUpdateInput>
  }

  /**
   * sys_role_user delete
   */
  export type sys_role_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
    /**
     * Filter which sys_role_user to delete.
     */
    where: sys_role_userWhereUniqueInput
  }

  /**
   * sys_role_user deleteMany
   */
  export type sys_role_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_role_users to delete
     */
    where?: sys_role_userWhereInput
    /**
     * Limit how many sys_role_users to delete.
     */
    limit?: number
  }

  /**
   * sys_role_user.role
   */
  export type sys_role_user$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role
     */
    select?: sys_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role
     */
    omit?: sys_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_roleInclude<ExtArgs> | null
    where?: sys_roleWhereInput
  }

  /**
   * sys_role_user.user
   */
  export type sys_role_user$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_user
     */
    select?: sys_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_user
     */
    omit?: sys_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_userInclude<ExtArgs> | null
    where?: sys_userWhereInput
  }

  /**
   * sys_role_user without action
   */
  export type sys_role_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_role_user
     */
    select?: sys_role_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_role_user
     */
    omit?: sys_role_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_role_userInclude<ExtArgs> | null
  }


  /**
   * Model sys_dict
   */

  export type AggregateSys_dict = {
    _count: Sys_dictCountAggregateOutputType | null
    _min: Sys_dictMinAggregateOutputType | null
    _max: Sys_dictMaxAggregateOutputType | null
  }

  export type Sys_dictMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean | null
  }

  export type Sys_dictMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean | null
  }

  export type Sys_dictCountAggregateOutputType = {
    id: number
    name: number
    description: number
    create_by: number
    update_by: number
    create_time: number
    update_time: number
    deleted: number
    _all: number
  }


  export type Sys_dictMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
  }

  export type Sys_dictMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
  }

  export type Sys_dictCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
    _all?: true
  }

  export type Sys_dictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_dict to aggregate.
     */
    where?: sys_dictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dicts to fetch.
     */
    orderBy?: sys_dictOrderByWithRelationInput | sys_dictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_dictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_dicts
    **/
    _count?: true | Sys_dictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_dictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_dictMaxAggregateInputType
  }

  export type GetSys_dictAggregateType<T extends Sys_dictAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_dict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_dict[P]>
      : GetScalarType<T[P], AggregateSys_dict[P]>
  }




  export type sys_dictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_dictWhereInput
    orderBy?: sys_dictOrderByWithAggregationInput | sys_dictOrderByWithAggregationInput[]
    by: Sys_dictScalarFieldEnum[] | Sys_dictScalarFieldEnum
    having?: sys_dictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_dictCountAggregateInputType | true
    _min?: Sys_dictMinAggregateInputType
    _max?: Sys_dictMaxAggregateInputType
  }

  export type Sys_dictGroupByOutputType = {
    id: string
    name: string | null
    description: string | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean
    _count: Sys_dictCountAggregateOutputType | null
    _min: Sys_dictMinAggregateOutputType | null
    _max: Sys_dictMaxAggregateOutputType | null
  }

  type GetSys_dictGroupByPayload<T extends sys_dictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_dictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_dictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_dictGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_dictGroupByOutputType[P]>
        }
      >
    >


  export type sys_dictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    create_by?: boolean
    update_by?: boolean
    create_time?: boolean
    update_time?: boolean
    deleted?: boolean
    details?: boolean | sys_dict$detailsArgs<ExtArgs>
    _count?: boolean | Sys_dictCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sys_dict"]>



  export type sys_dictSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    create_by?: boolean
    update_by?: boolean
    create_time?: boolean
    update_time?: boolean
    deleted?: boolean
  }

  export type sys_dictOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "create_by" | "update_by" | "create_time" | "update_time" | "deleted", ExtArgs["result"]["sys_dict"]>
  export type sys_dictInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | sys_dict$detailsArgs<ExtArgs>
    _count?: boolean | Sys_dictCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sys_dictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_dict"
    objects: {
      /**
       * 字典详情
       */
      details: Prisma.$sys_dict_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * ID
       */
      id: string
      /**
       * 字典名称
       */
      name: string | null
      /**
       * 字典描述
       */
      description: string | null
      /**
       * 创建者
       */
      create_by: string | null
      /**
       * 更新者
       */
      update_by: string | null
      /**
       * 创建日期
       */
      create_time: Date | null
      /**
       * 更新时间
       */
      update_time: Date | null
      /**
       * 是否被删除
       */
      deleted: boolean
    }, ExtArgs["result"]["sys_dict"]>
    composites: {}
  }

  type sys_dictGetPayload<S extends boolean | null | undefined | sys_dictDefaultArgs> = $Result.GetResult<Prisma.$sys_dictPayload, S>

  type sys_dictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_dictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_dictCountAggregateInputType | true
    }

  export interface sys_dictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_dict'], meta: { name: 'sys_dict' } }
    /**
     * Find zero or one Sys_dict that matches the filter.
     * @param {sys_dictFindUniqueArgs} args - Arguments to find a Sys_dict
     * @example
     * // Get one Sys_dict
     * const sys_dict = await prisma.sys_dict.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_dictFindUniqueArgs>(args: SelectSubset<T, sys_dictFindUniqueArgs<ExtArgs>>): Prisma__sys_dictClient<$Result.GetResult<Prisma.$sys_dictPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_dict that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_dictFindUniqueOrThrowArgs} args - Arguments to find a Sys_dict
     * @example
     * // Get one Sys_dict
     * const sys_dict = await prisma.sys_dict.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_dictFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_dictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_dictClient<$Result.GetResult<Prisma.$sys_dictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_dict that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dictFindFirstArgs} args - Arguments to find a Sys_dict
     * @example
     * // Get one Sys_dict
     * const sys_dict = await prisma.sys_dict.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_dictFindFirstArgs>(args?: SelectSubset<T, sys_dictFindFirstArgs<ExtArgs>>): Prisma__sys_dictClient<$Result.GetResult<Prisma.$sys_dictPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_dict that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dictFindFirstOrThrowArgs} args - Arguments to find a Sys_dict
     * @example
     * // Get one Sys_dict
     * const sys_dict = await prisma.sys_dict.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_dictFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_dictFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_dictClient<$Result.GetResult<Prisma.$sys_dictPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_dicts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_dicts
     * const sys_dicts = await prisma.sys_dict.findMany()
     * 
     * // Get first 10 Sys_dicts
     * const sys_dicts = await prisma.sys_dict.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_dictWithIdOnly = await prisma.sys_dict.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_dictFindManyArgs>(args?: SelectSubset<T, sys_dictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_dictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_dict.
     * @param {sys_dictCreateArgs} args - Arguments to create a Sys_dict.
     * @example
     * // Create one Sys_dict
     * const Sys_dict = await prisma.sys_dict.create({
     *   data: {
     *     // ... data to create a Sys_dict
     *   }
     * })
     * 
     */
    create<T extends sys_dictCreateArgs>(args: SelectSubset<T, sys_dictCreateArgs<ExtArgs>>): Prisma__sys_dictClient<$Result.GetResult<Prisma.$sys_dictPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_dicts.
     * @param {sys_dictCreateManyArgs} args - Arguments to create many Sys_dicts.
     * @example
     * // Create many Sys_dicts
     * const sys_dict = await prisma.sys_dict.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_dictCreateManyArgs>(args?: SelectSubset<T, sys_dictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_dict.
     * @param {sys_dictDeleteArgs} args - Arguments to delete one Sys_dict.
     * @example
     * // Delete one Sys_dict
     * const Sys_dict = await prisma.sys_dict.delete({
     *   where: {
     *     // ... filter to delete one Sys_dict
     *   }
     * })
     * 
     */
    delete<T extends sys_dictDeleteArgs>(args: SelectSubset<T, sys_dictDeleteArgs<ExtArgs>>): Prisma__sys_dictClient<$Result.GetResult<Prisma.$sys_dictPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_dict.
     * @param {sys_dictUpdateArgs} args - Arguments to update one Sys_dict.
     * @example
     * // Update one Sys_dict
     * const sys_dict = await prisma.sys_dict.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_dictUpdateArgs>(args: SelectSubset<T, sys_dictUpdateArgs<ExtArgs>>): Prisma__sys_dictClient<$Result.GetResult<Prisma.$sys_dictPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_dicts.
     * @param {sys_dictDeleteManyArgs} args - Arguments to filter Sys_dicts to delete.
     * @example
     * // Delete a few Sys_dicts
     * const { count } = await prisma.sys_dict.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_dictDeleteManyArgs>(args?: SelectSubset<T, sys_dictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_dicts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_dicts
     * const sys_dict = await prisma.sys_dict.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_dictUpdateManyArgs>(args: SelectSubset<T, sys_dictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_dict.
     * @param {sys_dictUpsertArgs} args - Arguments to update or create a Sys_dict.
     * @example
     * // Update or create a Sys_dict
     * const sys_dict = await prisma.sys_dict.upsert({
     *   create: {
     *     // ... data to create a Sys_dict
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_dict we want to update
     *   }
     * })
     */
    upsert<T extends sys_dictUpsertArgs>(args: SelectSubset<T, sys_dictUpsertArgs<ExtArgs>>): Prisma__sys_dictClient<$Result.GetResult<Prisma.$sys_dictPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_dicts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dictCountArgs} args - Arguments to filter Sys_dicts to count.
     * @example
     * // Count the number of Sys_dicts
     * const count = await prisma.sys_dict.count({
     *   where: {
     *     // ... the filter for the Sys_dicts we want to count
     *   }
     * })
    **/
    count<T extends sys_dictCountArgs>(
      args?: Subset<T, sys_dictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_dictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_dict.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_dictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_dictAggregateArgs>(args: Subset<T, Sys_dictAggregateArgs>): Prisma.PrismaPromise<GetSys_dictAggregateType<T>>

    /**
     * Group by Sys_dict.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dictGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_dictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_dictGroupByArgs['orderBy'] }
        : { orderBy?: sys_dictGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_dictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_dictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_dict model
   */
  readonly fields: sys_dictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_dict.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_dictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    details<T extends sys_dict$detailsArgs<ExtArgs> = {}>(args?: Subset<T, sys_dict$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_dict_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_dict model
   */
  interface sys_dictFieldRefs {
    readonly id: FieldRef<"sys_dict", 'String'>
    readonly name: FieldRef<"sys_dict", 'String'>
    readonly description: FieldRef<"sys_dict", 'String'>
    readonly create_by: FieldRef<"sys_dict", 'String'>
    readonly update_by: FieldRef<"sys_dict", 'String'>
    readonly create_time: FieldRef<"sys_dict", 'DateTime'>
    readonly update_time: FieldRef<"sys_dict", 'DateTime'>
    readonly deleted: FieldRef<"sys_dict", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * sys_dict findUnique
   */
  export type sys_dictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
    /**
     * Filter, which sys_dict to fetch.
     */
    where: sys_dictWhereUniqueInput
  }

  /**
   * sys_dict findUniqueOrThrow
   */
  export type sys_dictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
    /**
     * Filter, which sys_dict to fetch.
     */
    where: sys_dictWhereUniqueInput
  }

  /**
   * sys_dict findFirst
   */
  export type sys_dictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
    /**
     * Filter, which sys_dict to fetch.
     */
    where?: sys_dictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dicts to fetch.
     */
    orderBy?: sys_dictOrderByWithRelationInput | sys_dictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_dicts.
     */
    cursor?: sys_dictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_dicts.
     */
    distinct?: Sys_dictScalarFieldEnum | Sys_dictScalarFieldEnum[]
  }

  /**
   * sys_dict findFirstOrThrow
   */
  export type sys_dictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
    /**
     * Filter, which sys_dict to fetch.
     */
    where?: sys_dictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dicts to fetch.
     */
    orderBy?: sys_dictOrderByWithRelationInput | sys_dictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_dicts.
     */
    cursor?: sys_dictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_dicts.
     */
    distinct?: Sys_dictScalarFieldEnum | Sys_dictScalarFieldEnum[]
  }

  /**
   * sys_dict findMany
   */
  export type sys_dictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
    /**
     * Filter, which sys_dicts to fetch.
     */
    where?: sys_dictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dicts to fetch.
     */
    orderBy?: sys_dictOrderByWithRelationInput | sys_dictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_dicts.
     */
    cursor?: sys_dictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dicts.
     */
    skip?: number
    distinct?: Sys_dictScalarFieldEnum | Sys_dictScalarFieldEnum[]
  }

  /**
   * sys_dict create
   */
  export type sys_dictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_dict.
     */
    data: XOR<sys_dictCreateInput, sys_dictUncheckedCreateInput>
  }

  /**
   * sys_dict createMany
   */
  export type sys_dictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_dicts.
     */
    data: sys_dictCreateManyInput | sys_dictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_dict update
   */
  export type sys_dictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_dict.
     */
    data: XOR<sys_dictUpdateInput, sys_dictUncheckedUpdateInput>
    /**
     * Choose, which sys_dict to update.
     */
    where: sys_dictWhereUniqueInput
  }

  /**
   * sys_dict updateMany
   */
  export type sys_dictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_dicts.
     */
    data: XOR<sys_dictUpdateManyMutationInput, sys_dictUncheckedUpdateManyInput>
    /**
     * Filter which sys_dicts to update
     */
    where?: sys_dictWhereInput
    /**
     * Limit how many sys_dicts to update.
     */
    limit?: number
  }

  /**
   * sys_dict upsert
   */
  export type sys_dictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_dict to update in case it exists.
     */
    where: sys_dictWhereUniqueInput
    /**
     * In case the sys_dict found by the `where` argument doesn't exist, create a new sys_dict with this data.
     */
    create: XOR<sys_dictCreateInput, sys_dictUncheckedCreateInput>
    /**
     * In case the sys_dict was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_dictUpdateInput, sys_dictUncheckedUpdateInput>
  }

  /**
   * sys_dict delete
   */
  export type sys_dictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
    /**
     * Filter which sys_dict to delete.
     */
    where: sys_dictWhereUniqueInput
  }

  /**
   * sys_dict deleteMany
   */
  export type sys_dictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_dicts to delete
     */
    where?: sys_dictWhereInput
    /**
     * Limit how many sys_dicts to delete.
     */
    limit?: number
  }

  /**
   * sys_dict.details
   */
  export type sys_dict$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
    where?: sys_dict_detailWhereInput
    orderBy?: sys_dict_detailOrderByWithRelationInput | sys_dict_detailOrderByWithRelationInput[]
    cursor?: sys_dict_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sys_dict_detailScalarFieldEnum | Sys_dict_detailScalarFieldEnum[]
  }

  /**
   * sys_dict without action
   */
  export type sys_dictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
  }


  /**
   * Model sys_dict_detail
   */

  export type AggregateSys_dict_detail = {
    _count: Sys_dict_detailCountAggregateOutputType | null
    _avg: Sys_dict_detailAvgAggregateOutputType | null
    _sum: Sys_dict_detailSumAggregateOutputType | null
    _min: Sys_dict_detailMinAggregateOutputType | null
    _max: Sys_dict_detailMaxAggregateOutputType | null
  }

  export type Sys_dict_detailAvgAggregateOutputType = {
    sort: number | null
  }

  export type Sys_dict_detailSumAggregateOutputType = {
    sort: number | null
  }

  export type Sys_dict_detailMinAggregateOutputType = {
    id: string | null
    dict_id: string | null
    label: string | null
    code: string | null
    sort: number | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean | null
    tab: string | null
  }

  export type Sys_dict_detailMaxAggregateOutputType = {
    id: string | null
    dict_id: string | null
    label: string | null
    code: string | null
    sort: number | null
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean | null
    tab: string | null
  }

  export type Sys_dict_detailCountAggregateOutputType = {
    id: number
    dict_id: number
    label: number
    code: number
    sort: number
    create_by: number
    update_by: number
    create_time: number
    update_time: number
    deleted: number
    tab: number
    _all: number
  }


  export type Sys_dict_detailAvgAggregateInputType = {
    sort?: true
  }

  export type Sys_dict_detailSumAggregateInputType = {
    sort?: true
  }

  export type Sys_dict_detailMinAggregateInputType = {
    id?: true
    dict_id?: true
    label?: true
    code?: true
    sort?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
    tab?: true
  }

  export type Sys_dict_detailMaxAggregateInputType = {
    id?: true
    dict_id?: true
    label?: true
    code?: true
    sort?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
    tab?: true
  }

  export type Sys_dict_detailCountAggregateInputType = {
    id?: true
    dict_id?: true
    label?: true
    code?: true
    sort?: true
    create_by?: true
    update_by?: true
    create_time?: true
    update_time?: true
    deleted?: true
    tab?: true
    _all?: true
  }

  export type Sys_dict_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_dict_detail to aggregate.
     */
    where?: sys_dict_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dict_details to fetch.
     */
    orderBy?: sys_dict_detailOrderByWithRelationInput | sys_dict_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_dict_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dict_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dict_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_dict_details
    **/
    _count?: true | Sys_dict_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_dict_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_dict_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_dict_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_dict_detailMaxAggregateInputType
  }

  export type GetSys_dict_detailAggregateType<T extends Sys_dict_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_dict_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_dict_detail[P]>
      : GetScalarType<T[P], AggregateSys_dict_detail[P]>
  }




  export type sys_dict_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_dict_detailWhereInput
    orderBy?: sys_dict_detailOrderByWithAggregationInput | sys_dict_detailOrderByWithAggregationInput[]
    by: Sys_dict_detailScalarFieldEnum[] | Sys_dict_detailScalarFieldEnum
    having?: sys_dict_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_dict_detailCountAggregateInputType | true
    _avg?: Sys_dict_detailAvgAggregateInputType
    _sum?: Sys_dict_detailSumAggregateInputType
    _min?: Sys_dict_detailMinAggregateInputType
    _max?: Sys_dict_detailMaxAggregateInputType
  }

  export type Sys_dict_detailGroupByOutputType = {
    id: string
    dict_id: string | null
    label: string | null
    code: string | null
    sort: number
    create_by: string | null
    update_by: string | null
    create_time: Date | null
    update_time: Date | null
    deleted: boolean
    tab: string | null
    _count: Sys_dict_detailCountAggregateOutputType | null
    _avg: Sys_dict_detailAvgAggregateOutputType | null
    _sum: Sys_dict_detailSumAggregateOutputType | null
    _min: Sys_dict_detailMinAggregateOutputType | null
    _max: Sys_dict_detailMaxAggregateOutputType | null
  }

  type GetSys_dict_detailGroupByPayload<T extends sys_dict_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_dict_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_dict_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_dict_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_dict_detailGroupByOutputType[P]>
        }
      >
    >


  export type sys_dict_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dict_id?: boolean
    label?: boolean
    code?: boolean
    sort?: boolean
    create_by?: boolean
    update_by?: boolean
    create_time?: boolean
    update_time?: boolean
    deleted?: boolean
    tab?: boolean
    dict?: boolean | sys_dict_detail$dictArgs<ExtArgs>
  }, ExtArgs["result"]["sys_dict_detail"]>



  export type sys_dict_detailSelectScalar = {
    id?: boolean
    dict_id?: boolean
    label?: boolean
    code?: boolean
    sort?: boolean
    create_by?: boolean
    update_by?: boolean
    create_time?: boolean
    update_time?: boolean
    deleted?: boolean
    tab?: boolean
  }

  export type sys_dict_detailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dict_id" | "label" | "code" | "sort" | "create_by" | "update_by" | "create_time" | "update_time" | "deleted" | "tab", ExtArgs["result"]["sys_dict_detail"]>
  export type sys_dict_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dict?: boolean | sys_dict_detail$dictArgs<ExtArgs>
  }

  export type $sys_dict_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_dict_detail"
    objects: {
      dict: Prisma.$sys_dictPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * ID
       */
      id: string
      /**
       * 字典id
       */
      dict_id: string | null
      /**
       * label
       */
      label: string | null
      /**
       * code
       */
      code: string | null
      /**
       * 排序
       */
      sort: number
      /**
       * 创建者
       */
      create_by: string | null
      /**
       * 更新者
       */
      update_by: string | null
      /**
       * 创建日期
       */
      create_time: Date | null
      /**
       * 更新时间
       */
      update_time: Date | null
      /**
       * 是否被删除
       */
      deleted: boolean
      /**
       * 标记
       */
      tab: string | null
    }, ExtArgs["result"]["sys_dict_detail"]>
    composites: {}
  }

  type sys_dict_detailGetPayload<S extends boolean | null | undefined | sys_dict_detailDefaultArgs> = $Result.GetResult<Prisma.$sys_dict_detailPayload, S>

  type sys_dict_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_dict_detailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_dict_detailCountAggregateInputType | true
    }

  export interface sys_dict_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_dict_detail'], meta: { name: 'sys_dict_detail' } }
    /**
     * Find zero or one Sys_dict_detail that matches the filter.
     * @param {sys_dict_detailFindUniqueArgs} args - Arguments to find a Sys_dict_detail
     * @example
     * // Get one Sys_dict_detail
     * const sys_dict_detail = await prisma.sys_dict_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_dict_detailFindUniqueArgs>(args: SelectSubset<T, sys_dict_detailFindUniqueArgs<ExtArgs>>): Prisma__sys_dict_detailClient<$Result.GetResult<Prisma.$sys_dict_detailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_dict_detail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_dict_detailFindUniqueOrThrowArgs} args - Arguments to find a Sys_dict_detail
     * @example
     * // Get one Sys_dict_detail
     * const sys_dict_detail = await prisma.sys_dict_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_dict_detailFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_dict_detailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_dict_detailClient<$Result.GetResult<Prisma.$sys_dict_detailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_dict_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_detailFindFirstArgs} args - Arguments to find a Sys_dict_detail
     * @example
     * // Get one Sys_dict_detail
     * const sys_dict_detail = await prisma.sys_dict_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_dict_detailFindFirstArgs>(args?: SelectSubset<T, sys_dict_detailFindFirstArgs<ExtArgs>>): Prisma__sys_dict_detailClient<$Result.GetResult<Prisma.$sys_dict_detailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_dict_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_detailFindFirstOrThrowArgs} args - Arguments to find a Sys_dict_detail
     * @example
     * // Get one Sys_dict_detail
     * const sys_dict_detail = await prisma.sys_dict_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_dict_detailFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_dict_detailFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_dict_detailClient<$Result.GetResult<Prisma.$sys_dict_detailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_dict_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_detailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_dict_details
     * const sys_dict_details = await prisma.sys_dict_detail.findMany()
     * 
     * // Get first 10 Sys_dict_details
     * const sys_dict_details = await prisma.sys_dict_detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_dict_detailWithIdOnly = await prisma.sys_dict_detail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_dict_detailFindManyArgs>(args?: SelectSubset<T, sys_dict_detailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_dict_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_dict_detail.
     * @param {sys_dict_detailCreateArgs} args - Arguments to create a Sys_dict_detail.
     * @example
     * // Create one Sys_dict_detail
     * const Sys_dict_detail = await prisma.sys_dict_detail.create({
     *   data: {
     *     // ... data to create a Sys_dict_detail
     *   }
     * })
     * 
     */
    create<T extends sys_dict_detailCreateArgs>(args: SelectSubset<T, sys_dict_detailCreateArgs<ExtArgs>>): Prisma__sys_dict_detailClient<$Result.GetResult<Prisma.$sys_dict_detailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_dict_details.
     * @param {sys_dict_detailCreateManyArgs} args - Arguments to create many Sys_dict_details.
     * @example
     * // Create many Sys_dict_details
     * const sys_dict_detail = await prisma.sys_dict_detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_dict_detailCreateManyArgs>(args?: SelectSubset<T, sys_dict_detailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_dict_detail.
     * @param {sys_dict_detailDeleteArgs} args - Arguments to delete one Sys_dict_detail.
     * @example
     * // Delete one Sys_dict_detail
     * const Sys_dict_detail = await prisma.sys_dict_detail.delete({
     *   where: {
     *     // ... filter to delete one Sys_dict_detail
     *   }
     * })
     * 
     */
    delete<T extends sys_dict_detailDeleteArgs>(args: SelectSubset<T, sys_dict_detailDeleteArgs<ExtArgs>>): Prisma__sys_dict_detailClient<$Result.GetResult<Prisma.$sys_dict_detailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_dict_detail.
     * @param {sys_dict_detailUpdateArgs} args - Arguments to update one Sys_dict_detail.
     * @example
     * // Update one Sys_dict_detail
     * const sys_dict_detail = await prisma.sys_dict_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_dict_detailUpdateArgs>(args: SelectSubset<T, sys_dict_detailUpdateArgs<ExtArgs>>): Prisma__sys_dict_detailClient<$Result.GetResult<Prisma.$sys_dict_detailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_dict_details.
     * @param {sys_dict_detailDeleteManyArgs} args - Arguments to filter Sys_dict_details to delete.
     * @example
     * // Delete a few Sys_dict_details
     * const { count } = await prisma.sys_dict_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_dict_detailDeleteManyArgs>(args?: SelectSubset<T, sys_dict_detailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_dict_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_dict_details
     * const sys_dict_detail = await prisma.sys_dict_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_dict_detailUpdateManyArgs>(args: SelectSubset<T, sys_dict_detailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_dict_detail.
     * @param {sys_dict_detailUpsertArgs} args - Arguments to update or create a Sys_dict_detail.
     * @example
     * // Update or create a Sys_dict_detail
     * const sys_dict_detail = await prisma.sys_dict_detail.upsert({
     *   create: {
     *     // ... data to create a Sys_dict_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_dict_detail we want to update
     *   }
     * })
     */
    upsert<T extends sys_dict_detailUpsertArgs>(args: SelectSubset<T, sys_dict_detailUpsertArgs<ExtArgs>>): Prisma__sys_dict_detailClient<$Result.GetResult<Prisma.$sys_dict_detailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_dict_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_detailCountArgs} args - Arguments to filter Sys_dict_details to count.
     * @example
     * // Count the number of Sys_dict_details
     * const count = await prisma.sys_dict_detail.count({
     *   where: {
     *     // ... the filter for the Sys_dict_details we want to count
     *   }
     * })
    **/
    count<T extends sys_dict_detailCountArgs>(
      args?: Subset<T, sys_dict_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_dict_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_dict_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_dict_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_dict_detailAggregateArgs>(args: Subset<T, Sys_dict_detailAggregateArgs>): Prisma.PrismaPromise<GetSys_dict_detailAggregateType<T>>

    /**
     * Group by Sys_dict_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_dict_detailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_dict_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_dict_detailGroupByArgs['orderBy'] }
        : { orderBy?: sys_dict_detailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_dict_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_dict_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_dict_detail model
   */
  readonly fields: sys_dict_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_dict_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_dict_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dict<T extends sys_dict_detail$dictArgs<ExtArgs> = {}>(args?: Subset<T, sys_dict_detail$dictArgs<ExtArgs>>): Prisma__sys_dictClient<$Result.GetResult<Prisma.$sys_dictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_dict_detail model
   */
  interface sys_dict_detailFieldRefs {
    readonly id: FieldRef<"sys_dict_detail", 'String'>
    readonly dict_id: FieldRef<"sys_dict_detail", 'String'>
    readonly label: FieldRef<"sys_dict_detail", 'String'>
    readonly code: FieldRef<"sys_dict_detail", 'String'>
    readonly sort: FieldRef<"sys_dict_detail", 'Int'>
    readonly create_by: FieldRef<"sys_dict_detail", 'String'>
    readonly update_by: FieldRef<"sys_dict_detail", 'String'>
    readonly create_time: FieldRef<"sys_dict_detail", 'DateTime'>
    readonly update_time: FieldRef<"sys_dict_detail", 'DateTime'>
    readonly deleted: FieldRef<"sys_dict_detail", 'Boolean'>
    readonly tab: FieldRef<"sys_dict_detail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sys_dict_detail findUnique
   */
  export type sys_dict_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
    /**
     * Filter, which sys_dict_detail to fetch.
     */
    where: sys_dict_detailWhereUniqueInput
  }

  /**
   * sys_dict_detail findUniqueOrThrow
   */
  export type sys_dict_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
    /**
     * Filter, which sys_dict_detail to fetch.
     */
    where: sys_dict_detailWhereUniqueInput
  }

  /**
   * sys_dict_detail findFirst
   */
  export type sys_dict_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
    /**
     * Filter, which sys_dict_detail to fetch.
     */
    where?: sys_dict_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dict_details to fetch.
     */
    orderBy?: sys_dict_detailOrderByWithRelationInput | sys_dict_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_dict_details.
     */
    cursor?: sys_dict_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dict_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dict_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_dict_details.
     */
    distinct?: Sys_dict_detailScalarFieldEnum | Sys_dict_detailScalarFieldEnum[]
  }

  /**
   * sys_dict_detail findFirstOrThrow
   */
  export type sys_dict_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
    /**
     * Filter, which sys_dict_detail to fetch.
     */
    where?: sys_dict_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dict_details to fetch.
     */
    orderBy?: sys_dict_detailOrderByWithRelationInput | sys_dict_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_dict_details.
     */
    cursor?: sys_dict_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dict_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dict_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_dict_details.
     */
    distinct?: Sys_dict_detailScalarFieldEnum | Sys_dict_detailScalarFieldEnum[]
  }

  /**
   * sys_dict_detail findMany
   */
  export type sys_dict_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
    /**
     * Filter, which sys_dict_details to fetch.
     */
    where?: sys_dict_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_dict_details to fetch.
     */
    orderBy?: sys_dict_detailOrderByWithRelationInput | sys_dict_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_dict_details.
     */
    cursor?: sys_dict_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_dict_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_dict_details.
     */
    skip?: number
    distinct?: Sys_dict_detailScalarFieldEnum | Sys_dict_detailScalarFieldEnum[]
  }

  /**
   * sys_dict_detail create
   */
  export type sys_dict_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a sys_dict_detail.
     */
    data: XOR<sys_dict_detailCreateInput, sys_dict_detailUncheckedCreateInput>
  }

  /**
   * sys_dict_detail createMany
   */
  export type sys_dict_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_dict_details.
     */
    data: sys_dict_detailCreateManyInput | sys_dict_detailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_dict_detail update
   */
  export type sys_dict_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a sys_dict_detail.
     */
    data: XOR<sys_dict_detailUpdateInput, sys_dict_detailUncheckedUpdateInput>
    /**
     * Choose, which sys_dict_detail to update.
     */
    where: sys_dict_detailWhereUniqueInput
  }

  /**
   * sys_dict_detail updateMany
   */
  export type sys_dict_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_dict_details.
     */
    data: XOR<sys_dict_detailUpdateManyMutationInput, sys_dict_detailUncheckedUpdateManyInput>
    /**
     * Filter which sys_dict_details to update
     */
    where?: sys_dict_detailWhereInput
    /**
     * Limit how many sys_dict_details to update.
     */
    limit?: number
  }

  /**
   * sys_dict_detail upsert
   */
  export type sys_dict_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the sys_dict_detail to update in case it exists.
     */
    where: sys_dict_detailWhereUniqueInput
    /**
     * In case the sys_dict_detail found by the `where` argument doesn't exist, create a new sys_dict_detail with this data.
     */
    create: XOR<sys_dict_detailCreateInput, sys_dict_detailUncheckedCreateInput>
    /**
     * In case the sys_dict_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_dict_detailUpdateInput, sys_dict_detailUncheckedUpdateInput>
  }

  /**
   * sys_dict_detail delete
   */
  export type sys_dict_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
    /**
     * Filter which sys_dict_detail to delete.
     */
    where: sys_dict_detailWhereUniqueInput
  }

  /**
   * sys_dict_detail deleteMany
   */
  export type sys_dict_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_dict_details to delete
     */
    where?: sys_dict_detailWhereInput
    /**
     * Limit how many sys_dict_details to delete.
     */
    limit?: number
  }

  /**
   * sys_dict_detail.dict
   */
  export type sys_dict_detail$dictArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict
     */
    select?: sys_dictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict
     */
    omit?: sys_dictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dictInclude<ExtArgs> | null
    where?: sys_dictWhereInput
  }

  /**
   * sys_dict_detail without action
   */
  export type sys_dict_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_dict_detail
     */
    select?: sys_dict_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_dict_detail
     */
    omit?: sys_dict_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sys_dict_detailInclude<ExtArgs> | null
  }


  /**
   * Model sys_file
   */

  export type AggregateSys_file = {
    _count: Sys_fileCountAggregateOutputType | null
    _avg: Sys_fileAvgAggregateOutputType | null
    _sum: Sys_fileSumAggregateOutputType | null
    _min: Sys_fileMinAggregateOutputType | null
    _max: Sys_fileMaxAggregateOutputType | null
  }

  export type Sys_fileAvgAggregateOutputType = {
    sort: number | null
  }

  export type Sys_fileSumAggregateOutputType = {
    sort: number | null
  }

  export type Sys_fileMinAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    md5: string | null
    sort: number | null
    create_by: string | null
    create_time: Date | null
    space_id: string | null
  }

  export type Sys_fileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    md5: string | null
    sort: number | null
    create_by: string | null
    create_time: Date | null
    space_id: string | null
  }

  export type Sys_fileCountAggregateOutputType = {
    id: number
    name: number
    path: number
    md5: number
    sort: number
    create_by: number
    create_time: number
    space_id: number
    _all: number
  }


  export type Sys_fileAvgAggregateInputType = {
    sort?: true
  }

  export type Sys_fileSumAggregateInputType = {
    sort?: true
  }

  export type Sys_fileMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    md5?: true
    sort?: true
    create_by?: true
    create_time?: true
    space_id?: true
  }

  export type Sys_fileMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    md5?: true
    sort?: true
    create_by?: true
    create_time?: true
    space_id?: true
  }

  export type Sys_fileCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    md5?: true
    sort?: true
    create_by?: true
    create_time?: true
    space_id?: true
    _all?: true
  }

  export type Sys_fileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_file to aggregate.
     */
    where?: sys_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_files to fetch.
     */
    orderBy?: sys_fileOrderByWithRelationInput | sys_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sys_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sys_files
    **/
    _count?: true | Sys_fileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sys_fileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sys_fileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sys_fileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sys_fileMaxAggregateInputType
  }

  export type GetSys_fileAggregateType<T extends Sys_fileAggregateArgs> = {
        [P in keyof T & keyof AggregateSys_file]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSys_file[P]>
      : GetScalarType<T[P], AggregateSys_file[P]>
  }




  export type sys_fileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sys_fileWhereInput
    orderBy?: sys_fileOrderByWithAggregationInput | sys_fileOrderByWithAggregationInput[]
    by: Sys_fileScalarFieldEnum[] | Sys_fileScalarFieldEnum
    having?: sys_fileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sys_fileCountAggregateInputType | true
    _avg?: Sys_fileAvgAggregateInputType
    _sum?: Sys_fileSumAggregateInputType
    _min?: Sys_fileMinAggregateInputType
    _max?: Sys_fileMaxAggregateInputType
  }

  export type Sys_fileGroupByOutputType = {
    id: string
    name: string
    path: string
    md5: string
    sort: number
    create_by: string | null
    create_time: Date | null
    space_id: string | null
    _count: Sys_fileCountAggregateOutputType | null
    _avg: Sys_fileAvgAggregateOutputType | null
    _sum: Sys_fileSumAggregateOutputType | null
    _min: Sys_fileMinAggregateOutputType | null
    _max: Sys_fileMaxAggregateOutputType | null
  }

  type GetSys_fileGroupByPayload<T extends sys_fileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sys_fileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sys_fileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sys_fileGroupByOutputType[P]>
            : GetScalarType<T[P], Sys_fileGroupByOutputType[P]>
        }
      >
    >


  export type sys_fileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    md5?: boolean
    sort?: boolean
    create_by?: boolean
    create_time?: boolean
    space_id?: boolean
  }, ExtArgs["result"]["sys_file"]>



  export type sys_fileSelectScalar = {
    id?: boolean
    name?: boolean
    path?: boolean
    md5?: boolean
    sort?: boolean
    create_by?: boolean
    create_time?: boolean
    space_id?: boolean
  }

  export type sys_fileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "path" | "md5" | "sort" | "create_by" | "create_time" | "space_id", ExtArgs["result"]["sys_file"]>

  export type $sys_filePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sys_file"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * ID
       */
      id: string
      /**
       * 文件名称
       */
      name: string
      /**
       * 文件存放路径
       */
      path: string
      /**
       * 文件md5
       */
      md5: string
      /**
       * 排序
       */
      sort: number
      /**
       * 创建记录操作人用户ID
       */
      create_by: string | null
      /**
       * 创建时间
       */
      create_time: Date | null
      /**
       * 空间id
       */
      space_id: string | null
    }, ExtArgs["result"]["sys_file"]>
    composites: {}
  }

  type sys_fileGetPayload<S extends boolean | null | undefined | sys_fileDefaultArgs> = $Result.GetResult<Prisma.$sys_filePayload, S>

  type sys_fileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sys_fileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sys_fileCountAggregateInputType | true
    }

  export interface sys_fileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sys_file'], meta: { name: 'sys_file' } }
    /**
     * Find zero or one Sys_file that matches the filter.
     * @param {sys_fileFindUniqueArgs} args - Arguments to find a Sys_file
     * @example
     * // Get one Sys_file
     * const sys_file = await prisma.sys_file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sys_fileFindUniqueArgs>(args: SelectSubset<T, sys_fileFindUniqueArgs<ExtArgs>>): Prisma__sys_fileClient<$Result.GetResult<Prisma.$sys_filePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sys_file that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sys_fileFindUniqueOrThrowArgs} args - Arguments to find a Sys_file
     * @example
     * // Get one Sys_file
     * const sys_file = await prisma.sys_file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sys_fileFindUniqueOrThrowArgs>(args: SelectSubset<T, sys_fileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sys_fileClient<$Result.GetResult<Prisma.$sys_filePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_file that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_fileFindFirstArgs} args - Arguments to find a Sys_file
     * @example
     * // Get one Sys_file
     * const sys_file = await prisma.sys_file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sys_fileFindFirstArgs>(args?: SelectSubset<T, sys_fileFindFirstArgs<ExtArgs>>): Prisma__sys_fileClient<$Result.GetResult<Prisma.$sys_filePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sys_file that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_fileFindFirstOrThrowArgs} args - Arguments to find a Sys_file
     * @example
     * // Get one Sys_file
     * const sys_file = await prisma.sys_file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sys_fileFindFirstOrThrowArgs>(args?: SelectSubset<T, sys_fileFindFirstOrThrowArgs<ExtArgs>>): Prisma__sys_fileClient<$Result.GetResult<Prisma.$sys_filePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sys_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_fileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sys_files
     * const sys_files = await prisma.sys_file.findMany()
     * 
     * // Get first 10 Sys_files
     * const sys_files = await prisma.sys_file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sys_fileWithIdOnly = await prisma.sys_file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sys_fileFindManyArgs>(args?: SelectSubset<T, sys_fileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sys_filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sys_file.
     * @param {sys_fileCreateArgs} args - Arguments to create a Sys_file.
     * @example
     * // Create one Sys_file
     * const Sys_file = await prisma.sys_file.create({
     *   data: {
     *     // ... data to create a Sys_file
     *   }
     * })
     * 
     */
    create<T extends sys_fileCreateArgs>(args: SelectSubset<T, sys_fileCreateArgs<ExtArgs>>): Prisma__sys_fileClient<$Result.GetResult<Prisma.$sys_filePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sys_files.
     * @param {sys_fileCreateManyArgs} args - Arguments to create many Sys_files.
     * @example
     * // Create many Sys_files
     * const sys_file = await prisma.sys_file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sys_fileCreateManyArgs>(args?: SelectSubset<T, sys_fileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sys_file.
     * @param {sys_fileDeleteArgs} args - Arguments to delete one Sys_file.
     * @example
     * // Delete one Sys_file
     * const Sys_file = await prisma.sys_file.delete({
     *   where: {
     *     // ... filter to delete one Sys_file
     *   }
     * })
     * 
     */
    delete<T extends sys_fileDeleteArgs>(args: SelectSubset<T, sys_fileDeleteArgs<ExtArgs>>): Prisma__sys_fileClient<$Result.GetResult<Prisma.$sys_filePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sys_file.
     * @param {sys_fileUpdateArgs} args - Arguments to update one Sys_file.
     * @example
     * // Update one Sys_file
     * const sys_file = await prisma.sys_file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sys_fileUpdateArgs>(args: SelectSubset<T, sys_fileUpdateArgs<ExtArgs>>): Prisma__sys_fileClient<$Result.GetResult<Prisma.$sys_filePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sys_files.
     * @param {sys_fileDeleteManyArgs} args - Arguments to filter Sys_files to delete.
     * @example
     * // Delete a few Sys_files
     * const { count } = await prisma.sys_file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sys_fileDeleteManyArgs>(args?: SelectSubset<T, sys_fileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sys_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_fileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sys_files
     * const sys_file = await prisma.sys_file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sys_fileUpdateManyArgs>(args: SelectSubset<T, sys_fileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sys_file.
     * @param {sys_fileUpsertArgs} args - Arguments to update or create a Sys_file.
     * @example
     * // Update or create a Sys_file
     * const sys_file = await prisma.sys_file.upsert({
     *   create: {
     *     // ... data to create a Sys_file
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sys_file we want to update
     *   }
     * })
     */
    upsert<T extends sys_fileUpsertArgs>(args: SelectSubset<T, sys_fileUpsertArgs<ExtArgs>>): Prisma__sys_fileClient<$Result.GetResult<Prisma.$sys_filePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sys_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_fileCountArgs} args - Arguments to filter Sys_files to count.
     * @example
     * // Count the number of Sys_files
     * const count = await prisma.sys_file.count({
     *   where: {
     *     // ... the filter for the Sys_files we want to count
     *   }
     * })
    **/
    count<T extends sys_fileCountArgs>(
      args?: Subset<T, sys_fileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sys_fileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sys_file.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sys_fileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sys_fileAggregateArgs>(args: Subset<T, Sys_fileAggregateArgs>): Prisma.PrismaPromise<GetSys_fileAggregateType<T>>

    /**
     * Group by Sys_file.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sys_fileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sys_fileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sys_fileGroupByArgs['orderBy'] }
        : { orderBy?: sys_fileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sys_fileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSys_fileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sys_file model
   */
  readonly fields: sys_fileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sys_file.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sys_fileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sys_file model
   */
  interface sys_fileFieldRefs {
    readonly id: FieldRef<"sys_file", 'String'>
    readonly name: FieldRef<"sys_file", 'String'>
    readonly path: FieldRef<"sys_file", 'String'>
    readonly md5: FieldRef<"sys_file", 'String'>
    readonly sort: FieldRef<"sys_file", 'Int'>
    readonly create_by: FieldRef<"sys_file", 'String'>
    readonly create_time: FieldRef<"sys_file", 'DateTime'>
    readonly space_id: FieldRef<"sys_file", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sys_file findUnique
   */
  export type sys_fileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_file
     */
    select?: sys_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_file
     */
    omit?: sys_fileOmit<ExtArgs> | null
    /**
     * Filter, which sys_file to fetch.
     */
    where: sys_fileWhereUniqueInput
  }

  /**
   * sys_file findUniqueOrThrow
   */
  export type sys_fileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_file
     */
    select?: sys_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_file
     */
    omit?: sys_fileOmit<ExtArgs> | null
    /**
     * Filter, which sys_file to fetch.
     */
    where: sys_fileWhereUniqueInput
  }

  /**
   * sys_file findFirst
   */
  export type sys_fileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_file
     */
    select?: sys_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_file
     */
    omit?: sys_fileOmit<ExtArgs> | null
    /**
     * Filter, which sys_file to fetch.
     */
    where?: sys_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_files to fetch.
     */
    orderBy?: sys_fileOrderByWithRelationInput | sys_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_files.
     */
    cursor?: sys_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_files.
     */
    distinct?: Sys_fileScalarFieldEnum | Sys_fileScalarFieldEnum[]
  }

  /**
   * sys_file findFirstOrThrow
   */
  export type sys_fileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_file
     */
    select?: sys_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_file
     */
    omit?: sys_fileOmit<ExtArgs> | null
    /**
     * Filter, which sys_file to fetch.
     */
    where?: sys_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_files to fetch.
     */
    orderBy?: sys_fileOrderByWithRelationInput | sys_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sys_files.
     */
    cursor?: sys_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sys_files.
     */
    distinct?: Sys_fileScalarFieldEnum | Sys_fileScalarFieldEnum[]
  }

  /**
   * sys_file findMany
   */
  export type sys_fileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_file
     */
    select?: sys_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_file
     */
    omit?: sys_fileOmit<ExtArgs> | null
    /**
     * Filter, which sys_files to fetch.
     */
    where?: sys_fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sys_files to fetch.
     */
    orderBy?: sys_fileOrderByWithRelationInput | sys_fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sys_files.
     */
    cursor?: sys_fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sys_files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sys_files.
     */
    skip?: number
    distinct?: Sys_fileScalarFieldEnum | Sys_fileScalarFieldEnum[]
  }

  /**
   * sys_file create
   */
  export type sys_fileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_file
     */
    select?: sys_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_file
     */
    omit?: sys_fileOmit<ExtArgs> | null
    /**
     * The data needed to create a sys_file.
     */
    data: XOR<sys_fileCreateInput, sys_fileUncheckedCreateInput>
  }

  /**
   * sys_file createMany
   */
  export type sys_fileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sys_files.
     */
    data: sys_fileCreateManyInput | sys_fileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sys_file update
   */
  export type sys_fileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_file
     */
    select?: sys_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_file
     */
    omit?: sys_fileOmit<ExtArgs> | null
    /**
     * The data needed to update a sys_file.
     */
    data: XOR<sys_fileUpdateInput, sys_fileUncheckedUpdateInput>
    /**
     * Choose, which sys_file to update.
     */
    where: sys_fileWhereUniqueInput
  }

  /**
   * sys_file updateMany
   */
  export type sys_fileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sys_files.
     */
    data: XOR<sys_fileUpdateManyMutationInput, sys_fileUncheckedUpdateManyInput>
    /**
     * Filter which sys_files to update
     */
    where?: sys_fileWhereInput
    /**
     * Limit how many sys_files to update.
     */
    limit?: number
  }

  /**
   * sys_file upsert
   */
  export type sys_fileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_file
     */
    select?: sys_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_file
     */
    omit?: sys_fileOmit<ExtArgs> | null
    /**
     * The filter to search for the sys_file to update in case it exists.
     */
    where: sys_fileWhereUniqueInput
    /**
     * In case the sys_file found by the `where` argument doesn't exist, create a new sys_file with this data.
     */
    create: XOR<sys_fileCreateInput, sys_fileUncheckedCreateInput>
    /**
     * In case the sys_file was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sys_fileUpdateInput, sys_fileUncheckedUpdateInput>
  }

  /**
   * sys_file delete
   */
  export type sys_fileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_file
     */
    select?: sys_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_file
     */
    omit?: sys_fileOmit<ExtArgs> | null
    /**
     * Filter which sys_file to delete.
     */
    where: sys_fileWhereUniqueInput
  }

  /**
   * sys_file deleteMany
   */
  export type sys_fileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sys_files to delete
     */
    where?: sys_fileWhereInput
    /**
     * Limit how many sys_files to delete.
     */
    limit?: number
  }

  /**
   * sys_file without action
   */
  export type sys_fileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sys_file
     */
    select?: sys_fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sys_file
     */
    omit?: sys_fileOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Sys_userScalarFieldEnum: {
    id: 'id',
    create_time: 'create_time',
    update_time: 'update_time',
    org_id: 'org_id',
    org_code: 'org_code',
    dept_id: 'dept_id',
    username: 'username',
    password: 'password',
    nickname: 'nickname',
    real_name: 'real_name',
    email: 'email',
    phone: 'phone',
    job_no: 'job_no',
    status: 'status',
    hidden: 'hidden',
    admin_flag: 'admin_flag',
    avatar: 'avatar',
    client_id: 'client_id',
    sort: 'sort',
    user_function_codes: 'user_function_codes',
    deleted: 'deleted'
  };

  export type Sys_userScalarFieldEnum = (typeof Sys_userScalarFieldEnum)[keyof typeof Sys_userScalarFieldEnum]


  export const Sys_logScalarFieldEnum: {
    id: 'id',
    request_unique: 'request_unique',
    description: 'description',
    log_type: 'log_type',
    method: 'method',
    params: 'params',
    request_ip: 'request_ip',
    time: 'time',
    user_id: 'user_id',
    user_name: 'user_name',
    address: 'address',
    exception_detail: 'exception_detail',
    create_time: 'create_time'
  };

  export type Sys_logScalarFieldEnum = (typeof Sys_logScalarFieldEnum)[keyof typeof Sys_logScalarFieldEnum]


  export const Sys_menuScalarFieldEnum: {
    id: 'id',
    create_time: 'create_time',
    update_time: 'update_time',
    create_by: 'create_by',
    update_by: 'update_by',
    pid: 'pid',
    name: 'name',
    url: 'url',
    perms: 'perms',
    type: 'type',
    mode: 'mode',
    icon: 'icon',
    color: 'color',
    routeUrl: 'routeUrl',
    breadCrumb: 'breadCrumb',
    componentName: 'componentName',
    componentPath: 'componentPath',
    orderNum: 'orderNum',
    display: 'display',
    deleted: 'deleted'
  };

  export type Sys_menuScalarFieldEnum = (typeof Sys_menuScalarFieldEnum)[keyof typeof Sys_menuScalarFieldEnum]


  export const Sys_configScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    describe: 'describe',
    value: 'value',
    sort: 'sort',
    enabled: 'enabled',
    cache: 'cache',
    update_by: 'update_by',
    update_time: 'update_time',
    create_by: 'create_by',
    create_time: 'create_time',
    deleted: 'deleted'
  };

  export type Sys_configScalarFieldEnum = (typeof Sys_configScalarFieldEnum)[keyof typeof Sys_configScalarFieldEnum]


  export const Sys_organizationScalarFieldEnum: {
    id: 'id',
    pid: 'pid',
    code: 'code',
    name: 'name',
    alias: 'alias',
    description: 'description',
    full_path: 'full_path',
    sort: 'sort',
    create_by: 'create_by',
    update_by: 'update_by',
    create_time: 'create_time',
    update_time: 'update_time',
    deleted: 'deleted',
    lng: 'lng',
    lat: 'lat',
    car_sys_org_id: 'car_sys_org_id',
    car_clear_sys_org_id: 'car_clear_sys_org_id'
  };

  export type Sys_organizationScalarFieldEnum = (typeof Sys_organizationScalarFieldEnum)[keyof typeof Sys_organizationScalarFieldEnum]


  export const Sys_deptScalarFieldEnum: {
    id: 'id',
    pid: 'pid',
    parent_link_ids: 'parent_link_ids',
    org_code: 'org_code',
    org_id: 'org_id',
    name: 'name',
    display: 'display',
    sort: 'sort',
    create_by: 'create_by',
    update_by: 'update_by',
    create_time: 'create_time',
    update_time: 'update_time',
    deleted: 'deleted'
  };

  export type Sys_deptScalarFieldEnum = (typeof Sys_deptScalarFieldEnum)[keyof typeof Sys_deptScalarFieldEnum]


  export const Sys_roleScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    org_code: 'org_code',
    name: 'name',
    description: 'description',
    data_scope_type: 'data_scope_type',
    create_by: 'create_by',
    update_by: 'update_by',
    create_time: 'create_time',
    update_time: 'update_time',
    deleted: 'deleted'
  };

  export type Sys_roleScalarFieldEnum = (typeof Sys_roleScalarFieldEnum)[keyof typeof Sys_roleScalarFieldEnum]


  export const Sys_role_menuScalarFieldEnum: {
    id: 'id',
    role_id: 'role_id',
    menu_id: 'menu_id',
    create_by: 'create_by',
    create_time: 'create_time',
    deleted: 'deleted'
  };

  export type Sys_role_menuScalarFieldEnum = (typeof Sys_role_menuScalarFieldEnum)[keyof typeof Sys_role_menuScalarFieldEnum]


  export const Sys_role_userScalarFieldEnum: {
    id: 'id',
    role_id: 'role_id',
    user_id: 'user_id',
    create_by: 'create_by',
    create_time: 'create_time',
    deleted: 'deleted'
  };

  export type Sys_role_userScalarFieldEnum = (typeof Sys_role_userScalarFieldEnum)[keyof typeof Sys_role_userScalarFieldEnum]


  export const Sys_dictScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    create_by: 'create_by',
    update_by: 'update_by',
    create_time: 'create_time',
    update_time: 'update_time',
    deleted: 'deleted'
  };

  export type Sys_dictScalarFieldEnum = (typeof Sys_dictScalarFieldEnum)[keyof typeof Sys_dictScalarFieldEnum]


  export const Sys_dict_detailScalarFieldEnum: {
    id: 'id',
    dict_id: 'dict_id',
    label: 'label',
    code: 'code',
    sort: 'sort',
    create_by: 'create_by',
    update_by: 'update_by',
    create_time: 'create_time',
    update_time: 'update_time',
    deleted: 'deleted',
    tab: 'tab'
  };

  export type Sys_dict_detailScalarFieldEnum = (typeof Sys_dict_detailScalarFieldEnum)[keyof typeof Sys_dict_detailScalarFieldEnum]


  export const Sys_fileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    md5: 'md5',
    sort: 'sort',
    create_by: 'create_by',
    create_time: 'create_time',
    space_id: 'space_id'
  };

  export type Sys_fileScalarFieldEnum = (typeof Sys_fileScalarFieldEnum)[keyof typeof Sys_fileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const sys_userOrderByRelevanceFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    org_code: 'org_code',
    dept_id: 'dept_id',
    username: 'username',
    password: 'password',
    nickname: 'nickname',
    real_name: 'real_name',
    email: 'email',
    phone: 'phone',
    job_no: 'job_no',
    avatar: 'avatar',
    client_id: 'client_id',
    user_function_codes: 'user_function_codes'
  };

  export type sys_userOrderByRelevanceFieldEnum = (typeof sys_userOrderByRelevanceFieldEnum)[keyof typeof sys_userOrderByRelevanceFieldEnum]


  export const sys_logOrderByRelevanceFieldEnum: {
    id: 'id',
    request_unique: 'request_unique',
    description: 'description',
    method: 'method',
    params: 'params',
    request_ip: 'request_ip',
    user_id: 'user_id',
    user_name: 'user_name',
    address: 'address',
    exception_detail: 'exception_detail'
  };

  export type sys_logOrderByRelevanceFieldEnum = (typeof sys_logOrderByRelevanceFieldEnum)[keyof typeof sys_logOrderByRelevanceFieldEnum]


  export const sys_menuOrderByRelevanceFieldEnum: {
    id: 'id',
    create_by: 'create_by',
    update_by: 'update_by',
    pid: 'pid',
    name: 'name',
    url: 'url',
    perms: 'perms',
    mode: 'mode',
    icon: 'icon',
    color: 'color',
    routeUrl: 'routeUrl',
    breadCrumb: 'breadCrumb',
    componentName: 'componentName',
    componentPath: 'componentPath'
  };

  export type sys_menuOrderByRelevanceFieldEnum = (typeof sys_menuOrderByRelevanceFieldEnum)[keyof typeof sys_menuOrderByRelevanceFieldEnum]


  export const sys_configOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    describe: 'describe',
    value: 'value',
    update_by: 'update_by',
    create_by: 'create_by'
  };

  export type sys_configOrderByRelevanceFieldEnum = (typeof sys_configOrderByRelevanceFieldEnum)[keyof typeof sys_configOrderByRelevanceFieldEnum]


  export const sys_organizationOrderByRelevanceFieldEnum: {
    id: 'id',
    pid: 'pid',
    code: 'code',
    name: 'name',
    alias: 'alias',
    description: 'description',
    full_path: 'full_path',
    create_by: 'create_by',
    update_by: 'update_by',
    car_sys_org_id: 'car_sys_org_id',
    car_clear_sys_org_id: 'car_clear_sys_org_id'
  };

  export type sys_organizationOrderByRelevanceFieldEnum = (typeof sys_organizationOrderByRelevanceFieldEnum)[keyof typeof sys_organizationOrderByRelevanceFieldEnum]


  export const sys_deptOrderByRelevanceFieldEnum: {
    id: 'id',
    pid: 'pid',
    parent_link_ids: 'parent_link_ids',
    org_code: 'org_code',
    org_id: 'org_id',
    name: 'name',
    create_by: 'create_by',
    update_by: 'update_by'
  };

  export type sys_deptOrderByRelevanceFieldEnum = (typeof sys_deptOrderByRelevanceFieldEnum)[keyof typeof sys_deptOrderByRelevanceFieldEnum]


  export const sys_roleOrderByRelevanceFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    org_code: 'org_code',
    name: 'name',
    description: 'description',
    create_by: 'create_by',
    update_by: 'update_by'
  };

  export type sys_roleOrderByRelevanceFieldEnum = (typeof sys_roleOrderByRelevanceFieldEnum)[keyof typeof sys_roleOrderByRelevanceFieldEnum]


  export const sys_role_menuOrderByRelevanceFieldEnum: {
    id: 'id',
    role_id: 'role_id',
    menu_id: 'menu_id',
    create_by: 'create_by'
  };

  export type sys_role_menuOrderByRelevanceFieldEnum = (typeof sys_role_menuOrderByRelevanceFieldEnum)[keyof typeof sys_role_menuOrderByRelevanceFieldEnum]


  export const sys_role_userOrderByRelevanceFieldEnum: {
    id: 'id',
    role_id: 'role_id',
    user_id: 'user_id',
    create_by: 'create_by'
  };

  export type sys_role_userOrderByRelevanceFieldEnum = (typeof sys_role_userOrderByRelevanceFieldEnum)[keyof typeof sys_role_userOrderByRelevanceFieldEnum]


  export const sys_dictOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    create_by: 'create_by',
    update_by: 'update_by'
  };

  export type sys_dictOrderByRelevanceFieldEnum = (typeof sys_dictOrderByRelevanceFieldEnum)[keyof typeof sys_dictOrderByRelevanceFieldEnum]


  export const sys_dict_detailOrderByRelevanceFieldEnum: {
    id: 'id',
    dict_id: 'dict_id',
    label: 'label',
    code: 'code',
    create_by: 'create_by',
    update_by: 'update_by',
    tab: 'tab'
  };

  export type sys_dict_detailOrderByRelevanceFieldEnum = (typeof sys_dict_detailOrderByRelevanceFieldEnum)[keyof typeof sys_dict_detailOrderByRelevanceFieldEnum]


  export const sys_fileOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    md5: 'md5',
    create_by: 'create_by',
    space_id: 'space_id'
  };

  export type sys_fileOrderByRelevanceFieldEnum = (typeof sys_fileOrderByRelevanceFieldEnum)[keyof typeof sys_fileOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'log_type'
   */
  export type Enumlog_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'log_type'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'config_type'
   */
  export type Enumconfig_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'config_type'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'data_scope_type'
   */
  export type Enumdata_scope_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'data_scope_type'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type sys_userWhereInput = {
    AND?: sys_userWhereInput | sys_userWhereInput[]
    OR?: sys_userWhereInput[]
    NOT?: sys_userWhereInput | sys_userWhereInput[]
    id?: StringFilter<"sys_user"> | string
    create_time?: DateTimeFilter<"sys_user"> | Date | string
    update_time?: DateTimeFilter<"sys_user"> | Date | string
    org_id?: StringNullableFilter<"sys_user"> | string | null
    org_code?: StringNullableFilter<"sys_user"> | string | null
    dept_id?: StringNullableFilter<"sys_user"> | string | null
    username?: StringFilter<"sys_user"> | string
    password?: StringNullableFilter<"sys_user"> | string | null
    nickname?: StringNullableFilter<"sys_user"> | string | null
    real_name?: StringNullableFilter<"sys_user"> | string | null
    email?: StringNullableFilter<"sys_user"> | string | null
    phone?: StringNullableFilter<"sys_user"> | string | null
    job_no?: StringNullableFilter<"sys_user"> | string | null
    status?: IntFilter<"sys_user"> | number
    hidden?: BoolFilter<"sys_user"> | boolean
    admin_flag?: BoolFilter<"sys_user"> | boolean
    avatar?: StringNullableFilter<"sys_user"> | string | null
    client_id?: StringNullableFilter<"sys_user"> | string | null
    sort?: IntFilter<"sys_user"> | number
    user_function_codes?: StringNullableFilter<"sys_user"> | string | null
    deleted?: BoolFilter<"sys_user"> | boolean
    organization?: XOR<Sys_organizationNullableScalarRelationFilter, sys_organizationWhereInput> | null
    department?: XOR<Sys_deptNullableScalarRelationFilter, sys_deptWhereInput> | null
    sys_log?: Sys_logListRelationFilter
    role_users?: Sys_role_userListRelationFilter
  }

  export type sys_userOrderByWithRelationInput = {
    id?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    org_id?: SortOrderInput | SortOrder
    org_code?: SortOrderInput | SortOrder
    dept_id?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    real_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    job_no?: SortOrderInput | SortOrder
    status?: SortOrder
    hidden?: SortOrder
    admin_flag?: SortOrder
    avatar?: SortOrderInput | SortOrder
    client_id?: SortOrderInput | SortOrder
    sort?: SortOrder
    user_function_codes?: SortOrderInput | SortOrder
    deleted?: SortOrder
    organization?: sys_organizationOrderByWithRelationInput
    department?: sys_deptOrderByWithRelationInput
    sys_log?: sys_logOrderByRelationAggregateInput
    role_users?: sys_role_userOrderByRelationAggregateInput
    _relevance?: sys_userOrderByRelevanceInput
  }

  export type sys_userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: sys_userWhereInput | sys_userWhereInput[]
    OR?: sys_userWhereInput[]
    NOT?: sys_userWhereInput | sys_userWhereInput[]
    create_time?: DateTimeFilter<"sys_user"> | Date | string
    update_time?: DateTimeFilter<"sys_user"> | Date | string
    org_id?: StringNullableFilter<"sys_user"> | string | null
    org_code?: StringNullableFilter<"sys_user"> | string | null
    dept_id?: StringNullableFilter<"sys_user"> | string | null
    password?: StringNullableFilter<"sys_user"> | string | null
    nickname?: StringNullableFilter<"sys_user"> | string | null
    real_name?: StringNullableFilter<"sys_user"> | string | null
    email?: StringNullableFilter<"sys_user"> | string | null
    phone?: StringNullableFilter<"sys_user"> | string | null
    job_no?: StringNullableFilter<"sys_user"> | string | null
    status?: IntFilter<"sys_user"> | number
    hidden?: BoolFilter<"sys_user"> | boolean
    admin_flag?: BoolFilter<"sys_user"> | boolean
    avatar?: StringNullableFilter<"sys_user"> | string | null
    client_id?: StringNullableFilter<"sys_user"> | string | null
    sort?: IntFilter<"sys_user"> | number
    user_function_codes?: StringNullableFilter<"sys_user"> | string | null
    deleted?: BoolFilter<"sys_user"> | boolean
    organization?: XOR<Sys_organizationNullableScalarRelationFilter, sys_organizationWhereInput> | null
    department?: XOR<Sys_deptNullableScalarRelationFilter, sys_deptWhereInput> | null
    sys_log?: Sys_logListRelationFilter
    role_users?: Sys_role_userListRelationFilter
  }, "id" | "username">

  export type sys_userOrderByWithAggregationInput = {
    id?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    org_id?: SortOrderInput | SortOrder
    org_code?: SortOrderInput | SortOrder
    dept_id?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    real_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    job_no?: SortOrderInput | SortOrder
    status?: SortOrder
    hidden?: SortOrder
    admin_flag?: SortOrder
    avatar?: SortOrderInput | SortOrder
    client_id?: SortOrderInput | SortOrder
    sort?: SortOrder
    user_function_codes?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: sys_userCountOrderByAggregateInput
    _avg?: sys_userAvgOrderByAggregateInput
    _max?: sys_userMaxOrderByAggregateInput
    _min?: sys_userMinOrderByAggregateInput
    _sum?: sys_userSumOrderByAggregateInput
  }

  export type sys_userScalarWhereWithAggregatesInput = {
    AND?: sys_userScalarWhereWithAggregatesInput | sys_userScalarWhereWithAggregatesInput[]
    OR?: sys_userScalarWhereWithAggregatesInput[]
    NOT?: sys_userScalarWhereWithAggregatesInput | sys_userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_user"> | string
    create_time?: DateTimeWithAggregatesFilter<"sys_user"> | Date | string
    update_time?: DateTimeWithAggregatesFilter<"sys_user"> | Date | string
    org_id?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    org_code?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    dept_id?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    username?: StringWithAggregatesFilter<"sys_user"> | string
    password?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    real_name?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    email?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    phone?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    job_no?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    status?: IntWithAggregatesFilter<"sys_user"> | number
    hidden?: BoolWithAggregatesFilter<"sys_user"> | boolean
    admin_flag?: BoolWithAggregatesFilter<"sys_user"> | boolean
    avatar?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    client_id?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    sort?: IntWithAggregatesFilter<"sys_user"> | number
    user_function_codes?: StringNullableWithAggregatesFilter<"sys_user"> | string | null
    deleted?: BoolWithAggregatesFilter<"sys_user"> | boolean
  }

  export type sys_logWhereInput = {
    AND?: sys_logWhereInput | sys_logWhereInput[]
    OR?: sys_logWhereInput[]
    NOT?: sys_logWhereInput | sys_logWhereInput[]
    id?: StringFilter<"sys_log"> | string
    request_unique?: StringNullableFilter<"sys_log"> | string | null
    description?: StringNullableFilter<"sys_log"> | string | null
    log_type?: Enumlog_typeNullableFilter<"sys_log"> | $Enums.log_type | null
    method?: StringNullableFilter<"sys_log"> | string | null
    params?: StringNullableFilter<"sys_log"> | string | null
    request_ip?: StringNullableFilter<"sys_log"> | string | null
    time?: BigIntNullableFilter<"sys_log"> | bigint | number | null
    user_id?: StringNullableFilter<"sys_log"> | string | null
    user_name?: StringNullableFilter<"sys_log"> | string | null
    address?: StringNullableFilter<"sys_log"> | string | null
    exception_detail?: StringNullableFilter<"sys_log"> | string | null
    create_time?: DateTimeFilter<"sys_log"> | Date | string
    user?: XOR<Sys_userNullableScalarRelationFilter, sys_userWhereInput> | null
  }

  export type sys_logOrderByWithRelationInput = {
    id?: SortOrder
    request_unique?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    log_type?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    params?: SortOrderInput | SortOrder
    request_ip?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    exception_detail?: SortOrderInput | SortOrder
    create_time?: SortOrder
    user?: sys_userOrderByWithRelationInput
    _relevance?: sys_logOrderByRelevanceInput
  }

  export type sys_logWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sys_logWhereInput | sys_logWhereInput[]
    OR?: sys_logWhereInput[]
    NOT?: sys_logWhereInput | sys_logWhereInput[]
    request_unique?: StringNullableFilter<"sys_log"> | string | null
    description?: StringNullableFilter<"sys_log"> | string | null
    log_type?: Enumlog_typeNullableFilter<"sys_log"> | $Enums.log_type | null
    method?: StringNullableFilter<"sys_log"> | string | null
    params?: StringNullableFilter<"sys_log"> | string | null
    request_ip?: StringNullableFilter<"sys_log"> | string | null
    time?: BigIntNullableFilter<"sys_log"> | bigint | number | null
    user_id?: StringNullableFilter<"sys_log"> | string | null
    user_name?: StringNullableFilter<"sys_log"> | string | null
    address?: StringNullableFilter<"sys_log"> | string | null
    exception_detail?: StringNullableFilter<"sys_log"> | string | null
    create_time?: DateTimeFilter<"sys_log"> | Date | string
    user?: XOR<Sys_userNullableScalarRelationFilter, sys_userWhereInput> | null
  }, "id">

  export type sys_logOrderByWithAggregationInput = {
    id?: SortOrder
    request_unique?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    log_type?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    params?: SortOrderInput | SortOrder
    request_ip?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    user_name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    exception_detail?: SortOrderInput | SortOrder
    create_time?: SortOrder
    _count?: sys_logCountOrderByAggregateInput
    _avg?: sys_logAvgOrderByAggregateInput
    _max?: sys_logMaxOrderByAggregateInput
    _min?: sys_logMinOrderByAggregateInput
    _sum?: sys_logSumOrderByAggregateInput
  }

  export type sys_logScalarWhereWithAggregatesInput = {
    AND?: sys_logScalarWhereWithAggregatesInput | sys_logScalarWhereWithAggregatesInput[]
    OR?: sys_logScalarWhereWithAggregatesInput[]
    NOT?: sys_logScalarWhereWithAggregatesInput | sys_logScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_log"> | string
    request_unique?: StringNullableWithAggregatesFilter<"sys_log"> | string | null
    description?: StringNullableWithAggregatesFilter<"sys_log"> | string | null
    log_type?: Enumlog_typeNullableWithAggregatesFilter<"sys_log"> | $Enums.log_type | null
    method?: StringNullableWithAggregatesFilter<"sys_log"> | string | null
    params?: StringNullableWithAggregatesFilter<"sys_log"> | string | null
    request_ip?: StringNullableWithAggregatesFilter<"sys_log"> | string | null
    time?: BigIntNullableWithAggregatesFilter<"sys_log"> | bigint | number | null
    user_id?: StringNullableWithAggregatesFilter<"sys_log"> | string | null
    user_name?: StringNullableWithAggregatesFilter<"sys_log"> | string | null
    address?: StringNullableWithAggregatesFilter<"sys_log"> | string | null
    exception_detail?: StringNullableWithAggregatesFilter<"sys_log"> | string | null
    create_time?: DateTimeWithAggregatesFilter<"sys_log"> | Date | string
  }

  export type sys_menuWhereInput = {
    AND?: sys_menuWhereInput | sys_menuWhereInput[]
    OR?: sys_menuWhereInput[]
    NOT?: sys_menuWhereInput | sys_menuWhereInput[]
    id?: StringFilter<"sys_menu"> | string
    create_time?: DateTimeFilter<"sys_menu"> | Date | string
    update_time?: DateTimeFilter<"sys_menu"> | Date | string
    create_by?: StringNullableFilter<"sys_menu"> | string | null
    update_by?: StringNullableFilter<"sys_menu"> | string | null
    pid?: StringNullableFilter<"sys_menu"> | string | null
    name?: StringNullableFilter<"sys_menu"> | string | null
    url?: StringNullableFilter<"sys_menu"> | string | null
    perms?: StringNullableFilter<"sys_menu"> | string | null
    type?: IntFilter<"sys_menu"> | number
    mode?: StringNullableFilter<"sys_menu"> | string | null
    icon?: StringNullableFilter<"sys_menu"> | string | null
    color?: StringNullableFilter<"sys_menu"> | string | null
    routeUrl?: StringNullableFilter<"sys_menu"> | string | null
    breadCrumb?: StringNullableFilter<"sys_menu"> | string | null
    componentName?: StringNullableFilter<"sys_menu"> | string | null
    componentPath?: StringNullableFilter<"sys_menu"> | string | null
    orderNum?: IntFilter<"sys_menu"> | number
    display?: BoolFilter<"sys_menu"> | boolean
    deleted?: BoolFilter<"sys_menu"> | boolean
    parent?: XOR<Sys_menuNullableScalarRelationFilter, sys_menuWhereInput> | null
    children?: Sys_menuListRelationFilter
    role_menus?: Sys_role_menuListRelationFilter
  }

  export type sys_menuOrderByWithRelationInput = {
    id?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    pid?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    perms?: SortOrderInput | SortOrder
    type?: SortOrder
    mode?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    routeUrl?: SortOrderInput | SortOrder
    breadCrumb?: SortOrderInput | SortOrder
    componentName?: SortOrderInput | SortOrder
    componentPath?: SortOrderInput | SortOrder
    orderNum?: SortOrder
    display?: SortOrder
    deleted?: SortOrder
    parent?: sys_menuOrderByWithRelationInput
    children?: sys_menuOrderByRelationAggregateInput
    role_menus?: sys_role_menuOrderByRelationAggregateInput
    _relevance?: sys_menuOrderByRelevanceInput
  }

  export type sys_menuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sys_menuWhereInput | sys_menuWhereInput[]
    OR?: sys_menuWhereInput[]
    NOT?: sys_menuWhereInput | sys_menuWhereInput[]
    create_time?: DateTimeFilter<"sys_menu"> | Date | string
    update_time?: DateTimeFilter<"sys_menu"> | Date | string
    create_by?: StringNullableFilter<"sys_menu"> | string | null
    update_by?: StringNullableFilter<"sys_menu"> | string | null
    pid?: StringNullableFilter<"sys_menu"> | string | null
    name?: StringNullableFilter<"sys_menu"> | string | null
    url?: StringNullableFilter<"sys_menu"> | string | null
    perms?: StringNullableFilter<"sys_menu"> | string | null
    type?: IntFilter<"sys_menu"> | number
    mode?: StringNullableFilter<"sys_menu"> | string | null
    icon?: StringNullableFilter<"sys_menu"> | string | null
    color?: StringNullableFilter<"sys_menu"> | string | null
    routeUrl?: StringNullableFilter<"sys_menu"> | string | null
    breadCrumb?: StringNullableFilter<"sys_menu"> | string | null
    componentName?: StringNullableFilter<"sys_menu"> | string | null
    componentPath?: StringNullableFilter<"sys_menu"> | string | null
    orderNum?: IntFilter<"sys_menu"> | number
    display?: BoolFilter<"sys_menu"> | boolean
    deleted?: BoolFilter<"sys_menu"> | boolean
    parent?: XOR<Sys_menuNullableScalarRelationFilter, sys_menuWhereInput> | null
    children?: Sys_menuListRelationFilter
    role_menus?: Sys_role_menuListRelationFilter
  }, "id">

  export type sys_menuOrderByWithAggregationInput = {
    id?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    pid?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    perms?: SortOrderInput | SortOrder
    type?: SortOrder
    mode?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    routeUrl?: SortOrderInput | SortOrder
    breadCrumb?: SortOrderInput | SortOrder
    componentName?: SortOrderInput | SortOrder
    componentPath?: SortOrderInput | SortOrder
    orderNum?: SortOrder
    display?: SortOrder
    deleted?: SortOrder
    _count?: sys_menuCountOrderByAggregateInput
    _avg?: sys_menuAvgOrderByAggregateInput
    _max?: sys_menuMaxOrderByAggregateInput
    _min?: sys_menuMinOrderByAggregateInput
    _sum?: sys_menuSumOrderByAggregateInput
  }

  export type sys_menuScalarWhereWithAggregatesInput = {
    AND?: sys_menuScalarWhereWithAggregatesInput | sys_menuScalarWhereWithAggregatesInput[]
    OR?: sys_menuScalarWhereWithAggregatesInput[]
    NOT?: sys_menuScalarWhereWithAggregatesInput | sys_menuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_menu"> | string
    create_time?: DateTimeWithAggregatesFilter<"sys_menu"> | Date | string
    update_time?: DateTimeWithAggregatesFilter<"sys_menu"> | Date | string
    create_by?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    update_by?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    pid?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    name?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    url?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    perms?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    type?: IntWithAggregatesFilter<"sys_menu"> | number
    mode?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    icon?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    color?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    routeUrl?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    breadCrumb?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    componentName?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    componentPath?: StringNullableWithAggregatesFilter<"sys_menu"> | string | null
    orderNum?: IntWithAggregatesFilter<"sys_menu"> | number
    display?: BoolWithAggregatesFilter<"sys_menu"> | boolean
    deleted?: BoolWithAggregatesFilter<"sys_menu"> | boolean
  }

  export type sys_configWhereInput = {
    AND?: sys_configWhereInput | sys_configWhereInput[]
    OR?: sys_configWhereInput[]
    NOT?: sys_configWhereInput | sys_configWhereInput[]
    id?: StringFilter<"sys_config"> | string
    code?: StringNullableFilter<"sys_config"> | string | null
    type?: Enumconfig_typeFilter<"sys_config"> | $Enums.config_type
    describe?: StringNullableFilter<"sys_config"> | string | null
    value?: StringNullableFilter<"sys_config"> | string | null
    sort?: IntFilter<"sys_config"> | number
    enabled?: BoolFilter<"sys_config"> | boolean
    cache?: BoolFilter<"sys_config"> | boolean
    update_by?: StringFilter<"sys_config"> | string
    update_time?: DateTimeNullableFilter<"sys_config"> | Date | string | null
    create_by?: StringFilter<"sys_config"> | string
    create_time?: DateTimeNullableFilter<"sys_config"> | Date | string | null
    deleted?: BoolFilter<"sys_config"> | boolean
  }

  export type sys_configOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    type?: SortOrder
    describe?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    sort?: SortOrder
    enabled?: SortOrder
    cache?: SortOrder
    update_by?: SortOrder
    update_time?: SortOrderInput | SortOrder
    create_by?: SortOrder
    create_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _relevance?: sys_configOrderByRelevanceInput
  }

  export type sys_configWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sys_configWhereInput | sys_configWhereInput[]
    OR?: sys_configWhereInput[]
    NOT?: sys_configWhereInput | sys_configWhereInput[]
    code?: StringNullableFilter<"sys_config"> | string | null
    type?: Enumconfig_typeFilter<"sys_config"> | $Enums.config_type
    describe?: StringNullableFilter<"sys_config"> | string | null
    value?: StringNullableFilter<"sys_config"> | string | null
    sort?: IntFilter<"sys_config"> | number
    enabled?: BoolFilter<"sys_config"> | boolean
    cache?: BoolFilter<"sys_config"> | boolean
    update_by?: StringFilter<"sys_config"> | string
    update_time?: DateTimeNullableFilter<"sys_config"> | Date | string | null
    create_by?: StringFilter<"sys_config"> | string
    create_time?: DateTimeNullableFilter<"sys_config"> | Date | string | null
    deleted?: BoolFilter<"sys_config"> | boolean
  }, "id">

  export type sys_configOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    type?: SortOrder
    describe?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    sort?: SortOrder
    enabled?: SortOrder
    cache?: SortOrder
    update_by?: SortOrder
    update_time?: SortOrderInput | SortOrder
    create_by?: SortOrder
    create_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: sys_configCountOrderByAggregateInput
    _avg?: sys_configAvgOrderByAggregateInput
    _max?: sys_configMaxOrderByAggregateInput
    _min?: sys_configMinOrderByAggregateInput
    _sum?: sys_configSumOrderByAggregateInput
  }

  export type sys_configScalarWhereWithAggregatesInput = {
    AND?: sys_configScalarWhereWithAggregatesInput | sys_configScalarWhereWithAggregatesInput[]
    OR?: sys_configScalarWhereWithAggregatesInput[]
    NOT?: sys_configScalarWhereWithAggregatesInput | sys_configScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_config"> | string
    code?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    type?: Enumconfig_typeWithAggregatesFilter<"sys_config"> | $Enums.config_type
    describe?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    value?: StringNullableWithAggregatesFilter<"sys_config"> | string | null
    sort?: IntWithAggregatesFilter<"sys_config"> | number
    enabled?: BoolWithAggregatesFilter<"sys_config"> | boolean
    cache?: BoolWithAggregatesFilter<"sys_config"> | boolean
    update_by?: StringWithAggregatesFilter<"sys_config"> | string
    update_time?: DateTimeNullableWithAggregatesFilter<"sys_config"> | Date | string | null
    create_by?: StringWithAggregatesFilter<"sys_config"> | string
    create_time?: DateTimeNullableWithAggregatesFilter<"sys_config"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"sys_config"> | boolean
  }

  export type sys_organizationWhereInput = {
    AND?: sys_organizationWhereInput | sys_organizationWhereInput[]
    OR?: sys_organizationWhereInput[]
    NOT?: sys_organizationWhereInput | sys_organizationWhereInput[]
    id?: StringFilter<"sys_organization"> | string
    pid?: StringNullableFilter<"sys_organization"> | string | null
    code?: StringFilter<"sys_organization"> | string
    name?: StringNullableFilter<"sys_organization"> | string | null
    alias?: StringNullableFilter<"sys_organization"> | string | null
    description?: StringNullableFilter<"sys_organization"> | string | null
    full_path?: StringNullableFilter<"sys_organization"> | string | null
    sort?: IntFilter<"sys_organization"> | number
    create_by?: StringNullableFilter<"sys_organization"> | string | null
    update_by?: StringNullableFilter<"sys_organization"> | string | null
    create_time?: DateTimeNullableFilter<"sys_organization"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_organization"> | Date | string | null
    deleted?: BoolFilter<"sys_organization"> | boolean
    lng?: DecimalNullableFilter<"sys_organization"> | Decimal | DecimalJsLike | number | string | null
    lat?: DecimalNullableFilter<"sys_organization"> | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: StringNullableFilter<"sys_organization"> | string | null
    car_clear_sys_org_id?: StringNullableFilter<"sys_organization"> | string | null
    parent?: XOR<Sys_organizationNullableScalarRelationFilter, sys_organizationWhereInput> | null
    children?: Sys_organizationListRelationFilter
    departments?: Sys_deptListRelationFilter
    roles?: Sys_roleListRelationFilter
    users?: Sys_userListRelationFilter
  }

  export type sys_organizationOrderByWithRelationInput = {
    id?: SortOrder
    pid?: SortOrderInput | SortOrder
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    alias?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    full_path?: SortOrderInput | SortOrder
    sort?: SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    update_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    lng?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    car_sys_org_id?: SortOrderInput | SortOrder
    car_clear_sys_org_id?: SortOrderInput | SortOrder
    parent?: sys_organizationOrderByWithRelationInput
    children?: sys_organizationOrderByRelationAggregateInput
    departments?: sys_deptOrderByRelationAggregateInput
    roles?: sys_roleOrderByRelationAggregateInput
    users?: sys_userOrderByRelationAggregateInput
    _relevance?: sys_organizationOrderByRelevanceInput
  }

  export type sys_organizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: sys_organizationWhereInput | sys_organizationWhereInput[]
    OR?: sys_organizationWhereInput[]
    NOT?: sys_organizationWhereInput | sys_organizationWhereInput[]
    pid?: StringNullableFilter<"sys_organization"> | string | null
    name?: StringNullableFilter<"sys_organization"> | string | null
    alias?: StringNullableFilter<"sys_organization"> | string | null
    description?: StringNullableFilter<"sys_organization"> | string | null
    full_path?: StringNullableFilter<"sys_organization"> | string | null
    sort?: IntFilter<"sys_organization"> | number
    create_by?: StringNullableFilter<"sys_organization"> | string | null
    update_by?: StringNullableFilter<"sys_organization"> | string | null
    create_time?: DateTimeNullableFilter<"sys_organization"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_organization"> | Date | string | null
    deleted?: BoolFilter<"sys_organization"> | boolean
    lng?: DecimalNullableFilter<"sys_organization"> | Decimal | DecimalJsLike | number | string | null
    lat?: DecimalNullableFilter<"sys_organization"> | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: StringNullableFilter<"sys_organization"> | string | null
    car_clear_sys_org_id?: StringNullableFilter<"sys_organization"> | string | null
    parent?: XOR<Sys_organizationNullableScalarRelationFilter, sys_organizationWhereInput> | null
    children?: Sys_organizationListRelationFilter
    departments?: Sys_deptListRelationFilter
    roles?: Sys_roleListRelationFilter
    users?: Sys_userListRelationFilter
  }, "id" | "code">

  export type sys_organizationOrderByWithAggregationInput = {
    id?: SortOrder
    pid?: SortOrderInput | SortOrder
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    alias?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    full_path?: SortOrderInput | SortOrder
    sort?: SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    update_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    lng?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    car_sys_org_id?: SortOrderInput | SortOrder
    car_clear_sys_org_id?: SortOrderInput | SortOrder
    _count?: sys_organizationCountOrderByAggregateInput
    _avg?: sys_organizationAvgOrderByAggregateInput
    _max?: sys_organizationMaxOrderByAggregateInput
    _min?: sys_organizationMinOrderByAggregateInput
    _sum?: sys_organizationSumOrderByAggregateInput
  }

  export type sys_organizationScalarWhereWithAggregatesInput = {
    AND?: sys_organizationScalarWhereWithAggregatesInput | sys_organizationScalarWhereWithAggregatesInput[]
    OR?: sys_organizationScalarWhereWithAggregatesInput[]
    NOT?: sys_organizationScalarWhereWithAggregatesInput | sys_organizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_organization"> | string
    pid?: StringNullableWithAggregatesFilter<"sys_organization"> | string | null
    code?: StringWithAggregatesFilter<"sys_organization"> | string
    name?: StringNullableWithAggregatesFilter<"sys_organization"> | string | null
    alias?: StringNullableWithAggregatesFilter<"sys_organization"> | string | null
    description?: StringNullableWithAggregatesFilter<"sys_organization"> | string | null
    full_path?: StringNullableWithAggregatesFilter<"sys_organization"> | string | null
    sort?: IntWithAggregatesFilter<"sys_organization"> | number
    create_by?: StringNullableWithAggregatesFilter<"sys_organization"> | string | null
    update_by?: StringNullableWithAggregatesFilter<"sys_organization"> | string | null
    create_time?: DateTimeNullableWithAggregatesFilter<"sys_organization"> | Date | string | null
    update_time?: DateTimeNullableWithAggregatesFilter<"sys_organization"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"sys_organization"> | boolean
    lng?: DecimalNullableWithAggregatesFilter<"sys_organization"> | Decimal | DecimalJsLike | number | string | null
    lat?: DecimalNullableWithAggregatesFilter<"sys_organization"> | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: StringNullableWithAggregatesFilter<"sys_organization"> | string | null
    car_clear_sys_org_id?: StringNullableWithAggregatesFilter<"sys_organization"> | string | null
  }

  export type sys_deptWhereInput = {
    AND?: sys_deptWhereInput | sys_deptWhereInput[]
    OR?: sys_deptWhereInput[]
    NOT?: sys_deptWhereInput | sys_deptWhereInput[]
    id?: StringFilter<"sys_dept"> | string
    pid?: StringNullableFilter<"sys_dept"> | string | null
    parent_link_ids?: StringNullableFilter<"sys_dept"> | string | null
    org_code?: StringFilter<"sys_dept"> | string
    org_id?: StringFilter<"sys_dept"> | string
    name?: StringFilter<"sys_dept"> | string
    display?: BoolFilter<"sys_dept"> | boolean
    sort?: IntFilter<"sys_dept"> | number
    create_by?: StringNullableFilter<"sys_dept"> | string | null
    update_by?: StringNullableFilter<"sys_dept"> | string | null
    create_time?: DateTimeNullableFilter<"sys_dept"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_dept"> | Date | string | null
    deleted?: BoolFilter<"sys_dept"> | boolean
    parent?: XOR<Sys_deptNullableScalarRelationFilter, sys_deptWhereInput> | null
    children?: Sys_deptListRelationFilter
    organization?: XOR<Sys_organizationScalarRelationFilter, sys_organizationWhereInput>
    users?: Sys_userListRelationFilter
  }

  export type sys_deptOrderByWithRelationInput = {
    id?: SortOrder
    pid?: SortOrderInput | SortOrder
    parent_link_ids?: SortOrderInput | SortOrder
    org_code?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    display?: SortOrder
    sort?: SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    update_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    parent?: sys_deptOrderByWithRelationInput
    children?: sys_deptOrderByRelationAggregateInput
    organization?: sys_organizationOrderByWithRelationInput
    users?: sys_userOrderByRelationAggregateInput
    _relevance?: sys_deptOrderByRelevanceInput
  }

  export type sys_deptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sys_deptWhereInput | sys_deptWhereInput[]
    OR?: sys_deptWhereInput[]
    NOT?: sys_deptWhereInput | sys_deptWhereInput[]
    pid?: StringNullableFilter<"sys_dept"> | string | null
    parent_link_ids?: StringNullableFilter<"sys_dept"> | string | null
    org_code?: StringFilter<"sys_dept"> | string
    org_id?: StringFilter<"sys_dept"> | string
    name?: StringFilter<"sys_dept"> | string
    display?: BoolFilter<"sys_dept"> | boolean
    sort?: IntFilter<"sys_dept"> | number
    create_by?: StringNullableFilter<"sys_dept"> | string | null
    update_by?: StringNullableFilter<"sys_dept"> | string | null
    create_time?: DateTimeNullableFilter<"sys_dept"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_dept"> | Date | string | null
    deleted?: BoolFilter<"sys_dept"> | boolean
    parent?: XOR<Sys_deptNullableScalarRelationFilter, sys_deptWhereInput> | null
    children?: Sys_deptListRelationFilter
    organization?: XOR<Sys_organizationScalarRelationFilter, sys_organizationWhereInput>
    users?: Sys_userListRelationFilter
  }, "id">

  export type sys_deptOrderByWithAggregationInput = {
    id?: SortOrder
    pid?: SortOrderInput | SortOrder
    parent_link_ids?: SortOrderInput | SortOrder
    org_code?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    display?: SortOrder
    sort?: SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    update_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: sys_deptCountOrderByAggregateInput
    _avg?: sys_deptAvgOrderByAggregateInput
    _max?: sys_deptMaxOrderByAggregateInput
    _min?: sys_deptMinOrderByAggregateInput
    _sum?: sys_deptSumOrderByAggregateInput
  }

  export type sys_deptScalarWhereWithAggregatesInput = {
    AND?: sys_deptScalarWhereWithAggregatesInput | sys_deptScalarWhereWithAggregatesInput[]
    OR?: sys_deptScalarWhereWithAggregatesInput[]
    NOT?: sys_deptScalarWhereWithAggregatesInput | sys_deptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_dept"> | string
    pid?: StringNullableWithAggregatesFilter<"sys_dept"> | string | null
    parent_link_ids?: StringNullableWithAggregatesFilter<"sys_dept"> | string | null
    org_code?: StringWithAggregatesFilter<"sys_dept"> | string
    org_id?: StringWithAggregatesFilter<"sys_dept"> | string
    name?: StringWithAggregatesFilter<"sys_dept"> | string
    display?: BoolWithAggregatesFilter<"sys_dept"> | boolean
    sort?: IntWithAggregatesFilter<"sys_dept"> | number
    create_by?: StringNullableWithAggregatesFilter<"sys_dept"> | string | null
    update_by?: StringNullableWithAggregatesFilter<"sys_dept"> | string | null
    create_time?: DateTimeNullableWithAggregatesFilter<"sys_dept"> | Date | string | null
    update_time?: DateTimeNullableWithAggregatesFilter<"sys_dept"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"sys_dept"> | boolean
  }

  export type sys_roleWhereInput = {
    AND?: sys_roleWhereInput | sys_roleWhereInput[]
    OR?: sys_roleWhereInput[]
    NOT?: sys_roleWhereInput | sys_roleWhereInput[]
    id?: StringFilter<"sys_role"> | string
    org_id?: StringNullableFilter<"sys_role"> | string | null
    org_code?: StringNullableFilter<"sys_role"> | string | null
    name?: StringNullableFilter<"sys_role"> | string | null
    description?: StringNullableFilter<"sys_role"> | string | null
    data_scope_type?: Enumdata_scope_typeNullableFilter<"sys_role"> | $Enums.data_scope_type | null
    create_by?: StringNullableFilter<"sys_role"> | string | null
    update_by?: StringNullableFilter<"sys_role"> | string | null
    create_time?: DateTimeNullableFilter<"sys_role"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_role"> | Date | string | null
    deleted?: BoolFilter<"sys_role"> | boolean
    organization?: XOR<Sys_organizationNullableScalarRelationFilter, sys_organizationWhereInput> | null
    role_menus?: Sys_role_menuListRelationFilter
    role_users?: Sys_role_userListRelationFilter
  }

  export type sys_roleOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrderInput | SortOrder
    org_code?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    data_scope_type?: SortOrderInput | SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    update_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    organization?: sys_organizationOrderByWithRelationInput
    role_menus?: sys_role_menuOrderByRelationAggregateInput
    role_users?: sys_role_userOrderByRelationAggregateInput
    _relevance?: sys_roleOrderByRelevanceInput
  }

  export type sys_roleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sys_roleWhereInput | sys_roleWhereInput[]
    OR?: sys_roleWhereInput[]
    NOT?: sys_roleWhereInput | sys_roleWhereInput[]
    org_id?: StringNullableFilter<"sys_role"> | string | null
    org_code?: StringNullableFilter<"sys_role"> | string | null
    name?: StringNullableFilter<"sys_role"> | string | null
    description?: StringNullableFilter<"sys_role"> | string | null
    data_scope_type?: Enumdata_scope_typeNullableFilter<"sys_role"> | $Enums.data_scope_type | null
    create_by?: StringNullableFilter<"sys_role"> | string | null
    update_by?: StringNullableFilter<"sys_role"> | string | null
    create_time?: DateTimeNullableFilter<"sys_role"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_role"> | Date | string | null
    deleted?: BoolFilter<"sys_role"> | boolean
    organization?: XOR<Sys_organizationNullableScalarRelationFilter, sys_organizationWhereInput> | null
    role_menus?: Sys_role_menuListRelationFilter
    role_users?: Sys_role_userListRelationFilter
  }, "id">

  export type sys_roleOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrderInput | SortOrder
    org_code?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    data_scope_type?: SortOrderInput | SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    update_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: sys_roleCountOrderByAggregateInput
    _max?: sys_roleMaxOrderByAggregateInput
    _min?: sys_roleMinOrderByAggregateInput
  }

  export type sys_roleScalarWhereWithAggregatesInput = {
    AND?: sys_roleScalarWhereWithAggregatesInput | sys_roleScalarWhereWithAggregatesInput[]
    OR?: sys_roleScalarWhereWithAggregatesInput[]
    NOT?: sys_roleScalarWhereWithAggregatesInput | sys_roleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_role"> | string
    org_id?: StringNullableWithAggregatesFilter<"sys_role"> | string | null
    org_code?: StringNullableWithAggregatesFilter<"sys_role"> | string | null
    name?: StringNullableWithAggregatesFilter<"sys_role"> | string | null
    description?: StringNullableWithAggregatesFilter<"sys_role"> | string | null
    data_scope_type?: Enumdata_scope_typeNullableWithAggregatesFilter<"sys_role"> | $Enums.data_scope_type | null
    create_by?: StringNullableWithAggregatesFilter<"sys_role"> | string | null
    update_by?: StringNullableWithAggregatesFilter<"sys_role"> | string | null
    create_time?: DateTimeNullableWithAggregatesFilter<"sys_role"> | Date | string | null
    update_time?: DateTimeNullableWithAggregatesFilter<"sys_role"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"sys_role"> | boolean
  }

  export type sys_role_menuWhereInput = {
    AND?: sys_role_menuWhereInput | sys_role_menuWhereInput[]
    OR?: sys_role_menuWhereInput[]
    NOT?: sys_role_menuWhereInput | sys_role_menuWhereInput[]
    id?: StringFilter<"sys_role_menu"> | string
    role_id?: StringNullableFilter<"sys_role_menu"> | string | null
    menu_id?: StringNullableFilter<"sys_role_menu"> | string | null
    create_by?: StringNullableFilter<"sys_role_menu"> | string | null
    create_time?: DateTimeNullableFilter<"sys_role_menu"> | Date | string | null
    deleted?: BoolFilter<"sys_role_menu"> | boolean
    role?: XOR<Sys_roleNullableScalarRelationFilter, sys_roleWhereInput> | null
    menu?: XOR<Sys_menuNullableScalarRelationFilter, sys_menuWhereInput> | null
  }

  export type sys_role_menuOrderByWithRelationInput = {
    id?: SortOrder
    role_id?: SortOrderInput | SortOrder
    menu_id?: SortOrderInput | SortOrder
    create_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    role?: sys_roleOrderByWithRelationInput
    menu?: sys_menuOrderByWithRelationInput
    _relevance?: sys_role_menuOrderByRelevanceInput
  }

  export type sys_role_menuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sys_role_menuWhereInput | sys_role_menuWhereInput[]
    OR?: sys_role_menuWhereInput[]
    NOT?: sys_role_menuWhereInput | sys_role_menuWhereInput[]
    role_id?: StringNullableFilter<"sys_role_menu"> | string | null
    menu_id?: StringNullableFilter<"sys_role_menu"> | string | null
    create_by?: StringNullableFilter<"sys_role_menu"> | string | null
    create_time?: DateTimeNullableFilter<"sys_role_menu"> | Date | string | null
    deleted?: BoolFilter<"sys_role_menu"> | boolean
    role?: XOR<Sys_roleNullableScalarRelationFilter, sys_roleWhereInput> | null
    menu?: XOR<Sys_menuNullableScalarRelationFilter, sys_menuWhereInput> | null
  }, "id">

  export type sys_role_menuOrderByWithAggregationInput = {
    id?: SortOrder
    role_id?: SortOrderInput | SortOrder
    menu_id?: SortOrderInput | SortOrder
    create_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: sys_role_menuCountOrderByAggregateInput
    _max?: sys_role_menuMaxOrderByAggregateInput
    _min?: sys_role_menuMinOrderByAggregateInput
  }

  export type sys_role_menuScalarWhereWithAggregatesInput = {
    AND?: sys_role_menuScalarWhereWithAggregatesInput | sys_role_menuScalarWhereWithAggregatesInput[]
    OR?: sys_role_menuScalarWhereWithAggregatesInput[]
    NOT?: sys_role_menuScalarWhereWithAggregatesInput | sys_role_menuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_role_menu"> | string
    role_id?: StringNullableWithAggregatesFilter<"sys_role_menu"> | string | null
    menu_id?: StringNullableWithAggregatesFilter<"sys_role_menu"> | string | null
    create_by?: StringNullableWithAggregatesFilter<"sys_role_menu"> | string | null
    create_time?: DateTimeNullableWithAggregatesFilter<"sys_role_menu"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"sys_role_menu"> | boolean
  }

  export type sys_role_userWhereInput = {
    AND?: sys_role_userWhereInput | sys_role_userWhereInput[]
    OR?: sys_role_userWhereInput[]
    NOT?: sys_role_userWhereInput | sys_role_userWhereInput[]
    id?: StringFilter<"sys_role_user"> | string
    role_id?: StringNullableFilter<"sys_role_user"> | string | null
    user_id?: StringNullableFilter<"sys_role_user"> | string | null
    create_by?: StringNullableFilter<"sys_role_user"> | string | null
    create_time?: DateTimeNullableFilter<"sys_role_user"> | Date | string | null
    deleted?: BoolFilter<"sys_role_user"> | boolean
    role?: XOR<Sys_roleNullableScalarRelationFilter, sys_roleWhereInput> | null
    user?: XOR<Sys_userNullableScalarRelationFilter, sys_userWhereInput> | null
  }

  export type sys_role_userOrderByWithRelationInput = {
    id?: SortOrder
    role_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    create_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    role?: sys_roleOrderByWithRelationInput
    user?: sys_userOrderByWithRelationInput
    _relevance?: sys_role_userOrderByRelevanceInput
  }

  export type sys_role_userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sys_role_userWhereInput | sys_role_userWhereInput[]
    OR?: sys_role_userWhereInput[]
    NOT?: sys_role_userWhereInput | sys_role_userWhereInput[]
    role_id?: StringNullableFilter<"sys_role_user"> | string | null
    user_id?: StringNullableFilter<"sys_role_user"> | string | null
    create_by?: StringNullableFilter<"sys_role_user"> | string | null
    create_time?: DateTimeNullableFilter<"sys_role_user"> | Date | string | null
    deleted?: BoolFilter<"sys_role_user"> | boolean
    role?: XOR<Sys_roleNullableScalarRelationFilter, sys_roleWhereInput> | null
    user?: XOR<Sys_userNullableScalarRelationFilter, sys_userWhereInput> | null
  }, "id">

  export type sys_role_userOrderByWithAggregationInput = {
    id?: SortOrder
    role_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    create_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: sys_role_userCountOrderByAggregateInput
    _max?: sys_role_userMaxOrderByAggregateInput
    _min?: sys_role_userMinOrderByAggregateInput
  }

  export type sys_role_userScalarWhereWithAggregatesInput = {
    AND?: sys_role_userScalarWhereWithAggregatesInput | sys_role_userScalarWhereWithAggregatesInput[]
    OR?: sys_role_userScalarWhereWithAggregatesInput[]
    NOT?: sys_role_userScalarWhereWithAggregatesInput | sys_role_userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_role_user"> | string
    role_id?: StringNullableWithAggregatesFilter<"sys_role_user"> | string | null
    user_id?: StringNullableWithAggregatesFilter<"sys_role_user"> | string | null
    create_by?: StringNullableWithAggregatesFilter<"sys_role_user"> | string | null
    create_time?: DateTimeNullableWithAggregatesFilter<"sys_role_user"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"sys_role_user"> | boolean
  }

  export type sys_dictWhereInput = {
    AND?: sys_dictWhereInput | sys_dictWhereInput[]
    OR?: sys_dictWhereInput[]
    NOT?: sys_dictWhereInput | sys_dictWhereInput[]
    id?: StringFilter<"sys_dict"> | string
    name?: StringNullableFilter<"sys_dict"> | string | null
    description?: StringNullableFilter<"sys_dict"> | string | null
    create_by?: StringNullableFilter<"sys_dict"> | string | null
    update_by?: StringNullableFilter<"sys_dict"> | string | null
    create_time?: DateTimeNullableFilter<"sys_dict"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_dict"> | Date | string | null
    deleted?: BoolFilter<"sys_dict"> | boolean
    details?: Sys_dict_detailListRelationFilter
  }

  export type sys_dictOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    update_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    details?: sys_dict_detailOrderByRelationAggregateInput
    _relevance?: sys_dictOrderByRelevanceInput
  }

  export type sys_dictWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sys_dictWhereInput | sys_dictWhereInput[]
    OR?: sys_dictWhereInput[]
    NOT?: sys_dictWhereInput | sys_dictWhereInput[]
    name?: StringNullableFilter<"sys_dict"> | string | null
    description?: StringNullableFilter<"sys_dict"> | string | null
    create_by?: StringNullableFilter<"sys_dict"> | string | null
    update_by?: StringNullableFilter<"sys_dict"> | string | null
    create_time?: DateTimeNullableFilter<"sys_dict"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_dict"> | Date | string | null
    deleted?: BoolFilter<"sys_dict"> | boolean
    details?: Sys_dict_detailListRelationFilter
  }, "id">

  export type sys_dictOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    update_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: sys_dictCountOrderByAggregateInput
    _max?: sys_dictMaxOrderByAggregateInput
    _min?: sys_dictMinOrderByAggregateInput
  }

  export type sys_dictScalarWhereWithAggregatesInput = {
    AND?: sys_dictScalarWhereWithAggregatesInput | sys_dictScalarWhereWithAggregatesInput[]
    OR?: sys_dictScalarWhereWithAggregatesInput[]
    NOT?: sys_dictScalarWhereWithAggregatesInput | sys_dictScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_dict"> | string
    name?: StringNullableWithAggregatesFilter<"sys_dict"> | string | null
    description?: StringNullableWithAggregatesFilter<"sys_dict"> | string | null
    create_by?: StringNullableWithAggregatesFilter<"sys_dict"> | string | null
    update_by?: StringNullableWithAggregatesFilter<"sys_dict"> | string | null
    create_time?: DateTimeNullableWithAggregatesFilter<"sys_dict"> | Date | string | null
    update_time?: DateTimeNullableWithAggregatesFilter<"sys_dict"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"sys_dict"> | boolean
  }

  export type sys_dict_detailWhereInput = {
    AND?: sys_dict_detailWhereInput | sys_dict_detailWhereInput[]
    OR?: sys_dict_detailWhereInput[]
    NOT?: sys_dict_detailWhereInput | sys_dict_detailWhereInput[]
    id?: StringFilter<"sys_dict_detail"> | string
    dict_id?: StringNullableFilter<"sys_dict_detail"> | string | null
    label?: StringNullableFilter<"sys_dict_detail"> | string | null
    code?: StringNullableFilter<"sys_dict_detail"> | string | null
    sort?: IntFilter<"sys_dict_detail"> | number
    create_by?: StringNullableFilter<"sys_dict_detail"> | string | null
    update_by?: StringNullableFilter<"sys_dict_detail"> | string | null
    create_time?: DateTimeNullableFilter<"sys_dict_detail"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_dict_detail"> | Date | string | null
    deleted?: BoolFilter<"sys_dict_detail"> | boolean
    tab?: StringNullableFilter<"sys_dict_detail"> | string | null
    dict?: XOR<Sys_dictNullableScalarRelationFilter, sys_dictWhereInput> | null
  }

  export type sys_dict_detailOrderByWithRelationInput = {
    id?: SortOrder
    dict_id?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    sort?: SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    update_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    tab?: SortOrderInput | SortOrder
    dict?: sys_dictOrderByWithRelationInput
    _relevance?: sys_dict_detailOrderByRelevanceInput
  }

  export type sys_dict_detailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sys_dict_detailWhereInput | sys_dict_detailWhereInput[]
    OR?: sys_dict_detailWhereInput[]
    NOT?: sys_dict_detailWhereInput | sys_dict_detailWhereInput[]
    dict_id?: StringNullableFilter<"sys_dict_detail"> | string | null
    label?: StringNullableFilter<"sys_dict_detail"> | string | null
    code?: StringNullableFilter<"sys_dict_detail"> | string | null
    sort?: IntFilter<"sys_dict_detail"> | number
    create_by?: StringNullableFilter<"sys_dict_detail"> | string | null
    update_by?: StringNullableFilter<"sys_dict_detail"> | string | null
    create_time?: DateTimeNullableFilter<"sys_dict_detail"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_dict_detail"> | Date | string | null
    deleted?: BoolFilter<"sys_dict_detail"> | boolean
    tab?: StringNullableFilter<"sys_dict_detail"> | string | null
    dict?: XOR<Sys_dictNullableScalarRelationFilter, sys_dictWhereInput> | null
  }, "id">

  export type sys_dict_detailOrderByWithAggregationInput = {
    id?: SortOrder
    dict_id?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    sort?: SortOrder
    create_by?: SortOrderInput | SortOrder
    update_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    update_time?: SortOrderInput | SortOrder
    deleted?: SortOrder
    tab?: SortOrderInput | SortOrder
    _count?: sys_dict_detailCountOrderByAggregateInput
    _avg?: sys_dict_detailAvgOrderByAggregateInput
    _max?: sys_dict_detailMaxOrderByAggregateInput
    _min?: sys_dict_detailMinOrderByAggregateInput
    _sum?: sys_dict_detailSumOrderByAggregateInput
  }

  export type sys_dict_detailScalarWhereWithAggregatesInput = {
    AND?: sys_dict_detailScalarWhereWithAggregatesInput | sys_dict_detailScalarWhereWithAggregatesInput[]
    OR?: sys_dict_detailScalarWhereWithAggregatesInput[]
    NOT?: sys_dict_detailScalarWhereWithAggregatesInput | sys_dict_detailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_dict_detail"> | string
    dict_id?: StringNullableWithAggregatesFilter<"sys_dict_detail"> | string | null
    label?: StringNullableWithAggregatesFilter<"sys_dict_detail"> | string | null
    code?: StringNullableWithAggregatesFilter<"sys_dict_detail"> | string | null
    sort?: IntWithAggregatesFilter<"sys_dict_detail"> | number
    create_by?: StringNullableWithAggregatesFilter<"sys_dict_detail"> | string | null
    update_by?: StringNullableWithAggregatesFilter<"sys_dict_detail"> | string | null
    create_time?: DateTimeNullableWithAggregatesFilter<"sys_dict_detail"> | Date | string | null
    update_time?: DateTimeNullableWithAggregatesFilter<"sys_dict_detail"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"sys_dict_detail"> | boolean
    tab?: StringNullableWithAggregatesFilter<"sys_dict_detail"> | string | null
  }

  export type sys_fileWhereInput = {
    AND?: sys_fileWhereInput | sys_fileWhereInput[]
    OR?: sys_fileWhereInput[]
    NOT?: sys_fileWhereInput | sys_fileWhereInput[]
    id?: StringFilter<"sys_file"> | string
    name?: StringFilter<"sys_file"> | string
    path?: StringFilter<"sys_file"> | string
    md5?: StringFilter<"sys_file"> | string
    sort?: IntFilter<"sys_file"> | number
    create_by?: StringNullableFilter<"sys_file"> | string | null
    create_time?: DateTimeNullableFilter<"sys_file"> | Date | string | null
    space_id?: StringNullableFilter<"sys_file"> | string | null
  }

  export type sys_fileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    md5?: SortOrder
    sort?: SortOrder
    create_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    space_id?: SortOrderInput | SortOrder
    _relevance?: sys_fileOrderByRelevanceInput
  }

  export type sys_fileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sys_fileWhereInput | sys_fileWhereInput[]
    OR?: sys_fileWhereInput[]
    NOT?: sys_fileWhereInput | sys_fileWhereInput[]
    name?: StringFilter<"sys_file"> | string
    path?: StringFilter<"sys_file"> | string
    md5?: StringFilter<"sys_file"> | string
    sort?: IntFilter<"sys_file"> | number
    create_by?: StringNullableFilter<"sys_file"> | string | null
    create_time?: DateTimeNullableFilter<"sys_file"> | Date | string | null
    space_id?: StringNullableFilter<"sys_file"> | string | null
  }, "id">

  export type sys_fileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    md5?: SortOrder
    sort?: SortOrder
    create_by?: SortOrderInput | SortOrder
    create_time?: SortOrderInput | SortOrder
    space_id?: SortOrderInput | SortOrder
    _count?: sys_fileCountOrderByAggregateInput
    _avg?: sys_fileAvgOrderByAggregateInput
    _max?: sys_fileMaxOrderByAggregateInput
    _min?: sys_fileMinOrderByAggregateInput
    _sum?: sys_fileSumOrderByAggregateInput
  }

  export type sys_fileScalarWhereWithAggregatesInput = {
    AND?: sys_fileScalarWhereWithAggregatesInput | sys_fileScalarWhereWithAggregatesInput[]
    OR?: sys_fileScalarWhereWithAggregatesInput[]
    NOT?: sys_fileScalarWhereWithAggregatesInput | sys_fileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sys_file"> | string
    name?: StringWithAggregatesFilter<"sys_file"> | string
    path?: StringWithAggregatesFilter<"sys_file"> | string
    md5?: StringWithAggregatesFilter<"sys_file"> | string
    sort?: IntWithAggregatesFilter<"sys_file"> | number
    create_by?: StringNullableWithAggregatesFilter<"sys_file"> | string | null
    create_time?: DateTimeNullableWithAggregatesFilter<"sys_file"> | Date | string | null
    space_id?: StringNullableWithAggregatesFilter<"sys_file"> | string | null
  }

  export type sys_userCreateInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_code?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
    organization?: sys_organizationCreateNestedOneWithoutUsersInput
    department?: sys_deptCreateNestedOneWithoutUsersInput
    sys_log?: sys_logCreateNestedManyWithoutUserInput
    role_users?: sys_role_userCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_id?: string | null
    org_code?: string | null
    dept_id?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
    sys_log?: sys_logUncheckedCreateNestedManyWithoutUserInput
    role_users?: sys_role_userUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: sys_organizationUpdateOneWithoutUsersNestedInput
    department?: sys_deptUpdateOneWithoutUsersNestedInput
    sys_log?: sys_logUpdateManyWithoutUserNestedInput
    role_users?: sys_role_userUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    sys_log?: sys_logUncheckedUpdateManyWithoutUserNestedInput
    role_users?: sys_role_userUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sys_userCreateManyInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_id?: string | null
    org_code?: string | null
    dept_id?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
  }

  export type sys_userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_logCreateInput = {
    id?: string
    request_unique?: string | null
    description?: string | null
    log_type?: $Enums.log_type | null
    method?: string | null
    params?: string | null
    request_ip?: string | null
    time?: bigint | number | null
    user_name?: string | null
    address?: string | null
    exception_detail?: string | null
    create_time?: Date | string
    user?: sys_userCreateNestedOneWithoutSys_logInput
  }

  export type sys_logUncheckedCreateInput = {
    id?: string
    request_unique?: string | null
    description?: string | null
    log_type?: $Enums.log_type | null
    method?: string | null
    params?: string | null
    request_ip?: string | null
    time?: bigint | number | null
    user_id?: string | null
    user_name?: string | null
    address?: string | null
    exception_detail?: string | null
    create_time?: Date | string
  }

  export type sys_logUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_unique?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    log_type?: NullableEnumlog_typeFieldUpdateOperationsInput | $Enums.log_type | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    request_ip?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    exception_detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: sys_userUpdateOneWithoutSys_logNestedInput
  }

  export type sys_logUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_unique?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    log_type?: NullableEnumlog_typeFieldUpdateOperationsInput | $Enums.log_type | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    request_ip?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    exception_detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sys_logCreateManyInput = {
    id?: string
    request_unique?: string | null
    description?: string | null
    log_type?: $Enums.log_type | null
    method?: string | null
    params?: string | null
    request_ip?: string | null
    time?: bigint | number | null
    user_id?: string | null
    user_name?: string | null
    address?: string | null
    exception_detail?: string | null
    create_time?: Date | string
  }

  export type sys_logUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_unique?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    log_type?: NullableEnumlog_typeFieldUpdateOperationsInput | $Enums.log_type | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    request_ip?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    exception_detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sys_logUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_unique?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    log_type?: NullableEnumlog_typeFieldUpdateOperationsInput | $Enums.log_type | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    request_ip?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    exception_detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sys_menuCreateInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    create_by?: string | null
    update_by?: string | null
    name?: string | null
    url?: string | null
    perms?: string | null
    type?: number
    mode?: string | null
    icon?: string | null
    color?: string | null
    routeUrl?: string | null
    breadCrumb?: string | null
    componentName?: string | null
    componentPath?: string | null
    orderNum?: number
    display?: boolean
    deleted?: boolean
    parent?: sys_menuCreateNestedOneWithoutChildrenInput
    children?: sys_menuCreateNestedManyWithoutParentInput
    role_menus?: sys_role_menuCreateNestedManyWithoutMenuInput
  }

  export type sys_menuUncheckedCreateInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    create_by?: string | null
    update_by?: string | null
    pid?: string | null
    name?: string | null
    url?: string | null
    perms?: string | null
    type?: number
    mode?: string | null
    icon?: string | null
    color?: string | null
    routeUrl?: string | null
    breadCrumb?: string | null
    componentName?: string | null
    componentPath?: string | null
    orderNum?: number
    display?: boolean
    deleted?: boolean
    children?: sys_menuUncheckedCreateNestedManyWithoutParentInput
    role_menus?: sys_role_menuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type sys_menuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    parent?: sys_menuUpdateOneWithoutChildrenNestedInput
    children?: sys_menuUpdateManyWithoutParentNestedInput
    role_menus?: sys_role_menuUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    children?: sys_menuUncheckedUpdateManyWithoutParentNestedInput
    role_menus?: sys_role_menuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuCreateManyInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    create_by?: string | null
    update_by?: string | null
    pid?: string | null
    name?: string | null
    url?: string | null
    perms?: string | null
    type?: number
    mode?: string | null
    icon?: string | null
    color?: string | null
    routeUrl?: string | null
    breadCrumb?: string | null
    componentName?: string | null
    componentPath?: string | null
    orderNum?: number
    display?: boolean
    deleted?: boolean
  }

  export type sys_menuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_menuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_configCreateInput = {
    id: string
    code?: string | null
    type?: $Enums.config_type
    describe?: string | null
    value?: string | null
    sort?: number
    enabled?: boolean
    cache?: boolean
    update_by: string
    update_time?: Date | string | null
    create_by: string
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_configUncheckedCreateInput = {
    id: string
    code?: string | null
    type?: $Enums.config_type
    describe?: string | null
    value?: string | null
    sort?: number
    enabled?: boolean
    cache?: boolean
    update_by: string
    update_time?: Date | string | null
    create_by: string
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_configUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: Enumconfig_typeFieldUpdateOperationsInput | $Enums.config_type
    describe?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    cache?: BoolFieldUpdateOperationsInput | boolean
    update_by?: StringFieldUpdateOperationsInput | string
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    create_by?: StringFieldUpdateOperationsInput | string
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_configUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: Enumconfig_typeFieldUpdateOperationsInput | $Enums.config_type
    describe?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    cache?: BoolFieldUpdateOperationsInput | boolean
    update_by?: StringFieldUpdateOperationsInput | string
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    create_by?: StringFieldUpdateOperationsInput | string
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_configCreateManyInput = {
    id: string
    code?: string | null
    type?: $Enums.config_type
    describe?: string | null
    value?: string | null
    sort?: number
    enabled?: boolean
    cache?: boolean
    update_by: string
    update_time?: Date | string | null
    create_by: string
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_configUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: Enumconfig_typeFieldUpdateOperationsInput | $Enums.config_type
    describe?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    cache?: BoolFieldUpdateOperationsInput | boolean
    update_by?: StringFieldUpdateOperationsInput | string
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    create_by?: StringFieldUpdateOperationsInput | string
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_configUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    type?: Enumconfig_typeFieldUpdateOperationsInput | $Enums.config_type
    describe?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    cache?: BoolFieldUpdateOperationsInput | boolean
    update_by?: StringFieldUpdateOperationsInput | string
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    create_by?: StringFieldUpdateOperationsInput | string
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_organizationCreateInput = {
    id: string
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    parent?: sys_organizationCreateNestedOneWithoutChildrenInput
    children?: sys_organizationCreateNestedManyWithoutParentInput
    departments?: sys_deptCreateNestedManyWithoutOrganizationInput
    roles?: sys_roleCreateNestedManyWithoutOrganizationInput
    users?: sys_userCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationUncheckedCreateInput = {
    id: string
    pid?: string | null
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    children?: sys_organizationUncheckedCreateNestedManyWithoutParentInput
    departments?: sys_deptUncheckedCreateNestedManyWithoutOrganizationInput
    roles?: sys_roleUncheckedCreateNestedManyWithoutOrganizationInput
    users?: sys_userUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: sys_organizationUpdateOneWithoutChildrenNestedInput
    children?: sys_organizationUpdateManyWithoutParentNestedInput
    departments?: sys_deptUpdateManyWithoutOrganizationNestedInput
    roles?: sys_roleUpdateManyWithoutOrganizationNestedInput
    users?: sys_userUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_organizationUncheckedUpdateManyWithoutParentNestedInput
    departments?: sys_deptUncheckedUpdateManyWithoutOrganizationNestedInput
    roles?: sys_roleUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: sys_userUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_organizationCreateManyInput = {
    id: string
    pid?: string | null
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
  }

  export type sys_organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_deptCreateInput = {
    id: string
    parent_link_ids?: string | null
    org_code: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    parent?: sys_deptCreateNestedOneWithoutChildrenInput
    children?: sys_deptCreateNestedManyWithoutParentInput
    organization: sys_organizationCreateNestedOneWithoutDepartmentsInput
    users?: sys_userCreateNestedManyWithoutDepartmentInput
  }

  export type sys_deptUncheckedCreateInput = {
    id: string
    pid?: string | null
    parent_link_ids?: string | null
    org_code: string
    org_id: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    children?: sys_deptUncheckedCreateNestedManyWithoutParentInput
    users?: sys_userUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type sys_deptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    parent?: sys_deptUpdateOneWithoutChildrenNestedInput
    children?: sys_deptUpdateManyWithoutParentNestedInput
    organization?: sys_organizationUpdateOneRequiredWithoutDepartmentsNestedInput
    users?: sys_userUpdateManyWithoutDepartmentNestedInput
  }

  export type sys_deptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    children?: sys_deptUncheckedUpdateManyWithoutParentNestedInput
    users?: sys_userUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type sys_deptCreateManyInput = {
    id: string
    pid?: string | null
    parent_link_ids?: string | null
    org_code: string
    org_id: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_deptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_deptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_roleCreateInput = {
    id: string
    org_code?: string | null
    name?: string | null
    description?: string | null
    data_scope_type?: $Enums.data_scope_type | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    organization?: sys_organizationCreateNestedOneWithoutRolesInput
    role_menus?: sys_role_menuCreateNestedManyWithoutRoleInput
    role_users?: sys_role_userCreateNestedManyWithoutRoleInput
  }

  export type sys_roleUncheckedCreateInput = {
    id: string
    org_id?: string | null
    org_code?: string | null
    name?: string | null
    description?: string | null
    data_scope_type?: $Enums.data_scope_type | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    role_menus?: sys_role_menuUncheckedCreateNestedManyWithoutRoleInput
    role_users?: sys_role_userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type sys_roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: sys_organizationUpdateOneWithoutRolesNestedInput
    role_menus?: sys_role_menuUpdateManyWithoutRoleNestedInput
    role_users?: sys_role_userUpdateManyWithoutRoleNestedInput
  }

  export type sys_roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role_menus?: sys_role_menuUncheckedUpdateManyWithoutRoleNestedInput
    role_users?: sys_role_userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type sys_roleCreateManyInput = {
    id: string
    org_id?: string | null
    org_code?: string | null
    name?: string | null
    description?: string | null
    data_scope_type?: $Enums.data_scope_type | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_menuCreateInput = {
    id: string
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
    role?: sys_roleCreateNestedOneWithoutRole_menusInput
    menu?: sys_menuCreateNestedOneWithoutRole_menusInput
  }

  export type sys_role_menuUncheckedCreateInput = {
    id: string
    role_id?: string | null
    menu_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_role_menuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role?: sys_roleUpdateOneWithoutRole_menusNestedInput
    menu?: sys_menuUpdateOneWithoutRole_menusNestedInput
  }

  export type sys_role_menuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
    menu_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_menuCreateManyInput = {
    id: string
    role_id?: string | null
    menu_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_role_menuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_menuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
    menu_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_userCreateInput = {
    id: string
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
    role?: sys_roleCreateNestedOneWithoutRole_usersInput
    user?: sys_userCreateNestedOneWithoutRole_usersInput
  }

  export type sys_role_userUncheckedCreateInput = {
    id: string
    role_id?: string | null
    user_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_role_userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role?: sys_roleUpdateOneWithoutRole_usersNestedInput
    user?: sys_userUpdateOneWithoutRole_usersNestedInput
  }

  export type sys_role_userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_userCreateManyInput = {
    id: string
    role_id?: string | null
    user_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_role_userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_dictCreateInput = {
    id: string
    name?: string | null
    description?: string | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    details?: sys_dict_detailCreateNestedManyWithoutDictInput
  }

  export type sys_dictUncheckedCreateInput = {
    id: string
    name?: string | null
    description?: string | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    details?: sys_dict_detailUncheckedCreateNestedManyWithoutDictInput
  }

  export type sys_dictUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    details?: sys_dict_detailUpdateManyWithoutDictNestedInput
  }

  export type sys_dictUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    details?: sys_dict_detailUncheckedUpdateManyWithoutDictNestedInput
  }

  export type sys_dictCreateManyInput = {
    id: string
    name?: string | null
    description?: string | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_dictUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_dictUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_dict_detailCreateInput = {
    id: string
    label?: string | null
    code?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    tab?: string | null
    dict?: sys_dictCreateNestedOneWithoutDetailsInput
  }

  export type sys_dict_detailUncheckedCreateInput = {
    id: string
    dict_id?: string | null
    label?: string | null
    code?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    tab?: string | null
  }

  export type sys_dict_detailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tab?: NullableStringFieldUpdateOperationsInput | string | null
    dict?: sys_dictUpdateOneWithoutDetailsNestedInput
  }

  export type sys_dict_detailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dict_id?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tab?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_dict_detailCreateManyInput = {
    id: string
    dict_id?: string | null
    label?: string | null
    code?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    tab?: string | null
  }

  export type sys_dict_detailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tab?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_dict_detailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dict_id?: NullableStringFieldUpdateOperationsInput | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tab?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_fileCreateInput = {
    id: string
    name?: string
    path?: string
    md5?: string
    sort?: number
    create_by?: string | null
    create_time?: Date | string | null
    space_id?: string | null
  }

  export type sys_fileUncheckedCreateInput = {
    id: string
    name?: string
    path?: string
    md5?: string
    sort?: number
    create_by?: string | null
    create_time?: Date | string | null
    space_id?: string | null
  }

  export type sys_fileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    md5?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    space_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_fileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    md5?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    space_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_fileCreateManyInput = {
    id: string
    name?: string
    path?: string
    md5?: string
    sort?: number
    create_by?: string | null
    create_time?: Date | string | null
    space_id?: string | null
  }

  export type sys_fileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    md5?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    space_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_fileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    md5?: StringFieldUpdateOperationsInput | string
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    space_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Sys_organizationNullableScalarRelationFilter = {
    is?: sys_organizationWhereInput | null
    isNot?: sys_organizationWhereInput | null
  }

  export type Sys_deptNullableScalarRelationFilter = {
    is?: sys_deptWhereInput | null
    isNot?: sys_deptWhereInput | null
  }

  export type Sys_logListRelationFilter = {
    every?: sys_logWhereInput
    some?: sys_logWhereInput
    none?: sys_logWhereInput
  }

  export type Sys_role_userListRelationFilter = {
    every?: sys_role_userWhereInput
    some?: sys_role_userWhereInput
    none?: sys_role_userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sys_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_role_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_userOrderByRelevanceInput = {
    fields: sys_userOrderByRelevanceFieldEnum | sys_userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_userCountOrderByAggregateInput = {
    id?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    org_id?: SortOrder
    org_code?: SortOrder
    dept_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    real_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    job_no?: SortOrder
    status?: SortOrder
    hidden?: SortOrder
    admin_flag?: SortOrder
    avatar?: SortOrder
    client_id?: SortOrder
    sort?: SortOrder
    user_function_codes?: SortOrder
    deleted?: SortOrder
  }

  export type sys_userAvgOrderByAggregateInput = {
    status?: SortOrder
    sort?: SortOrder
  }

  export type sys_userMaxOrderByAggregateInput = {
    id?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    org_id?: SortOrder
    org_code?: SortOrder
    dept_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    real_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    job_no?: SortOrder
    status?: SortOrder
    hidden?: SortOrder
    admin_flag?: SortOrder
    avatar?: SortOrder
    client_id?: SortOrder
    sort?: SortOrder
    user_function_codes?: SortOrder
    deleted?: SortOrder
  }

  export type sys_userMinOrderByAggregateInput = {
    id?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    org_id?: SortOrder
    org_code?: SortOrder
    dept_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    real_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    job_no?: SortOrder
    status?: SortOrder
    hidden?: SortOrder
    admin_flag?: SortOrder
    avatar?: SortOrder
    client_id?: SortOrder
    sort?: SortOrder
    user_function_codes?: SortOrder
    deleted?: SortOrder
  }

  export type sys_userSumOrderByAggregateInput = {
    status?: SortOrder
    sort?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumlog_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.log_type | Enumlog_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.log_type[] | null
    notIn?: $Enums.log_type[] | null
    not?: NestedEnumlog_typeNullableFilter<$PrismaModel> | $Enums.log_type | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Sys_userNullableScalarRelationFilter = {
    is?: sys_userWhereInput | null
    isNot?: sys_userWhereInput | null
  }

  export type sys_logOrderByRelevanceInput = {
    fields: sys_logOrderByRelevanceFieldEnum | sys_logOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_logCountOrderByAggregateInput = {
    id?: SortOrder
    request_unique?: SortOrder
    description?: SortOrder
    log_type?: SortOrder
    method?: SortOrder
    params?: SortOrder
    request_ip?: SortOrder
    time?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    address?: SortOrder
    exception_detail?: SortOrder
    create_time?: SortOrder
  }

  export type sys_logAvgOrderByAggregateInput = {
    time?: SortOrder
  }

  export type sys_logMaxOrderByAggregateInput = {
    id?: SortOrder
    request_unique?: SortOrder
    description?: SortOrder
    log_type?: SortOrder
    method?: SortOrder
    params?: SortOrder
    request_ip?: SortOrder
    time?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    address?: SortOrder
    exception_detail?: SortOrder
    create_time?: SortOrder
  }

  export type sys_logMinOrderByAggregateInput = {
    id?: SortOrder
    request_unique?: SortOrder
    description?: SortOrder
    log_type?: SortOrder
    method?: SortOrder
    params?: SortOrder
    request_ip?: SortOrder
    time?: SortOrder
    user_id?: SortOrder
    user_name?: SortOrder
    address?: SortOrder
    exception_detail?: SortOrder
    create_time?: SortOrder
  }

  export type sys_logSumOrderByAggregateInput = {
    time?: SortOrder
  }

  export type Enumlog_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.log_type | Enumlog_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.log_type[] | null
    notIn?: $Enums.log_type[] | null
    not?: NestedEnumlog_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.log_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumlog_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumlog_typeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type Sys_menuNullableScalarRelationFilter = {
    is?: sys_menuWhereInput | null
    isNot?: sys_menuWhereInput | null
  }

  export type Sys_menuListRelationFilter = {
    every?: sys_menuWhereInput
    some?: sys_menuWhereInput
    none?: sys_menuWhereInput
  }

  export type Sys_role_menuListRelationFilter = {
    every?: sys_role_menuWhereInput
    some?: sys_role_menuWhereInput
    none?: sys_role_menuWhereInput
  }

  export type sys_menuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_role_menuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_menuOrderByRelevanceInput = {
    fields: sys_menuOrderByRelevanceFieldEnum | sys_menuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_menuCountOrderByAggregateInput = {
    id?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    pid?: SortOrder
    name?: SortOrder
    url?: SortOrder
    perms?: SortOrder
    type?: SortOrder
    mode?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    routeUrl?: SortOrder
    breadCrumb?: SortOrder
    componentName?: SortOrder
    componentPath?: SortOrder
    orderNum?: SortOrder
    display?: SortOrder
    deleted?: SortOrder
  }

  export type sys_menuAvgOrderByAggregateInput = {
    type?: SortOrder
    orderNum?: SortOrder
  }

  export type sys_menuMaxOrderByAggregateInput = {
    id?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    pid?: SortOrder
    name?: SortOrder
    url?: SortOrder
    perms?: SortOrder
    type?: SortOrder
    mode?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    routeUrl?: SortOrder
    breadCrumb?: SortOrder
    componentName?: SortOrder
    componentPath?: SortOrder
    orderNum?: SortOrder
    display?: SortOrder
    deleted?: SortOrder
  }

  export type sys_menuMinOrderByAggregateInput = {
    id?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    pid?: SortOrder
    name?: SortOrder
    url?: SortOrder
    perms?: SortOrder
    type?: SortOrder
    mode?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    routeUrl?: SortOrder
    breadCrumb?: SortOrder
    componentName?: SortOrder
    componentPath?: SortOrder
    orderNum?: SortOrder
    display?: SortOrder
    deleted?: SortOrder
  }

  export type sys_menuSumOrderByAggregateInput = {
    type?: SortOrder
    orderNum?: SortOrder
  }

  export type Enumconfig_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.config_type | Enumconfig_typeFieldRefInput<$PrismaModel>
    in?: $Enums.config_type[]
    notIn?: $Enums.config_type[]
    not?: NestedEnumconfig_typeFilter<$PrismaModel> | $Enums.config_type
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type sys_configOrderByRelevanceInput = {
    fields: sys_configOrderByRelevanceFieldEnum | sys_configOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_configCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    describe?: SortOrder
    value?: SortOrder
    sort?: SortOrder
    enabled?: SortOrder
    cache?: SortOrder
    update_by?: SortOrder
    update_time?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_configAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type sys_configMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    describe?: SortOrder
    value?: SortOrder
    sort?: SortOrder
    enabled?: SortOrder
    cache?: SortOrder
    update_by?: SortOrder
    update_time?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_configMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    describe?: SortOrder
    value?: SortOrder
    sort?: SortOrder
    enabled?: SortOrder
    cache?: SortOrder
    update_by?: SortOrder
    update_time?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_configSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type Enumconfig_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.config_type | Enumconfig_typeFieldRefInput<$PrismaModel>
    in?: $Enums.config_type[]
    notIn?: $Enums.config_type[]
    not?: NestedEnumconfig_typeWithAggregatesFilter<$PrismaModel> | $Enums.config_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumconfig_typeFilter<$PrismaModel>
    _max?: NestedEnumconfig_typeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Sys_organizationListRelationFilter = {
    every?: sys_organizationWhereInput
    some?: sys_organizationWhereInput
    none?: sys_organizationWhereInput
  }

  export type Sys_deptListRelationFilter = {
    every?: sys_deptWhereInput
    some?: sys_deptWhereInput
    none?: sys_deptWhereInput
  }

  export type Sys_roleListRelationFilter = {
    every?: sys_roleWhereInput
    some?: sys_roleWhereInput
    none?: sys_roleWhereInput
  }

  export type Sys_userListRelationFilter = {
    every?: sys_userWhereInput
    some?: sys_userWhereInput
    none?: sys_userWhereInput
  }

  export type sys_organizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_deptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_organizationOrderByRelevanceInput = {
    fields: sys_organizationOrderByRelevanceFieldEnum | sys_organizationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_organizationCountOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    code?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    description?: SortOrder
    full_path?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
    lng?: SortOrder
    lat?: SortOrder
    car_sys_org_id?: SortOrder
    car_clear_sys_org_id?: SortOrder
  }

  export type sys_organizationAvgOrderByAggregateInput = {
    sort?: SortOrder
    lng?: SortOrder
    lat?: SortOrder
  }

  export type sys_organizationMaxOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    code?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    description?: SortOrder
    full_path?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
    lng?: SortOrder
    lat?: SortOrder
    car_sys_org_id?: SortOrder
    car_clear_sys_org_id?: SortOrder
  }

  export type sys_organizationMinOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    code?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    description?: SortOrder
    full_path?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
    lng?: SortOrder
    lat?: SortOrder
    car_sys_org_id?: SortOrder
    car_clear_sys_org_id?: SortOrder
  }

  export type sys_organizationSumOrderByAggregateInput = {
    sort?: SortOrder
    lng?: SortOrder
    lat?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Sys_organizationScalarRelationFilter = {
    is?: sys_organizationWhereInput
    isNot?: sys_organizationWhereInput
  }

  export type sys_deptOrderByRelevanceInput = {
    fields: sys_deptOrderByRelevanceFieldEnum | sys_deptOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_deptCountOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    parent_link_ids?: SortOrder
    org_code?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    display?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_deptAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type sys_deptMaxOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    parent_link_ids?: SortOrder
    org_code?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    display?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_deptMinOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    parent_link_ids?: SortOrder
    org_code?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    display?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_deptSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type Enumdata_scope_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.data_scope_type | Enumdata_scope_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.data_scope_type[] | null
    notIn?: $Enums.data_scope_type[] | null
    not?: NestedEnumdata_scope_typeNullableFilter<$PrismaModel> | $Enums.data_scope_type | null
  }

  export type sys_roleOrderByRelevanceInput = {
    fields: sys_roleOrderByRelevanceFieldEnum | sys_roleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_roleCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    org_code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    data_scope_type?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_roleMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    org_code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    data_scope_type?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_roleMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    org_code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    data_scope_type?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
  }

  export type Enumdata_scope_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.data_scope_type | Enumdata_scope_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.data_scope_type[] | null
    notIn?: $Enums.data_scope_type[] | null
    not?: NestedEnumdata_scope_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.data_scope_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdata_scope_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumdata_scope_typeNullableFilter<$PrismaModel>
  }

  export type Sys_roleNullableScalarRelationFilter = {
    is?: sys_roleWhereInput | null
    isNot?: sys_roleWhereInput | null
  }

  export type sys_role_menuOrderByRelevanceInput = {
    fields: sys_role_menuOrderByRelevanceFieldEnum | sys_role_menuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_role_menuCountOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    menu_id?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_role_menuMaxOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    menu_id?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_role_menuMinOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    menu_id?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_role_userOrderByRelevanceInput = {
    fields: sys_role_userOrderByRelevanceFieldEnum | sys_role_userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_role_userCountOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_role_userMaxOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_role_userMinOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    user_id?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    deleted?: SortOrder
  }

  export type Sys_dict_detailListRelationFilter = {
    every?: sys_dict_detailWhereInput
    some?: sys_dict_detailWhereInput
    none?: sys_dict_detailWhereInput
  }

  export type sys_dict_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sys_dictOrderByRelevanceInput = {
    fields: sys_dictOrderByRelevanceFieldEnum | sys_dictOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_dictCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_dictMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
  }

  export type sys_dictMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
  }

  export type Sys_dictNullableScalarRelationFilter = {
    is?: sys_dictWhereInput | null
    isNot?: sys_dictWhereInput | null
  }

  export type sys_dict_detailOrderByRelevanceInput = {
    fields: sys_dict_detailOrderByRelevanceFieldEnum | sys_dict_detailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_dict_detailCountOrderByAggregateInput = {
    id?: SortOrder
    dict_id?: SortOrder
    label?: SortOrder
    code?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
    tab?: SortOrder
  }

  export type sys_dict_detailAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type sys_dict_detailMaxOrderByAggregateInput = {
    id?: SortOrder
    dict_id?: SortOrder
    label?: SortOrder
    code?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
    tab?: SortOrder
  }

  export type sys_dict_detailMinOrderByAggregateInput = {
    id?: SortOrder
    dict_id?: SortOrder
    label?: SortOrder
    code?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    update_by?: SortOrder
    create_time?: SortOrder
    update_time?: SortOrder
    deleted?: SortOrder
    tab?: SortOrder
  }

  export type sys_dict_detailSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type sys_fileOrderByRelevanceInput = {
    fields: sys_fileOrderByRelevanceFieldEnum | sys_fileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sys_fileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    md5?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    space_id?: SortOrder
  }

  export type sys_fileAvgOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type sys_fileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    md5?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    space_id?: SortOrder
  }

  export type sys_fileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    md5?: SortOrder
    sort?: SortOrder
    create_by?: SortOrder
    create_time?: SortOrder
    space_id?: SortOrder
  }

  export type sys_fileSumOrderByAggregateInput = {
    sort?: SortOrder
  }

  export type sys_organizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<sys_organizationCreateWithoutUsersInput, sys_organizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sys_organizationCreateOrConnectWithoutUsersInput
    connect?: sys_organizationWhereUniqueInput
  }

  export type sys_deptCreateNestedOneWithoutUsersInput = {
    create?: XOR<sys_deptCreateWithoutUsersInput, sys_deptUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sys_deptCreateOrConnectWithoutUsersInput
    connect?: sys_deptWhereUniqueInput
  }

  export type sys_logCreateNestedManyWithoutUserInput = {
    create?: XOR<sys_logCreateWithoutUserInput, sys_logUncheckedCreateWithoutUserInput> | sys_logCreateWithoutUserInput[] | sys_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_logCreateOrConnectWithoutUserInput | sys_logCreateOrConnectWithoutUserInput[]
    createMany?: sys_logCreateManyUserInputEnvelope
    connect?: sys_logWhereUniqueInput | sys_logWhereUniqueInput[]
  }

  export type sys_role_userCreateNestedManyWithoutUserInput = {
    create?: XOR<sys_role_userCreateWithoutUserInput, sys_role_userUncheckedCreateWithoutUserInput> | sys_role_userCreateWithoutUserInput[] | sys_role_userUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_role_userCreateOrConnectWithoutUserInput | sys_role_userCreateOrConnectWithoutUserInput[]
    createMany?: sys_role_userCreateManyUserInputEnvelope
    connect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
  }

  export type sys_logUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sys_logCreateWithoutUserInput, sys_logUncheckedCreateWithoutUserInput> | sys_logCreateWithoutUserInput[] | sys_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_logCreateOrConnectWithoutUserInput | sys_logCreateOrConnectWithoutUserInput[]
    createMany?: sys_logCreateManyUserInputEnvelope
    connect?: sys_logWhereUniqueInput | sys_logWhereUniqueInput[]
  }

  export type sys_role_userUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sys_role_userCreateWithoutUserInput, sys_role_userUncheckedCreateWithoutUserInput> | sys_role_userCreateWithoutUserInput[] | sys_role_userUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_role_userCreateOrConnectWithoutUserInput | sys_role_userCreateOrConnectWithoutUserInput[]
    createMany?: sys_role_userCreateManyUserInputEnvelope
    connect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type sys_organizationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<sys_organizationCreateWithoutUsersInput, sys_organizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sys_organizationCreateOrConnectWithoutUsersInput
    upsert?: sys_organizationUpsertWithoutUsersInput
    disconnect?: sys_organizationWhereInput | boolean
    delete?: sys_organizationWhereInput | boolean
    connect?: sys_organizationWhereUniqueInput
    update?: XOR<XOR<sys_organizationUpdateToOneWithWhereWithoutUsersInput, sys_organizationUpdateWithoutUsersInput>, sys_organizationUncheckedUpdateWithoutUsersInput>
  }

  export type sys_deptUpdateOneWithoutUsersNestedInput = {
    create?: XOR<sys_deptCreateWithoutUsersInput, sys_deptUncheckedCreateWithoutUsersInput>
    connectOrCreate?: sys_deptCreateOrConnectWithoutUsersInput
    upsert?: sys_deptUpsertWithoutUsersInput
    disconnect?: sys_deptWhereInput | boolean
    delete?: sys_deptWhereInput | boolean
    connect?: sys_deptWhereUniqueInput
    update?: XOR<XOR<sys_deptUpdateToOneWithWhereWithoutUsersInput, sys_deptUpdateWithoutUsersInput>, sys_deptUncheckedUpdateWithoutUsersInput>
  }

  export type sys_logUpdateManyWithoutUserNestedInput = {
    create?: XOR<sys_logCreateWithoutUserInput, sys_logUncheckedCreateWithoutUserInput> | sys_logCreateWithoutUserInput[] | sys_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_logCreateOrConnectWithoutUserInput | sys_logCreateOrConnectWithoutUserInput[]
    upsert?: sys_logUpsertWithWhereUniqueWithoutUserInput | sys_logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sys_logCreateManyUserInputEnvelope
    set?: sys_logWhereUniqueInput | sys_logWhereUniqueInput[]
    disconnect?: sys_logWhereUniqueInput | sys_logWhereUniqueInput[]
    delete?: sys_logWhereUniqueInput | sys_logWhereUniqueInput[]
    connect?: sys_logWhereUniqueInput | sys_logWhereUniqueInput[]
    update?: sys_logUpdateWithWhereUniqueWithoutUserInput | sys_logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sys_logUpdateManyWithWhereWithoutUserInput | sys_logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sys_logScalarWhereInput | sys_logScalarWhereInput[]
  }

  export type sys_role_userUpdateManyWithoutUserNestedInput = {
    create?: XOR<sys_role_userCreateWithoutUserInput, sys_role_userUncheckedCreateWithoutUserInput> | sys_role_userCreateWithoutUserInput[] | sys_role_userUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_role_userCreateOrConnectWithoutUserInput | sys_role_userCreateOrConnectWithoutUserInput[]
    upsert?: sys_role_userUpsertWithWhereUniqueWithoutUserInput | sys_role_userUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sys_role_userCreateManyUserInputEnvelope
    set?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    disconnect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    delete?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    connect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    update?: sys_role_userUpdateWithWhereUniqueWithoutUserInput | sys_role_userUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sys_role_userUpdateManyWithWhereWithoutUserInput | sys_role_userUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sys_role_userScalarWhereInput | sys_role_userScalarWhereInput[]
  }

  export type sys_logUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sys_logCreateWithoutUserInput, sys_logUncheckedCreateWithoutUserInput> | sys_logCreateWithoutUserInput[] | sys_logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_logCreateOrConnectWithoutUserInput | sys_logCreateOrConnectWithoutUserInput[]
    upsert?: sys_logUpsertWithWhereUniqueWithoutUserInput | sys_logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sys_logCreateManyUserInputEnvelope
    set?: sys_logWhereUniqueInput | sys_logWhereUniqueInput[]
    disconnect?: sys_logWhereUniqueInput | sys_logWhereUniqueInput[]
    delete?: sys_logWhereUniqueInput | sys_logWhereUniqueInput[]
    connect?: sys_logWhereUniqueInput | sys_logWhereUniqueInput[]
    update?: sys_logUpdateWithWhereUniqueWithoutUserInput | sys_logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sys_logUpdateManyWithWhereWithoutUserInput | sys_logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sys_logScalarWhereInput | sys_logScalarWhereInput[]
  }

  export type sys_role_userUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sys_role_userCreateWithoutUserInput, sys_role_userUncheckedCreateWithoutUserInput> | sys_role_userCreateWithoutUserInput[] | sys_role_userUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sys_role_userCreateOrConnectWithoutUserInput | sys_role_userCreateOrConnectWithoutUserInput[]
    upsert?: sys_role_userUpsertWithWhereUniqueWithoutUserInput | sys_role_userUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sys_role_userCreateManyUserInputEnvelope
    set?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    disconnect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    delete?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    connect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    update?: sys_role_userUpdateWithWhereUniqueWithoutUserInput | sys_role_userUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sys_role_userUpdateManyWithWhereWithoutUserInput | sys_role_userUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sys_role_userScalarWhereInput | sys_role_userScalarWhereInput[]
  }

  export type sys_userCreateNestedOneWithoutSys_logInput = {
    create?: XOR<sys_userCreateWithoutSys_logInput, sys_userUncheckedCreateWithoutSys_logInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutSys_logInput
    connect?: sys_userWhereUniqueInput
  }

  export type NullableEnumlog_typeFieldUpdateOperationsInput = {
    set?: $Enums.log_type | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type sys_userUpdateOneWithoutSys_logNestedInput = {
    create?: XOR<sys_userCreateWithoutSys_logInput, sys_userUncheckedCreateWithoutSys_logInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutSys_logInput
    upsert?: sys_userUpsertWithoutSys_logInput
    disconnect?: sys_userWhereInput | boolean
    delete?: sys_userWhereInput | boolean
    connect?: sys_userWhereUniqueInput
    update?: XOR<XOR<sys_userUpdateToOneWithWhereWithoutSys_logInput, sys_userUpdateWithoutSys_logInput>, sys_userUncheckedUpdateWithoutSys_logInput>
  }

  export type sys_menuCreateNestedOneWithoutChildrenInput = {
    create?: XOR<sys_menuCreateWithoutChildrenInput, sys_menuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: sys_menuCreateOrConnectWithoutChildrenInput
    connect?: sys_menuWhereUniqueInput
  }

  export type sys_menuCreateNestedManyWithoutParentInput = {
    create?: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput> | sys_menuCreateWithoutParentInput[] | sys_menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_menuCreateOrConnectWithoutParentInput | sys_menuCreateOrConnectWithoutParentInput[]
    createMany?: sys_menuCreateManyParentInputEnvelope
    connect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
  }

  export type sys_role_menuCreateNestedManyWithoutMenuInput = {
    create?: XOR<sys_role_menuCreateWithoutMenuInput, sys_role_menuUncheckedCreateWithoutMenuInput> | sys_role_menuCreateWithoutMenuInput[] | sys_role_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_role_menuCreateOrConnectWithoutMenuInput | sys_role_menuCreateOrConnectWithoutMenuInput[]
    createMany?: sys_role_menuCreateManyMenuInputEnvelope
    connect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
  }

  export type sys_menuUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput> | sys_menuCreateWithoutParentInput[] | sys_menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_menuCreateOrConnectWithoutParentInput | sys_menuCreateOrConnectWithoutParentInput[]
    createMany?: sys_menuCreateManyParentInputEnvelope
    connect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
  }

  export type sys_role_menuUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<sys_role_menuCreateWithoutMenuInput, sys_role_menuUncheckedCreateWithoutMenuInput> | sys_role_menuCreateWithoutMenuInput[] | sys_role_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_role_menuCreateOrConnectWithoutMenuInput | sys_role_menuCreateOrConnectWithoutMenuInput[]
    createMany?: sys_role_menuCreateManyMenuInputEnvelope
    connect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
  }

  export type sys_menuUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<sys_menuCreateWithoutChildrenInput, sys_menuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: sys_menuCreateOrConnectWithoutChildrenInput
    upsert?: sys_menuUpsertWithoutChildrenInput
    disconnect?: sys_menuWhereInput | boolean
    delete?: sys_menuWhereInput | boolean
    connect?: sys_menuWhereUniqueInput
    update?: XOR<XOR<sys_menuUpdateToOneWithWhereWithoutChildrenInput, sys_menuUpdateWithoutChildrenInput>, sys_menuUncheckedUpdateWithoutChildrenInput>
  }

  export type sys_menuUpdateManyWithoutParentNestedInput = {
    create?: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput> | sys_menuCreateWithoutParentInput[] | sys_menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_menuCreateOrConnectWithoutParentInput | sys_menuCreateOrConnectWithoutParentInput[]
    upsert?: sys_menuUpsertWithWhereUniqueWithoutParentInput | sys_menuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: sys_menuCreateManyParentInputEnvelope
    set?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    disconnect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    delete?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    connect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    update?: sys_menuUpdateWithWhereUniqueWithoutParentInput | sys_menuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: sys_menuUpdateManyWithWhereWithoutParentInput | sys_menuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: sys_menuScalarWhereInput | sys_menuScalarWhereInput[]
  }

  export type sys_role_menuUpdateManyWithoutMenuNestedInput = {
    create?: XOR<sys_role_menuCreateWithoutMenuInput, sys_role_menuUncheckedCreateWithoutMenuInput> | sys_role_menuCreateWithoutMenuInput[] | sys_role_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_role_menuCreateOrConnectWithoutMenuInput | sys_role_menuCreateOrConnectWithoutMenuInput[]
    upsert?: sys_role_menuUpsertWithWhereUniqueWithoutMenuInput | sys_role_menuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: sys_role_menuCreateManyMenuInputEnvelope
    set?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    disconnect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    delete?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    connect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    update?: sys_role_menuUpdateWithWhereUniqueWithoutMenuInput | sys_role_menuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: sys_role_menuUpdateManyWithWhereWithoutMenuInput | sys_role_menuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: sys_role_menuScalarWhereInput | sys_role_menuScalarWhereInput[]
  }

  export type sys_menuUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput> | sys_menuCreateWithoutParentInput[] | sys_menuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_menuCreateOrConnectWithoutParentInput | sys_menuCreateOrConnectWithoutParentInput[]
    upsert?: sys_menuUpsertWithWhereUniqueWithoutParentInput | sys_menuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: sys_menuCreateManyParentInputEnvelope
    set?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    disconnect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    delete?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    connect?: sys_menuWhereUniqueInput | sys_menuWhereUniqueInput[]
    update?: sys_menuUpdateWithWhereUniqueWithoutParentInput | sys_menuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: sys_menuUpdateManyWithWhereWithoutParentInput | sys_menuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: sys_menuScalarWhereInput | sys_menuScalarWhereInput[]
  }

  export type sys_role_menuUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<sys_role_menuCreateWithoutMenuInput, sys_role_menuUncheckedCreateWithoutMenuInput> | sys_role_menuCreateWithoutMenuInput[] | sys_role_menuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: sys_role_menuCreateOrConnectWithoutMenuInput | sys_role_menuCreateOrConnectWithoutMenuInput[]
    upsert?: sys_role_menuUpsertWithWhereUniqueWithoutMenuInput | sys_role_menuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: sys_role_menuCreateManyMenuInputEnvelope
    set?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    disconnect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    delete?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    connect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    update?: sys_role_menuUpdateWithWhereUniqueWithoutMenuInput | sys_role_menuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: sys_role_menuUpdateManyWithWhereWithoutMenuInput | sys_role_menuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: sys_role_menuScalarWhereInput | sys_role_menuScalarWhereInput[]
  }

  export type Enumconfig_typeFieldUpdateOperationsInput = {
    set?: $Enums.config_type
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type sys_organizationCreateNestedOneWithoutChildrenInput = {
    create?: XOR<sys_organizationCreateWithoutChildrenInput, sys_organizationUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: sys_organizationCreateOrConnectWithoutChildrenInput
    connect?: sys_organizationWhereUniqueInput
  }

  export type sys_organizationCreateNestedManyWithoutParentInput = {
    create?: XOR<sys_organizationCreateWithoutParentInput, sys_organizationUncheckedCreateWithoutParentInput> | sys_organizationCreateWithoutParentInput[] | sys_organizationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_organizationCreateOrConnectWithoutParentInput | sys_organizationCreateOrConnectWithoutParentInput[]
    createMany?: sys_organizationCreateManyParentInputEnvelope
    connect?: sys_organizationWhereUniqueInput | sys_organizationWhereUniqueInput[]
  }

  export type sys_deptCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<sys_deptCreateWithoutOrganizationInput, sys_deptUncheckedCreateWithoutOrganizationInput> | sys_deptCreateWithoutOrganizationInput[] | sys_deptUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_deptCreateOrConnectWithoutOrganizationInput | sys_deptCreateOrConnectWithoutOrganizationInput[]
    createMany?: sys_deptCreateManyOrganizationInputEnvelope
    connect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
  }

  export type sys_roleCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<sys_roleCreateWithoutOrganizationInput, sys_roleUncheckedCreateWithoutOrganizationInput> | sys_roleCreateWithoutOrganizationInput[] | sys_roleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_roleCreateOrConnectWithoutOrganizationInput | sys_roleCreateOrConnectWithoutOrganizationInput[]
    createMany?: sys_roleCreateManyOrganizationInputEnvelope
    connect?: sys_roleWhereUniqueInput | sys_roleWhereUniqueInput[]
  }

  export type sys_userCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<sys_userCreateWithoutOrganizationInput, sys_userUncheckedCreateWithoutOrganizationInput> | sys_userCreateWithoutOrganizationInput[] | sys_userUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutOrganizationInput | sys_userCreateOrConnectWithoutOrganizationInput[]
    createMany?: sys_userCreateManyOrganizationInputEnvelope
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
  }

  export type sys_organizationUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<sys_organizationCreateWithoutParentInput, sys_organizationUncheckedCreateWithoutParentInput> | sys_organizationCreateWithoutParentInput[] | sys_organizationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_organizationCreateOrConnectWithoutParentInput | sys_organizationCreateOrConnectWithoutParentInput[]
    createMany?: sys_organizationCreateManyParentInputEnvelope
    connect?: sys_organizationWhereUniqueInput | sys_organizationWhereUniqueInput[]
  }

  export type sys_deptUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<sys_deptCreateWithoutOrganizationInput, sys_deptUncheckedCreateWithoutOrganizationInput> | sys_deptCreateWithoutOrganizationInput[] | sys_deptUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_deptCreateOrConnectWithoutOrganizationInput | sys_deptCreateOrConnectWithoutOrganizationInput[]
    createMany?: sys_deptCreateManyOrganizationInputEnvelope
    connect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
  }

  export type sys_roleUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<sys_roleCreateWithoutOrganizationInput, sys_roleUncheckedCreateWithoutOrganizationInput> | sys_roleCreateWithoutOrganizationInput[] | sys_roleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_roleCreateOrConnectWithoutOrganizationInput | sys_roleCreateOrConnectWithoutOrganizationInput[]
    createMany?: sys_roleCreateManyOrganizationInputEnvelope
    connect?: sys_roleWhereUniqueInput | sys_roleWhereUniqueInput[]
  }

  export type sys_userUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<sys_userCreateWithoutOrganizationInput, sys_userUncheckedCreateWithoutOrganizationInput> | sys_userCreateWithoutOrganizationInput[] | sys_userUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutOrganizationInput | sys_userCreateOrConnectWithoutOrganizationInput[]
    createMany?: sys_userCreateManyOrganizationInputEnvelope
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type sys_organizationUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<sys_organizationCreateWithoutChildrenInput, sys_organizationUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: sys_organizationCreateOrConnectWithoutChildrenInput
    upsert?: sys_organizationUpsertWithoutChildrenInput
    disconnect?: sys_organizationWhereInput | boolean
    delete?: sys_organizationWhereInput | boolean
    connect?: sys_organizationWhereUniqueInput
    update?: XOR<XOR<sys_organizationUpdateToOneWithWhereWithoutChildrenInput, sys_organizationUpdateWithoutChildrenInput>, sys_organizationUncheckedUpdateWithoutChildrenInput>
  }

  export type sys_organizationUpdateManyWithoutParentNestedInput = {
    create?: XOR<sys_organizationCreateWithoutParentInput, sys_organizationUncheckedCreateWithoutParentInput> | sys_organizationCreateWithoutParentInput[] | sys_organizationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_organizationCreateOrConnectWithoutParentInput | sys_organizationCreateOrConnectWithoutParentInput[]
    upsert?: sys_organizationUpsertWithWhereUniqueWithoutParentInput | sys_organizationUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: sys_organizationCreateManyParentInputEnvelope
    set?: sys_organizationWhereUniqueInput | sys_organizationWhereUniqueInput[]
    disconnect?: sys_organizationWhereUniqueInput | sys_organizationWhereUniqueInput[]
    delete?: sys_organizationWhereUniqueInput | sys_organizationWhereUniqueInput[]
    connect?: sys_organizationWhereUniqueInput | sys_organizationWhereUniqueInput[]
    update?: sys_organizationUpdateWithWhereUniqueWithoutParentInput | sys_organizationUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: sys_organizationUpdateManyWithWhereWithoutParentInput | sys_organizationUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: sys_organizationScalarWhereInput | sys_organizationScalarWhereInput[]
  }

  export type sys_deptUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<sys_deptCreateWithoutOrganizationInput, sys_deptUncheckedCreateWithoutOrganizationInput> | sys_deptCreateWithoutOrganizationInput[] | sys_deptUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_deptCreateOrConnectWithoutOrganizationInput | sys_deptCreateOrConnectWithoutOrganizationInput[]
    upsert?: sys_deptUpsertWithWhereUniqueWithoutOrganizationInput | sys_deptUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: sys_deptCreateManyOrganizationInputEnvelope
    set?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    disconnect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    delete?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    connect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    update?: sys_deptUpdateWithWhereUniqueWithoutOrganizationInput | sys_deptUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: sys_deptUpdateManyWithWhereWithoutOrganizationInput | sys_deptUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: sys_deptScalarWhereInput | sys_deptScalarWhereInput[]
  }

  export type sys_roleUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<sys_roleCreateWithoutOrganizationInput, sys_roleUncheckedCreateWithoutOrganizationInput> | sys_roleCreateWithoutOrganizationInput[] | sys_roleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_roleCreateOrConnectWithoutOrganizationInput | sys_roleCreateOrConnectWithoutOrganizationInput[]
    upsert?: sys_roleUpsertWithWhereUniqueWithoutOrganizationInput | sys_roleUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: sys_roleCreateManyOrganizationInputEnvelope
    set?: sys_roleWhereUniqueInput | sys_roleWhereUniqueInput[]
    disconnect?: sys_roleWhereUniqueInput | sys_roleWhereUniqueInput[]
    delete?: sys_roleWhereUniqueInput | sys_roleWhereUniqueInput[]
    connect?: sys_roleWhereUniqueInput | sys_roleWhereUniqueInput[]
    update?: sys_roleUpdateWithWhereUniqueWithoutOrganizationInput | sys_roleUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: sys_roleUpdateManyWithWhereWithoutOrganizationInput | sys_roleUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: sys_roleScalarWhereInput | sys_roleScalarWhereInput[]
  }

  export type sys_userUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<sys_userCreateWithoutOrganizationInput, sys_userUncheckedCreateWithoutOrganizationInput> | sys_userCreateWithoutOrganizationInput[] | sys_userUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutOrganizationInput | sys_userCreateOrConnectWithoutOrganizationInput[]
    upsert?: sys_userUpsertWithWhereUniqueWithoutOrganizationInput | sys_userUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: sys_userCreateManyOrganizationInputEnvelope
    set?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    disconnect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    delete?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    update?: sys_userUpdateWithWhereUniqueWithoutOrganizationInput | sys_userUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: sys_userUpdateManyWithWhereWithoutOrganizationInput | sys_userUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: sys_userScalarWhereInput | sys_userScalarWhereInput[]
  }

  export type sys_organizationUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<sys_organizationCreateWithoutParentInput, sys_organizationUncheckedCreateWithoutParentInput> | sys_organizationCreateWithoutParentInput[] | sys_organizationUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_organizationCreateOrConnectWithoutParentInput | sys_organizationCreateOrConnectWithoutParentInput[]
    upsert?: sys_organizationUpsertWithWhereUniqueWithoutParentInput | sys_organizationUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: sys_organizationCreateManyParentInputEnvelope
    set?: sys_organizationWhereUniqueInput | sys_organizationWhereUniqueInput[]
    disconnect?: sys_organizationWhereUniqueInput | sys_organizationWhereUniqueInput[]
    delete?: sys_organizationWhereUniqueInput | sys_organizationWhereUniqueInput[]
    connect?: sys_organizationWhereUniqueInput | sys_organizationWhereUniqueInput[]
    update?: sys_organizationUpdateWithWhereUniqueWithoutParentInput | sys_organizationUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: sys_organizationUpdateManyWithWhereWithoutParentInput | sys_organizationUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: sys_organizationScalarWhereInput | sys_organizationScalarWhereInput[]
  }

  export type sys_deptUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<sys_deptCreateWithoutOrganizationInput, sys_deptUncheckedCreateWithoutOrganizationInput> | sys_deptCreateWithoutOrganizationInput[] | sys_deptUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_deptCreateOrConnectWithoutOrganizationInput | sys_deptCreateOrConnectWithoutOrganizationInput[]
    upsert?: sys_deptUpsertWithWhereUniqueWithoutOrganizationInput | sys_deptUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: sys_deptCreateManyOrganizationInputEnvelope
    set?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    disconnect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    delete?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    connect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    update?: sys_deptUpdateWithWhereUniqueWithoutOrganizationInput | sys_deptUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: sys_deptUpdateManyWithWhereWithoutOrganizationInput | sys_deptUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: sys_deptScalarWhereInput | sys_deptScalarWhereInput[]
  }

  export type sys_roleUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<sys_roleCreateWithoutOrganizationInput, sys_roleUncheckedCreateWithoutOrganizationInput> | sys_roleCreateWithoutOrganizationInput[] | sys_roleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_roleCreateOrConnectWithoutOrganizationInput | sys_roleCreateOrConnectWithoutOrganizationInput[]
    upsert?: sys_roleUpsertWithWhereUniqueWithoutOrganizationInput | sys_roleUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: sys_roleCreateManyOrganizationInputEnvelope
    set?: sys_roleWhereUniqueInput | sys_roleWhereUniqueInput[]
    disconnect?: sys_roleWhereUniqueInput | sys_roleWhereUniqueInput[]
    delete?: sys_roleWhereUniqueInput | sys_roleWhereUniqueInput[]
    connect?: sys_roleWhereUniqueInput | sys_roleWhereUniqueInput[]
    update?: sys_roleUpdateWithWhereUniqueWithoutOrganizationInput | sys_roleUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: sys_roleUpdateManyWithWhereWithoutOrganizationInput | sys_roleUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: sys_roleScalarWhereInput | sys_roleScalarWhereInput[]
  }

  export type sys_userUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<sys_userCreateWithoutOrganizationInput, sys_userUncheckedCreateWithoutOrganizationInput> | sys_userCreateWithoutOrganizationInput[] | sys_userUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutOrganizationInput | sys_userCreateOrConnectWithoutOrganizationInput[]
    upsert?: sys_userUpsertWithWhereUniqueWithoutOrganizationInput | sys_userUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: sys_userCreateManyOrganizationInputEnvelope
    set?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    disconnect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    delete?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    update?: sys_userUpdateWithWhereUniqueWithoutOrganizationInput | sys_userUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: sys_userUpdateManyWithWhereWithoutOrganizationInput | sys_userUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: sys_userScalarWhereInput | sys_userScalarWhereInput[]
  }

  export type sys_deptCreateNestedOneWithoutChildrenInput = {
    create?: XOR<sys_deptCreateWithoutChildrenInput, sys_deptUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: sys_deptCreateOrConnectWithoutChildrenInput
    connect?: sys_deptWhereUniqueInput
  }

  export type sys_deptCreateNestedManyWithoutParentInput = {
    create?: XOR<sys_deptCreateWithoutParentInput, sys_deptUncheckedCreateWithoutParentInput> | sys_deptCreateWithoutParentInput[] | sys_deptUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_deptCreateOrConnectWithoutParentInput | sys_deptCreateOrConnectWithoutParentInput[]
    createMany?: sys_deptCreateManyParentInputEnvelope
    connect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
  }

  export type sys_organizationCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<sys_organizationCreateWithoutDepartmentsInput, sys_organizationUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: sys_organizationCreateOrConnectWithoutDepartmentsInput
    connect?: sys_organizationWhereUniqueInput
  }

  export type sys_userCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<sys_userCreateWithoutDepartmentInput, sys_userUncheckedCreateWithoutDepartmentInput> | sys_userCreateWithoutDepartmentInput[] | sys_userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutDepartmentInput | sys_userCreateOrConnectWithoutDepartmentInput[]
    createMany?: sys_userCreateManyDepartmentInputEnvelope
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
  }

  export type sys_deptUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<sys_deptCreateWithoutParentInput, sys_deptUncheckedCreateWithoutParentInput> | sys_deptCreateWithoutParentInput[] | sys_deptUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_deptCreateOrConnectWithoutParentInput | sys_deptCreateOrConnectWithoutParentInput[]
    createMany?: sys_deptCreateManyParentInputEnvelope
    connect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
  }

  export type sys_userUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<sys_userCreateWithoutDepartmentInput, sys_userUncheckedCreateWithoutDepartmentInput> | sys_userCreateWithoutDepartmentInput[] | sys_userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutDepartmentInput | sys_userCreateOrConnectWithoutDepartmentInput[]
    createMany?: sys_userCreateManyDepartmentInputEnvelope
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
  }

  export type sys_deptUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<sys_deptCreateWithoutChildrenInput, sys_deptUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: sys_deptCreateOrConnectWithoutChildrenInput
    upsert?: sys_deptUpsertWithoutChildrenInput
    disconnect?: sys_deptWhereInput | boolean
    delete?: sys_deptWhereInput | boolean
    connect?: sys_deptWhereUniqueInput
    update?: XOR<XOR<sys_deptUpdateToOneWithWhereWithoutChildrenInput, sys_deptUpdateWithoutChildrenInput>, sys_deptUncheckedUpdateWithoutChildrenInput>
  }

  export type sys_deptUpdateManyWithoutParentNestedInput = {
    create?: XOR<sys_deptCreateWithoutParentInput, sys_deptUncheckedCreateWithoutParentInput> | sys_deptCreateWithoutParentInput[] | sys_deptUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_deptCreateOrConnectWithoutParentInput | sys_deptCreateOrConnectWithoutParentInput[]
    upsert?: sys_deptUpsertWithWhereUniqueWithoutParentInput | sys_deptUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: sys_deptCreateManyParentInputEnvelope
    set?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    disconnect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    delete?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    connect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    update?: sys_deptUpdateWithWhereUniqueWithoutParentInput | sys_deptUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: sys_deptUpdateManyWithWhereWithoutParentInput | sys_deptUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: sys_deptScalarWhereInput | sys_deptScalarWhereInput[]
  }

  export type sys_organizationUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<sys_organizationCreateWithoutDepartmentsInput, sys_organizationUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: sys_organizationCreateOrConnectWithoutDepartmentsInput
    upsert?: sys_organizationUpsertWithoutDepartmentsInput
    connect?: sys_organizationWhereUniqueInput
    update?: XOR<XOR<sys_organizationUpdateToOneWithWhereWithoutDepartmentsInput, sys_organizationUpdateWithoutDepartmentsInput>, sys_organizationUncheckedUpdateWithoutDepartmentsInput>
  }

  export type sys_userUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<sys_userCreateWithoutDepartmentInput, sys_userUncheckedCreateWithoutDepartmentInput> | sys_userCreateWithoutDepartmentInput[] | sys_userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutDepartmentInput | sys_userCreateOrConnectWithoutDepartmentInput[]
    upsert?: sys_userUpsertWithWhereUniqueWithoutDepartmentInput | sys_userUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: sys_userCreateManyDepartmentInputEnvelope
    set?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    disconnect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    delete?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    update?: sys_userUpdateWithWhereUniqueWithoutDepartmentInput | sys_userUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: sys_userUpdateManyWithWhereWithoutDepartmentInput | sys_userUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: sys_userScalarWhereInput | sys_userScalarWhereInput[]
  }

  export type sys_deptUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<sys_deptCreateWithoutParentInput, sys_deptUncheckedCreateWithoutParentInput> | sys_deptCreateWithoutParentInput[] | sys_deptUncheckedCreateWithoutParentInput[]
    connectOrCreate?: sys_deptCreateOrConnectWithoutParentInput | sys_deptCreateOrConnectWithoutParentInput[]
    upsert?: sys_deptUpsertWithWhereUniqueWithoutParentInput | sys_deptUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: sys_deptCreateManyParentInputEnvelope
    set?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    disconnect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    delete?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    connect?: sys_deptWhereUniqueInput | sys_deptWhereUniqueInput[]
    update?: sys_deptUpdateWithWhereUniqueWithoutParentInput | sys_deptUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: sys_deptUpdateManyWithWhereWithoutParentInput | sys_deptUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: sys_deptScalarWhereInput | sys_deptScalarWhereInput[]
  }

  export type sys_userUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<sys_userCreateWithoutDepartmentInput, sys_userUncheckedCreateWithoutDepartmentInput> | sys_userCreateWithoutDepartmentInput[] | sys_userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: sys_userCreateOrConnectWithoutDepartmentInput | sys_userCreateOrConnectWithoutDepartmentInput[]
    upsert?: sys_userUpsertWithWhereUniqueWithoutDepartmentInput | sys_userUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: sys_userCreateManyDepartmentInputEnvelope
    set?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    disconnect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    delete?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    connect?: sys_userWhereUniqueInput | sys_userWhereUniqueInput[]
    update?: sys_userUpdateWithWhereUniqueWithoutDepartmentInput | sys_userUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: sys_userUpdateManyWithWhereWithoutDepartmentInput | sys_userUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: sys_userScalarWhereInput | sys_userScalarWhereInput[]
  }

  export type sys_organizationCreateNestedOneWithoutRolesInput = {
    create?: XOR<sys_organizationCreateWithoutRolesInput, sys_organizationUncheckedCreateWithoutRolesInput>
    connectOrCreate?: sys_organizationCreateOrConnectWithoutRolesInput
    connect?: sys_organizationWhereUniqueInput
  }

  export type sys_role_menuCreateNestedManyWithoutRoleInput = {
    create?: XOR<sys_role_menuCreateWithoutRoleInput, sys_role_menuUncheckedCreateWithoutRoleInput> | sys_role_menuCreateWithoutRoleInput[] | sys_role_menuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_role_menuCreateOrConnectWithoutRoleInput | sys_role_menuCreateOrConnectWithoutRoleInput[]
    createMany?: sys_role_menuCreateManyRoleInputEnvelope
    connect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
  }

  export type sys_role_userCreateNestedManyWithoutRoleInput = {
    create?: XOR<sys_role_userCreateWithoutRoleInput, sys_role_userUncheckedCreateWithoutRoleInput> | sys_role_userCreateWithoutRoleInput[] | sys_role_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_role_userCreateOrConnectWithoutRoleInput | sys_role_userCreateOrConnectWithoutRoleInput[]
    createMany?: sys_role_userCreateManyRoleInputEnvelope
    connect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
  }

  export type sys_role_menuUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<sys_role_menuCreateWithoutRoleInput, sys_role_menuUncheckedCreateWithoutRoleInput> | sys_role_menuCreateWithoutRoleInput[] | sys_role_menuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_role_menuCreateOrConnectWithoutRoleInput | sys_role_menuCreateOrConnectWithoutRoleInput[]
    createMany?: sys_role_menuCreateManyRoleInputEnvelope
    connect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
  }

  export type sys_role_userUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<sys_role_userCreateWithoutRoleInput, sys_role_userUncheckedCreateWithoutRoleInput> | sys_role_userCreateWithoutRoleInput[] | sys_role_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_role_userCreateOrConnectWithoutRoleInput | sys_role_userCreateOrConnectWithoutRoleInput[]
    createMany?: sys_role_userCreateManyRoleInputEnvelope
    connect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
  }

  export type NullableEnumdata_scope_typeFieldUpdateOperationsInput = {
    set?: $Enums.data_scope_type | null
  }

  export type sys_organizationUpdateOneWithoutRolesNestedInput = {
    create?: XOR<sys_organizationCreateWithoutRolesInput, sys_organizationUncheckedCreateWithoutRolesInput>
    connectOrCreate?: sys_organizationCreateOrConnectWithoutRolesInput
    upsert?: sys_organizationUpsertWithoutRolesInput
    disconnect?: sys_organizationWhereInput | boolean
    delete?: sys_organizationWhereInput | boolean
    connect?: sys_organizationWhereUniqueInput
    update?: XOR<XOR<sys_organizationUpdateToOneWithWhereWithoutRolesInput, sys_organizationUpdateWithoutRolesInput>, sys_organizationUncheckedUpdateWithoutRolesInput>
  }

  export type sys_role_menuUpdateManyWithoutRoleNestedInput = {
    create?: XOR<sys_role_menuCreateWithoutRoleInput, sys_role_menuUncheckedCreateWithoutRoleInput> | sys_role_menuCreateWithoutRoleInput[] | sys_role_menuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_role_menuCreateOrConnectWithoutRoleInput | sys_role_menuCreateOrConnectWithoutRoleInput[]
    upsert?: sys_role_menuUpsertWithWhereUniqueWithoutRoleInput | sys_role_menuUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: sys_role_menuCreateManyRoleInputEnvelope
    set?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    disconnect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    delete?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    connect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    update?: sys_role_menuUpdateWithWhereUniqueWithoutRoleInput | sys_role_menuUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: sys_role_menuUpdateManyWithWhereWithoutRoleInput | sys_role_menuUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: sys_role_menuScalarWhereInput | sys_role_menuScalarWhereInput[]
  }

  export type sys_role_userUpdateManyWithoutRoleNestedInput = {
    create?: XOR<sys_role_userCreateWithoutRoleInput, sys_role_userUncheckedCreateWithoutRoleInput> | sys_role_userCreateWithoutRoleInput[] | sys_role_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_role_userCreateOrConnectWithoutRoleInput | sys_role_userCreateOrConnectWithoutRoleInput[]
    upsert?: sys_role_userUpsertWithWhereUniqueWithoutRoleInput | sys_role_userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: sys_role_userCreateManyRoleInputEnvelope
    set?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    disconnect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    delete?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    connect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    update?: sys_role_userUpdateWithWhereUniqueWithoutRoleInput | sys_role_userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: sys_role_userUpdateManyWithWhereWithoutRoleInput | sys_role_userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: sys_role_userScalarWhereInput | sys_role_userScalarWhereInput[]
  }

  export type sys_role_menuUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<sys_role_menuCreateWithoutRoleInput, sys_role_menuUncheckedCreateWithoutRoleInput> | sys_role_menuCreateWithoutRoleInput[] | sys_role_menuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_role_menuCreateOrConnectWithoutRoleInput | sys_role_menuCreateOrConnectWithoutRoleInput[]
    upsert?: sys_role_menuUpsertWithWhereUniqueWithoutRoleInput | sys_role_menuUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: sys_role_menuCreateManyRoleInputEnvelope
    set?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    disconnect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    delete?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    connect?: sys_role_menuWhereUniqueInput | sys_role_menuWhereUniqueInput[]
    update?: sys_role_menuUpdateWithWhereUniqueWithoutRoleInput | sys_role_menuUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: sys_role_menuUpdateManyWithWhereWithoutRoleInput | sys_role_menuUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: sys_role_menuScalarWhereInput | sys_role_menuScalarWhereInput[]
  }

  export type sys_role_userUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<sys_role_userCreateWithoutRoleInput, sys_role_userUncheckedCreateWithoutRoleInput> | sys_role_userCreateWithoutRoleInput[] | sys_role_userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: sys_role_userCreateOrConnectWithoutRoleInput | sys_role_userCreateOrConnectWithoutRoleInput[]
    upsert?: sys_role_userUpsertWithWhereUniqueWithoutRoleInput | sys_role_userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: sys_role_userCreateManyRoleInputEnvelope
    set?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    disconnect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    delete?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    connect?: sys_role_userWhereUniqueInput | sys_role_userWhereUniqueInput[]
    update?: sys_role_userUpdateWithWhereUniqueWithoutRoleInput | sys_role_userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: sys_role_userUpdateManyWithWhereWithoutRoleInput | sys_role_userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: sys_role_userScalarWhereInput | sys_role_userScalarWhereInput[]
  }

  export type sys_roleCreateNestedOneWithoutRole_menusInput = {
    create?: XOR<sys_roleCreateWithoutRole_menusInput, sys_roleUncheckedCreateWithoutRole_menusInput>
    connectOrCreate?: sys_roleCreateOrConnectWithoutRole_menusInput
    connect?: sys_roleWhereUniqueInput
  }

  export type sys_menuCreateNestedOneWithoutRole_menusInput = {
    create?: XOR<sys_menuCreateWithoutRole_menusInput, sys_menuUncheckedCreateWithoutRole_menusInput>
    connectOrCreate?: sys_menuCreateOrConnectWithoutRole_menusInput
    connect?: sys_menuWhereUniqueInput
  }

  export type sys_roleUpdateOneWithoutRole_menusNestedInput = {
    create?: XOR<sys_roleCreateWithoutRole_menusInput, sys_roleUncheckedCreateWithoutRole_menusInput>
    connectOrCreate?: sys_roleCreateOrConnectWithoutRole_menusInput
    upsert?: sys_roleUpsertWithoutRole_menusInput
    disconnect?: sys_roleWhereInput | boolean
    delete?: sys_roleWhereInput | boolean
    connect?: sys_roleWhereUniqueInput
    update?: XOR<XOR<sys_roleUpdateToOneWithWhereWithoutRole_menusInput, sys_roleUpdateWithoutRole_menusInput>, sys_roleUncheckedUpdateWithoutRole_menusInput>
  }

  export type sys_menuUpdateOneWithoutRole_menusNestedInput = {
    create?: XOR<sys_menuCreateWithoutRole_menusInput, sys_menuUncheckedCreateWithoutRole_menusInput>
    connectOrCreate?: sys_menuCreateOrConnectWithoutRole_menusInput
    upsert?: sys_menuUpsertWithoutRole_menusInput
    disconnect?: sys_menuWhereInput | boolean
    delete?: sys_menuWhereInput | boolean
    connect?: sys_menuWhereUniqueInput
    update?: XOR<XOR<sys_menuUpdateToOneWithWhereWithoutRole_menusInput, sys_menuUpdateWithoutRole_menusInput>, sys_menuUncheckedUpdateWithoutRole_menusInput>
  }

  export type sys_roleCreateNestedOneWithoutRole_usersInput = {
    create?: XOR<sys_roleCreateWithoutRole_usersInput, sys_roleUncheckedCreateWithoutRole_usersInput>
    connectOrCreate?: sys_roleCreateOrConnectWithoutRole_usersInput
    connect?: sys_roleWhereUniqueInput
  }

  export type sys_userCreateNestedOneWithoutRole_usersInput = {
    create?: XOR<sys_userCreateWithoutRole_usersInput, sys_userUncheckedCreateWithoutRole_usersInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutRole_usersInput
    connect?: sys_userWhereUniqueInput
  }

  export type sys_roleUpdateOneWithoutRole_usersNestedInput = {
    create?: XOR<sys_roleCreateWithoutRole_usersInput, sys_roleUncheckedCreateWithoutRole_usersInput>
    connectOrCreate?: sys_roleCreateOrConnectWithoutRole_usersInput
    upsert?: sys_roleUpsertWithoutRole_usersInput
    disconnect?: sys_roleWhereInput | boolean
    delete?: sys_roleWhereInput | boolean
    connect?: sys_roleWhereUniqueInput
    update?: XOR<XOR<sys_roleUpdateToOneWithWhereWithoutRole_usersInput, sys_roleUpdateWithoutRole_usersInput>, sys_roleUncheckedUpdateWithoutRole_usersInput>
  }

  export type sys_userUpdateOneWithoutRole_usersNestedInput = {
    create?: XOR<sys_userCreateWithoutRole_usersInput, sys_userUncheckedCreateWithoutRole_usersInput>
    connectOrCreate?: sys_userCreateOrConnectWithoutRole_usersInput
    upsert?: sys_userUpsertWithoutRole_usersInput
    disconnect?: sys_userWhereInput | boolean
    delete?: sys_userWhereInput | boolean
    connect?: sys_userWhereUniqueInput
    update?: XOR<XOR<sys_userUpdateToOneWithWhereWithoutRole_usersInput, sys_userUpdateWithoutRole_usersInput>, sys_userUncheckedUpdateWithoutRole_usersInput>
  }

  export type sys_dict_detailCreateNestedManyWithoutDictInput = {
    create?: XOR<sys_dict_detailCreateWithoutDictInput, sys_dict_detailUncheckedCreateWithoutDictInput> | sys_dict_detailCreateWithoutDictInput[] | sys_dict_detailUncheckedCreateWithoutDictInput[]
    connectOrCreate?: sys_dict_detailCreateOrConnectWithoutDictInput | sys_dict_detailCreateOrConnectWithoutDictInput[]
    createMany?: sys_dict_detailCreateManyDictInputEnvelope
    connect?: sys_dict_detailWhereUniqueInput | sys_dict_detailWhereUniqueInput[]
  }

  export type sys_dict_detailUncheckedCreateNestedManyWithoutDictInput = {
    create?: XOR<sys_dict_detailCreateWithoutDictInput, sys_dict_detailUncheckedCreateWithoutDictInput> | sys_dict_detailCreateWithoutDictInput[] | sys_dict_detailUncheckedCreateWithoutDictInput[]
    connectOrCreate?: sys_dict_detailCreateOrConnectWithoutDictInput | sys_dict_detailCreateOrConnectWithoutDictInput[]
    createMany?: sys_dict_detailCreateManyDictInputEnvelope
    connect?: sys_dict_detailWhereUniqueInput | sys_dict_detailWhereUniqueInput[]
  }

  export type sys_dict_detailUpdateManyWithoutDictNestedInput = {
    create?: XOR<sys_dict_detailCreateWithoutDictInput, sys_dict_detailUncheckedCreateWithoutDictInput> | sys_dict_detailCreateWithoutDictInput[] | sys_dict_detailUncheckedCreateWithoutDictInput[]
    connectOrCreate?: sys_dict_detailCreateOrConnectWithoutDictInput | sys_dict_detailCreateOrConnectWithoutDictInput[]
    upsert?: sys_dict_detailUpsertWithWhereUniqueWithoutDictInput | sys_dict_detailUpsertWithWhereUniqueWithoutDictInput[]
    createMany?: sys_dict_detailCreateManyDictInputEnvelope
    set?: sys_dict_detailWhereUniqueInput | sys_dict_detailWhereUniqueInput[]
    disconnect?: sys_dict_detailWhereUniqueInput | sys_dict_detailWhereUniqueInput[]
    delete?: sys_dict_detailWhereUniqueInput | sys_dict_detailWhereUniqueInput[]
    connect?: sys_dict_detailWhereUniqueInput | sys_dict_detailWhereUniqueInput[]
    update?: sys_dict_detailUpdateWithWhereUniqueWithoutDictInput | sys_dict_detailUpdateWithWhereUniqueWithoutDictInput[]
    updateMany?: sys_dict_detailUpdateManyWithWhereWithoutDictInput | sys_dict_detailUpdateManyWithWhereWithoutDictInput[]
    deleteMany?: sys_dict_detailScalarWhereInput | sys_dict_detailScalarWhereInput[]
  }

  export type sys_dict_detailUncheckedUpdateManyWithoutDictNestedInput = {
    create?: XOR<sys_dict_detailCreateWithoutDictInput, sys_dict_detailUncheckedCreateWithoutDictInput> | sys_dict_detailCreateWithoutDictInput[] | sys_dict_detailUncheckedCreateWithoutDictInput[]
    connectOrCreate?: sys_dict_detailCreateOrConnectWithoutDictInput | sys_dict_detailCreateOrConnectWithoutDictInput[]
    upsert?: sys_dict_detailUpsertWithWhereUniqueWithoutDictInput | sys_dict_detailUpsertWithWhereUniqueWithoutDictInput[]
    createMany?: sys_dict_detailCreateManyDictInputEnvelope
    set?: sys_dict_detailWhereUniqueInput | sys_dict_detailWhereUniqueInput[]
    disconnect?: sys_dict_detailWhereUniqueInput | sys_dict_detailWhereUniqueInput[]
    delete?: sys_dict_detailWhereUniqueInput | sys_dict_detailWhereUniqueInput[]
    connect?: sys_dict_detailWhereUniqueInput | sys_dict_detailWhereUniqueInput[]
    update?: sys_dict_detailUpdateWithWhereUniqueWithoutDictInput | sys_dict_detailUpdateWithWhereUniqueWithoutDictInput[]
    updateMany?: sys_dict_detailUpdateManyWithWhereWithoutDictInput | sys_dict_detailUpdateManyWithWhereWithoutDictInput[]
    deleteMany?: sys_dict_detailScalarWhereInput | sys_dict_detailScalarWhereInput[]
  }

  export type sys_dictCreateNestedOneWithoutDetailsInput = {
    create?: XOR<sys_dictCreateWithoutDetailsInput, sys_dictUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: sys_dictCreateOrConnectWithoutDetailsInput
    connect?: sys_dictWhereUniqueInput
  }

  export type sys_dictUpdateOneWithoutDetailsNestedInput = {
    create?: XOR<sys_dictCreateWithoutDetailsInput, sys_dictUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: sys_dictCreateOrConnectWithoutDetailsInput
    upsert?: sys_dictUpsertWithoutDetailsInput
    disconnect?: sys_dictWhereInput | boolean
    delete?: sys_dictWhereInput | boolean
    connect?: sys_dictWhereUniqueInput
    update?: XOR<XOR<sys_dictUpdateToOneWithWhereWithoutDetailsInput, sys_dictUpdateWithoutDetailsInput>, sys_dictUncheckedUpdateWithoutDetailsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumlog_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.log_type | Enumlog_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.log_type[] | null
    notIn?: $Enums.log_type[] | null
    not?: NestedEnumlog_typeNullableFilter<$PrismaModel> | $Enums.log_type | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumlog_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.log_type | Enumlog_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.log_type[] | null
    notIn?: $Enums.log_type[] | null
    not?: NestedEnumlog_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.log_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumlog_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumlog_typeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumconfig_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.config_type | Enumconfig_typeFieldRefInput<$PrismaModel>
    in?: $Enums.config_type[]
    notIn?: $Enums.config_type[]
    not?: NestedEnumconfig_typeFilter<$PrismaModel> | $Enums.config_type
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumconfig_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.config_type | Enumconfig_typeFieldRefInput<$PrismaModel>
    in?: $Enums.config_type[]
    notIn?: $Enums.config_type[]
    not?: NestedEnumconfig_typeWithAggregatesFilter<$PrismaModel> | $Enums.config_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumconfig_typeFilter<$PrismaModel>
    _max?: NestedEnumconfig_typeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumdata_scope_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.data_scope_type | Enumdata_scope_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.data_scope_type[] | null
    notIn?: $Enums.data_scope_type[] | null
    not?: NestedEnumdata_scope_typeNullableFilter<$PrismaModel> | $Enums.data_scope_type | null
  }

  export type NestedEnumdata_scope_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.data_scope_type | Enumdata_scope_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.data_scope_type[] | null
    notIn?: $Enums.data_scope_type[] | null
    not?: NestedEnumdata_scope_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.data_scope_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumdata_scope_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumdata_scope_typeNullableFilter<$PrismaModel>
  }

  export type sys_organizationCreateWithoutUsersInput = {
    id: string
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    parent?: sys_organizationCreateNestedOneWithoutChildrenInput
    children?: sys_organizationCreateNestedManyWithoutParentInput
    departments?: sys_deptCreateNestedManyWithoutOrganizationInput
    roles?: sys_roleCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationUncheckedCreateWithoutUsersInput = {
    id: string
    pid?: string | null
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    children?: sys_organizationUncheckedCreateNestedManyWithoutParentInput
    departments?: sys_deptUncheckedCreateNestedManyWithoutOrganizationInput
    roles?: sys_roleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationCreateOrConnectWithoutUsersInput = {
    where: sys_organizationWhereUniqueInput
    create: XOR<sys_organizationCreateWithoutUsersInput, sys_organizationUncheckedCreateWithoutUsersInput>
  }

  export type sys_deptCreateWithoutUsersInput = {
    id: string
    parent_link_ids?: string | null
    org_code: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    parent?: sys_deptCreateNestedOneWithoutChildrenInput
    children?: sys_deptCreateNestedManyWithoutParentInput
    organization: sys_organizationCreateNestedOneWithoutDepartmentsInput
  }

  export type sys_deptUncheckedCreateWithoutUsersInput = {
    id: string
    pid?: string | null
    parent_link_ids?: string | null
    org_code: string
    org_id: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    children?: sys_deptUncheckedCreateNestedManyWithoutParentInput
  }

  export type sys_deptCreateOrConnectWithoutUsersInput = {
    where: sys_deptWhereUniqueInput
    create: XOR<sys_deptCreateWithoutUsersInput, sys_deptUncheckedCreateWithoutUsersInput>
  }

  export type sys_logCreateWithoutUserInput = {
    id?: string
    request_unique?: string | null
    description?: string | null
    log_type?: $Enums.log_type | null
    method?: string | null
    params?: string | null
    request_ip?: string | null
    time?: bigint | number | null
    user_name?: string | null
    address?: string | null
    exception_detail?: string | null
    create_time?: Date | string
  }

  export type sys_logUncheckedCreateWithoutUserInput = {
    id?: string
    request_unique?: string | null
    description?: string | null
    log_type?: $Enums.log_type | null
    method?: string | null
    params?: string | null
    request_ip?: string | null
    time?: bigint | number | null
    user_name?: string | null
    address?: string | null
    exception_detail?: string | null
    create_time?: Date | string
  }

  export type sys_logCreateOrConnectWithoutUserInput = {
    where: sys_logWhereUniqueInput
    create: XOR<sys_logCreateWithoutUserInput, sys_logUncheckedCreateWithoutUserInput>
  }

  export type sys_logCreateManyUserInputEnvelope = {
    data: sys_logCreateManyUserInput | sys_logCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sys_role_userCreateWithoutUserInput = {
    id: string
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
    role?: sys_roleCreateNestedOneWithoutRole_usersInput
  }

  export type sys_role_userUncheckedCreateWithoutUserInput = {
    id: string
    role_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_role_userCreateOrConnectWithoutUserInput = {
    where: sys_role_userWhereUniqueInput
    create: XOR<sys_role_userCreateWithoutUserInput, sys_role_userUncheckedCreateWithoutUserInput>
  }

  export type sys_role_userCreateManyUserInputEnvelope = {
    data: sys_role_userCreateManyUserInput | sys_role_userCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sys_organizationUpsertWithoutUsersInput = {
    update: XOR<sys_organizationUpdateWithoutUsersInput, sys_organizationUncheckedUpdateWithoutUsersInput>
    create: XOR<sys_organizationCreateWithoutUsersInput, sys_organizationUncheckedCreateWithoutUsersInput>
    where?: sys_organizationWhereInput
  }

  export type sys_organizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: sys_organizationWhereInput
    data: XOR<sys_organizationUpdateWithoutUsersInput, sys_organizationUncheckedUpdateWithoutUsersInput>
  }

  export type sys_organizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: sys_organizationUpdateOneWithoutChildrenNestedInput
    children?: sys_organizationUpdateManyWithoutParentNestedInput
    departments?: sys_deptUpdateManyWithoutOrganizationNestedInput
    roles?: sys_roleUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_organizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_organizationUncheckedUpdateManyWithoutParentNestedInput
    departments?: sys_deptUncheckedUpdateManyWithoutOrganizationNestedInput
    roles?: sys_roleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_deptUpsertWithoutUsersInput = {
    update: XOR<sys_deptUpdateWithoutUsersInput, sys_deptUncheckedUpdateWithoutUsersInput>
    create: XOR<sys_deptCreateWithoutUsersInput, sys_deptUncheckedCreateWithoutUsersInput>
    where?: sys_deptWhereInput
  }

  export type sys_deptUpdateToOneWithWhereWithoutUsersInput = {
    where?: sys_deptWhereInput
    data: XOR<sys_deptUpdateWithoutUsersInput, sys_deptUncheckedUpdateWithoutUsersInput>
  }

  export type sys_deptUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    parent?: sys_deptUpdateOneWithoutChildrenNestedInput
    children?: sys_deptUpdateManyWithoutParentNestedInput
    organization?: sys_organizationUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type sys_deptUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    children?: sys_deptUncheckedUpdateManyWithoutParentNestedInput
  }

  export type sys_logUpsertWithWhereUniqueWithoutUserInput = {
    where: sys_logWhereUniqueInput
    update: XOR<sys_logUpdateWithoutUserInput, sys_logUncheckedUpdateWithoutUserInput>
    create: XOR<sys_logCreateWithoutUserInput, sys_logUncheckedCreateWithoutUserInput>
  }

  export type sys_logUpdateWithWhereUniqueWithoutUserInput = {
    where: sys_logWhereUniqueInput
    data: XOR<sys_logUpdateWithoutUserInput, sys_logUncheckedUpdateWithoutUserInput>
  }

  export type sys_logUpdateManyWithWhereWithoutUserInput = {
    where: sys_logScalarWhereInput
    data: XOR<sys_logUpdateManyMutationInput, sys_logUncheckedUpdateManyWithoutUserInput>
  }

  export type sys_logScalarWhereInput = {
    AND?: sys_logScalarWhereInput | sys_logScalarWhereInput[]
    OR?: sys_logScalarWhereInput[]
    NOT?: sys_logScalarWhereInput | sys_logScalarWhereInput[]
    id?: StringFilter<"sys_log"> | string
    request_unique?: StringNullableFilter<"sys_log"> | string | null
    description?: StringNullableFilter<"sys_log"> | string | null
    log_type?: Enumlog_typeNullableFilter<"sys_log"> | $Enums.log_type | null
    method?: StringNullableFilter<"sys_log"> | string | null
    params?: StringNullableFilter<"sys_log"> | string | null
    request_ip?: StringNullableFilter<"sys_log"> | string | null
    time?: BigIntNullableFilter<"sys_log"> | bigint | number | null
    user_id?: StringNullableFilter<"sys_log"> | string | null
    user_name?: StringNullableFilter<"sys_log"> | string | null
    address?: StringNullableFilter<"sys_log"> | string | null
    exception_detail?: StringNullableFilter<"sys_log"> | string | null
    create_time?: DateTimeFilter<"sys_log"> | Date | string
  }

  export type sys_role_userUpsertWithWhereUniqueWithoutUserInput = {
    where: sys_role_userWhereUniqueInput
    update: XOR<sys_role_userUpdateWithoutUserInput, sys_role_userUncheckedUpdateWithoutUserInput>
    create: XOR<sys_role_userCreateWithoutUserInput, sys_role_userUncheckedCreateWithoutUserInput>
  }

  export type sys_role_userUpdateWithWhereUniqueWithoutUserInput = {
    where: sys_role_userWhereUniqueInput
    data: XOR<sys_role_userUpdateWithoutUserInput, sys_role_userUncheckedUpdateWithoutUserInput>
  }

  export type sys_role_userUpdateManyWithWhereWithoutUserInput = {
    where: sys_role_userScalarWhereInput
    data: XOR<sys_role_userUpdateManyMutationInput, sys_role_userUncheckedUpdateManyWithoutUserInput>
  }

  export type sys_role_userScalarWhereInput = {
    AND?: sys_role_userScalarWhereInput | sys_role_userScalarWhereInput[]
    OR?: sys_role_userScalarWhereInput[]
    NOT?: sys_role_userScalarWhereInput | sys_role_userScalarWhereInput[]
    id?: StringFilter<"sys_role_user"> | string
    role_id?: StringNullableFilter<"sys_role_user"> | string | null
    user_id?: StringNullableFilter<"sys_role_user"> | string | null
    create_by?: StringNullableFilter<"sys_role_user"> | string | null
    create_time?: DateTimeNullableFilter<"sys_role_user"> | Date | string | null
    deleted?: BoolFilter<"sys_role_user"> | boolean
  }

  export type sys_userCreateWithoutSys_logInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_code?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
    organization?: sys_organizationCreateNestedOneWithoutUsersInput
    department?: sys_deptCreateNestedOneWithoutUsersInput
    role_users?: sys_role_userCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutSys_logInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_id?: string | null
    org_code?: string | null
    dept_id?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
    role_users?: sys_role_userUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutSys_logInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutSys_logInput, sys_userUncheckedCreateWithoutSys_logInput>
  }

  export type sys_userUpsertWithoutSys_logInput = {
    update: XOR<sys_userUpdateWithoutSys_logInput, sys_userUncheckedUpdateWithoutSys_logInput>
    create: XOR<sys_userCreateWithoutSys_logInput, sys_userUncheckedCreateWithoutSys_logInput>
    where?: sys_userWhereInput
  }

  export type sys_userUpdateToOneWithWhereWithoutSys_logInput = {
    where?: sys_userWhereInput
    data: XOR<sys_userUpdateWithoutSys_logInput, sys_userUncheckedUpdateWithoutSys_logInput>
  }

  export type sys_userUpdateWithoutSys_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: sys_organizationUpdateOneWithoutUsersNestedInput
    department?: sys_deptUpdateOneWithoutUsersNestedInput
    role_users?: sys_role_userUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutSys_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role_users?: sys_role_userUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sys_menuCreateWithoutChildrenInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    create_by?: string | null
    update_by?: string | null
    name?: string | null
    url?: string | null
    perms?: string | null
    type?: number
    mode?: string | null
    icon?: string | null
    color?: string | null
    routeUrl?: string | null
    breadCrumb?: string | null
    componentName?: string | null
    componentPath?: string | null
    orderNum?: number
    display?: boolean
    deleted?: boolean
    parent?: sys_menuCreateNestedOneWithoutChildrenInput
    role_menus?: sys_role_menuCreateNestedManyWithoutMenuInput
  }

  export type sys_menuUncheckedCreateWithoutChildrenInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    create_by?: string | null
    update_by?: string | null
    pid?: string | null
    name?: string | null
    url?: string | null
    perms?: string | null
    type?: number
    mode?: string | null
    icon?: string | null
    color?: string | null
    routeUrl?: string | null
    breadCrumb?: string | null
    componentName?: string | null
    componentPath?: string | null
    orderNum?: number
    display?: boolean
    deleted?: boolean
    role_menus?: sys_role_menuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type sys_menuCreateOrConnectWithoutChildrenInput = {
    where: sys_menuWhereUniqueInput
    create: XOR<sys_menuCreateWithoutChildrenInput, sys_menuUncheckedCreateWithoutChildrenInput>
  }

  export type sys_menuCreateWithoutParentInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    create_by?: string | null
    update_by?: string | null
    name?: string | null
    url?: string | null
    perms?: string | null
    type?: number
    mode?: string | null
    icon?: string | null
    color?: string | null
    routeUrl?: string | null
    breadCrumb?: string | null
    componentName?: string | null
    componentPath?: string | null
    orderNum?: number
    display?: boolean
    deleted?: boolean
    children?: sys_menuCreateNestedManyWithoutParentInput
    role_menus?: sys_role_menuCreateNestedManyWithoutMenuInput
  }

  export type sys_menuUncheckedCreateWithoutParentInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    create_by?: string | null
    update_by?: string | null
    name?: string | null
    url?: string | null
    perms?: string | null
    type?: number
    mode?: string | null
    icon?: string | null
    color?: string | null
    routeUrl?: string | null
    breadCrumb?: string | null
    componentName?: string | null
    componentPath?: string | null
    orderNum?: number
    display?: boolean
    deleted?: boolean
    children?: sys_menuUncheckedCreateNestedManyWithoutParentInput
    role_menus?: sys_role_menuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type sys_menuCreateOrConnectWithoutParentInput = {
    where: sys_menuWhereUniqueInput
    create: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput>
  }

  export type sys_menuCreateManyParentInputEnvelope = {
    data: sys_menuCreateManyParentInput | sys_menuCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type sys_role_menuCreateWithoutMenuInput = {
    id: string
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
    role?: sys_roleCreateNestedOneWithoutRole_menusInput
  }

  export type sys_role_menuUncheckedCreateWithoutMenuInput = {
    id: string
    role_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_role_menuCreateOrConnectWithoutMenuInput = {
    where: sys_role_menuWhereUniqueInput
    create: XOR<sys_role_menuCreateWithoutMenuInput, sys_role_menuUncheckedCreateWithoutMenuInput>
  }

  export type sys_role_menuCreateManyMenuInputEnvelope = {
    data: sys_role_menuCreateManyMenuInput | sys_role_menuCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type sys_menuUpsertWithoutChildrenInput = {
    update: XOR<sys_menuUpdateWithoutChildrenInput, sys_menuUncheckedUpdateWithoutChildrenInput>
    create: XOR<sys_menuCreateWithoutChildrenInput, sys_menuUncheckedCreateWithoutChildrenInput>
    where?: sys_menuWhereInput
  }

  export type sys_menuUpdateToOneWithWhereWithoutChildrenInput = {
    where?: sys_menuWhereInput
    data: XOR<sys_menuUpdateWithoutChildrenInput, sys_menuUncheckedUpdateWithoutChildrenInput>
  }

  export type sys_menuUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    parent?: sys_menuUpdateOneWithoutChildrenNestedInput
    role_menus?: sys_role_menuUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role_menus?: sys_role_menuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUpsertWithWhereUniqueWithoutParentInput = {
    where: sys_menuWhereUniqueInput
    update: XOR<sys_menuUpdateWithoutParentInput, sys_menuUncheckedUpdateWithoutParentInput>
    create: XOR<sys_menuCreateWithoutParentInput, sys_menuUncheckedCreateWithoutParentInput>
  }

  export type sys_menuUpdateWithWhereUniqueWithoutParentInput = {
    where: sys_menuWhereUniqueInput
    data: XOR<sys_menuUpdateWithoutParentInput, sys_menuUncheckedUpdateWithoutParentInput>
  }

  export type sys_menuUpdateManyWithWhereWithoutParentInput = {
    where: sys_menuScalarWhereInput
    data: XOR<sys_menuUpdateManyMutationInput, sys_menuUncheckedUpdateManyWithoutParentInput>
  }

  export type sys_menuScalarWhereInput = {
    AND?: sys_menuScalarWhereInput | sys_menuScalarWhereInput[]
    OR?: sys_menuScalarWhereInput[]
    NOT?: sys_menuScalarWhereInput | sys_menuScalarWhereInput[]
    id?: StringFilter<"sys_menu"> | string
    create_time?: DateTimeFilter<"sys_menu"> | Date | string
    update_time?: DateTimeFilter<"sys_menu"> | Date | string
    create_by?: StringNullableFilter<"sys_menu"> | string | null
    update_by?: StringNullableFilter<"sys_menu"> | string | null
    pid?: StringNullableFilter<"sys_menu"> | string | null
    name?: StringNullableFilter<"sys_menu"> | string | null
    url?: StringNullableFilter<"sys_menu"> | string | null
    perms?: StringNullableFilter<"sys_menu"> | string | null
    type?: IntFilter<"sys_menu"> | number
    mode?: StringNullableFilter<"sys_menu"> | string | null
    icon?: StringNullableFilter<"sys_menu"> | string | null
    color?: StringNullableFilter<"sys_menu"> | string | null
    routeUrl?: StringNullableFilter<"sys_menu"> | string | null
    breadCrumb?: StringNullableFilter<"sys_menu"> | string | null
    componentName?: StringNullableFilter<"sys_menu"> | string | null
    componentPath?: StringNullableFilter<"sys_menu"> | string | null
    orderNum?: IntFilter<"sys_menu"> | number
    display?: BoolFilter<"sys_menu"> | boolean
    deleted?: BoolFilter<"sys_menu"> | boolean
  }

  export type sys_role_menuUpsertWithWhereUniqueWithoutMenuInput = {
    where: sys_role_menuWhereUniqueInput
    update: XOR<sys_role_menuUpdateWithoutMenuInput, sys_role_menuUncheckedUpdateWithoutMenuInput>
    create: XOR<sys_role_menuCreateWithoutMenuInput, sys_role_menuUncheckedCreateWithoutMenuInput>
  }

  export type sys_role_menuUpdateWithWhereUniqueWithoutMenuInput = {
    where: sys_role_menuWhereUniqueInput
    data: XOR<sys_role_menuUpdateWithoutMenuInput, sys_role_menuUncheckedUpdateWithoutMenuInput>
  }

  export type sys_role_menuUpdateManyWithWhereWithoutMenuInput = {
    where: sys_role_menuScalarWhereInput
    data: XOR<sys_role_menuUpdateManyMutationInput, sys_role_menuUncheckedUpdateManyWithoutMenuInput>
  }

  export type sys_role_menuScalarWhereInput = {
    AND?: sys_role_menuScalarWhereInput | sys_role_menuScalarWhereInput[]
    OR?: sys_role_menuScalarWhereInput[]
    NOT?: sys_role_menuScalarWhereInput | sys_role_menuScalarWhereInput[]
    id?: StringFilter<"sys_role_menu"> | string
    role_id?: StringNullableFilter<"sys_role_menu"> | string | null
    menu_id?: StringNullableFilter<"sys_role_menu"> | string | null
    create_by?: StringNullableFilter<"sys_role_menu"> | string | null
    create_time?: DateTimeNullableFilter<"sys_role_menu"> | Date | string | null
    deleted?: BoolFilter<"sys_role_menu"> | boolean
  }

  export type sys_organizationCreateWithoutChildrenInput = {
    id: string
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    parent?: sys_organizationCreateNestedOneWithoutChildrenInput
    departments?: sys_deptCreateNestedManyWithoutOrganizationInput
    roles?: sys_roleCreateNestedManyWithoutOrganizationInput
    users?: sys_userCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationUncheckedCreateWithoutChildrenInput = {
    id: string
    pid?: string | null
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    departments?: sys_deptUncheckedCreateNestedManyWithoutOrganizationInput
    roles?: sys_roleUncheckedCreateNestedManyWithoutOrganizationInput
    users?: sys_userUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationCreateOrConnectWithoutChildrenInput = {
    where: sys_organizationWhereUniqueInput
    create: XOR<sys_organizationCreateWithoutChildrenInput, sys_organizationUncheckedCreateWithoutChildrenInput>
  }

  export type sys_organizationCreateWithoutParentInput = {
    id: string
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    children?: sys_organizationCreateNestedManyWithoutParentInput
    departments?: sys_deptCreateNestedManyWithoutOrganizationInput
    roles?: sys_roleCreateNestedManyWithoutOrganizationInput
    users?: sys_userCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationUncheckedCreateWithoutParentInput = {
    id: string
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    children?: sys_organizationUncheckedCreateNestedManyWithoutParentInput
    departments?: sys_deptUncheckedCreateNestedManyWithoutOrganizationInput
    roles?: sys_roleUncheckedCreateNestedManyWithoutOrganizationInput
    users?: sys_userUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationCreateOrConnectWithoutParentInput = {
    where: sys_organizationWhereUniqueInput
    create: XOR<sys_organizationCreateWithoutParentInput, sys_organizationUncheckedCreateWithoutParentInput>
  }

  export type sys_organizationCreateManyParentInputEnvelope = {
    data: sys_organizationCreateManyParentInput | sys_organizationCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type sys_deptCreateWithoutOrganizationInput = {
    id: string
    parent_link_ids?: string | null
    org_code: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    parent?: sys_deptCreateNestedOneWithoutChildrenInput
    children?: sys_deptCreateNestedManyWithoutParentInput
    users?: sys_userCreateNestedManyWithoutDepartmentInput
  }

  export type sys_deptUncheckedCreateWithoutOrganizationInput = {
    id: string
    pid?: string | null
    parent_link_ids?: string | null
    org_code: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    children?: sys_deptUncheckedCreateNestedManyWithoutParentInput
    users?: sys_userUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type sys_deptCreateOrConnectWithoutOrganizationInput = {
    where: sys_deptWhereUniqueInput
    create: XOR<sys_deptCreateWithoutOrganizationInput, sys_deptUncheckedCreateWithoutOrganizationInput>
  }

  export type sys_deptCreateManyOrganizationInputEnvelope = {
    data: sys_deptCreateManyOrganizationInput | sys_deptCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type sys_roleCreateWithoutOrganizationInput = {
    id: string
    org_code?: string | null
    name?: string | null
    description?: string | null
    data_scope_type?: $Enums.data_scope_type | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    role_menus?: sys_role_menuCreateNestedManyWithoutRoleInput
    role_users?: sys_role_userCreateNestedManyWithoutRoleInput
  }

  export type sys_roleUncheckedCreateWithoutOrganizationInput = {
    id: string
    org_code?: string | null
    name?: string | null
    description?: string | null
    data_scope_type?: $Enums.data_scope_type | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    role_menus?: sys_role_menuUncheckedCreateNestedManyWithoutRoleInput
    role_users?: sys_role_userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type sys_roleCreateOrConnectWithoutOrganizationInput = {
    where: sys_roleWhereUniqueInput
    create: XOR<sys_roleCreateWithoutOrganizationInput, sys_roleUncheckedCreateWithoutOrganizationInput>
  }

  export type sys_roleCreateManyOrganizationInputEnvelope = {
    data: sys_roleCreateManyOrganizationInput | sys_roleCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type sys_userCreateWithoutOrganizationInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_code?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
    department?: sys_deptCreateNestedOneWithoutUsersInput
    sys_log?: sys_logCreateNestedManyWithoutUserInput
    role_users?: sys_role_userCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutOrganizationInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_code?: string | null
    dept_id?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
    sys_log?: sys_logUncheckedCreateNestedManyWithoutUserInput
    role_users?: sys_role_userUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutOrganizationInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutOrganizationInput, sys_userUncheckedCreateWithoutOrganizationInput>
  }

  export type sys_userCreateManyOrganizationInputEnvelope = {
    data: sys_userCreateManyOrganizationInput | sys_userCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type sys_organizationUpsertWithoutChildrenInput = {
    update: XOR<sys_organizationUpdateWithoutChildrenInput, sys_organizationUncheckedUpdateWithoutChildrenInput>
    create: XOR<sys_organizationCreateWithoutChildrenInput, sys_organizationUncheckedCreateWithoutChildrenInput>
    where?: sys_organizationWhereInput
  }

  export type sys_organizationUpdateToOneWithWhereWithoutChildrenInput = {
    where?: sys_organizationWhereInput
    data: XOR<sys_organizationUpdateWithoutChildrenInput, sys_organizationUncheckedUpdateWithoutChildrenInput>
  }

  export type sys_organizationUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: sys_organizationUpdateOneWithoutChildrenNestedInput
    departments?: sys_deptUpdateManyWithoutOrganizationNestedInput
    roles?: sys_roleUpdateManyWithoutOrganizationNestedInput
    users?: sys_userUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_organizationUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    departments?: sys_deptUncheckedUpdateManyWithoutOrganizationNestedInput
    roles?: sys_roleUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: sys_userUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_organizationUpsertWithWhereUniqueWithoutParentInput = {
    where: sys_organizationWhereUniqueInput
    update: XOR<sys_organizationUpdateWithoutParentInput, sys_organizationUncheckedUpdateWithoutParentInput>
    create: XOR<sys_organizationCreateWithoutParentInput, sys_organizationUncheckedCreateWithoutParentInput>
  }

  export type sys_organizationUpdateWithWhereUniqueWithoutParentInput = {
    where: sys_organizationWhereUniqueInput
    data: XOR<sys_organizationUpdateWithoutParentInput, sys_organizationUncheckedUpdateWithoutParentInput>
  }

  export type sys_organizationUpdateManyWithWhereWithoutParentInput = {
    where: sys_organizationScalarWhereInput
    data: XOR<sys_organizationUpdateManyMutationInput, sys_organizationUncheckedUpdateManyWithoutParentInput>
  }

  export type sys_organizationScalarWhereInput = {
    AND?: sys_organizationScalarWhereInput | sys_organizationScalarWhereInput[]
    OR?: sys_organizationScalarWhereInput[]
    NOT?: sys_organizationScalarWhereInput | sys_organizationScalarWhereInput[]
    id?: StringFilter<"sys_organization"> | string
    pid?: StringNullableFilter<"sys_organization"> | string | null
    code?: StringFilter<"sys_organization"> | string
    name?: StringNullableFilter<"sys_organization"> | string | null
    alias?: StringNullableFilter<"sys_organization"> | string | null
    description?: StringNullableFilter<"sys_organization"> | string | null
    full_path?: StringNullableFilter<"sys_organization"> | string | null
    sort?: IntFilter<"sys_organization"> | number
    create_by?: StringNullableFilter<"sys_organization"> | string | null
    update_by?: StringNullableFilter<"sys_organization"> | string | null
    create_time?: DateTimeNullableFilter<"sys_organization"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_organization"> | Date | string | null
    deleted?: BoolFilter<"sys_organization"> | boolean
    lng?: DecimalNullableFilter<"sys_organization"> | Decimal | DecimalJsLike | number | string | null
    lat?: DecimalNullableFilter<"sys_organization"> | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: StringNullableFilter<"sys_organization"> | string | null
    car_clear_sys_org_id?: StringNullableFilter<"sys_organization"> | string | null
  }

  export type sys_deptUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: sys_deptWhereUniqueInput
    update: XOR<sys_deptUpdateWithoutOrganizationInput, sys_deptUncheckedUpdateWithoutOrganizationInput>
    create: XOR<sys_deptCreateWithoutOrganizationInput, sys_deptUncheckedCreateWithoutOrganizationInput>
  }

  export type sys_deptUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: sys_deptWhereUniqueInput
    data: XOR<sys_deptUpdateWithoutOrganizationInput, sys_deptUncheckedUpdateWithoutOrganizationInput>
  }

  export type sys_deptUpdateManyWithWhereWithoutOrganizationInput = {
    where: sys_deptScalarWhereInput
    data: XOR<sys_deptUpdateManyMutationInput, sys_deptUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type sys_deptScalarWhereInput = {
    AND?: sys_deptScalarWhereInput | sys_deptScalarWhereInput[]
    OR?: sys_deptScalarWhereInput[]
    NOT?: sys_deptScalarWhereInput | sys_deptScalarWhereInput[]
    id?: StringFilter<"sys_dept"> | string
    pid?: StringNullableFilter<"sys_dept"> | string | null
    parent_link_ids?: StringNullableFilter<"sys_dept"> | string | null
    org_code?: StringFilter<"sys_dept"> | string
    org_id?: StringFilter<"sys_dept"> | string
    name?: StringFilter<"sys_dept"> | string
    display?: BoolFilter<"sys_dept"> | boolean
    sort?: IntFilter<"sys_dept"> | number
    create_by?: StringNullableFilter<"sys_dept"> | string | null
    update_by?: StringNullableFilter<"sys_dept"> | string | null
    create_time?: DateTimeNullableFilter<"sys_dept"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_dept"> | Date | string | null
    deleted?: BoolFilter<"sys_dept"> | boolean
  }

  export type sys_roleUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: sys_roleWhereUniqueInput
    update: XOR<sys_roleUpdateWithoutOrganizationInput, sys_roleUncheckedUpdateWithoutOrganizationInput>
    create: XOR<sys_roleCreateWithoutOrganizationInput, sys_roleUncheckedCreateWithoutOrganizationInput>
  }

  export type sys_roleUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: sys_roleWhereUniqueInput
    data: XOR<sys_roleUpdateWithoutOrganizationInput, sys_roleUncheckedUpdateWithoutOrganizationInput>
  }

  export type sys_roleUpdateManyWithWhereWithoutOrganizationInput = {
    where: sys_roleScalarWhereInput
    data: XOR<sys_roleUpdateManyMutationInput, sys_roleUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type sys_roleScalarWhereInput = {
    AND?: sys_roleScalarWhereInput | sys_roleScalarWhereInput[]
    OR?: sys_roleScalarWhereInput[]
    NOT?: sys_roleScalarWhereInput | sys_roleScalarWhereInput[]
    id?: StringFilter<"sys_role"> | string
    org_id?: StringNullableFilter<"sys_role"> | string | null
    org_code?: StringNullableFilter<"sys_role"> | string | null
    name?: StringNullableFilter<"sys_role"> | string | null
    description?: StringNullableFilter<"sys_role"> | string | null
    data_scope_type?: Enumdata_scope_typeNullableFilter<"sys_role"> | $Enums.data_scope_type | null
    create_by?: StringNullableFilter<"sys_role"> | string | null
    update_by?: StringNullableFilter<"sys_role"> | string | null
    create_time?: DateTimeNullableFilter<"sys_role"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_role"> | Date | string | null
    deleted?: BoolFilter<"sys_role"> | boolean
  }

  export type sys_userUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: sys_userWhereUniqueInput
    update: XOR<sys_userUpdateWithoutOrganizationInput, sys_userUncheckedUpdateWithoutOrganizationInput>
    create: XOR<sys_userCreateWithoutOrganizationInput, sys_userUncheckedCreateWithoutOrganizationInput>
  }

  export type sys_userUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: sys_userWhereUniqueInput
    data: XOR<sys_userUpdateWithoutOrganizationInput, sys_userUncheckedUpdateWithoutOrganizationInput>
  }

  export type sys_userUpdateManyWithWhereWithoutOrganizationInput = {
    where: sys_userScalarWhereInput
    data: XOR<sys_userUpdateManyMutationInput, sys_userUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type sys_userScalarWhereInput = {
    AND?: sys_userScalarWhereInput | sys_userScalarWhereInput[]
    OR?: sys_userScalarWhereInput[]
    NOT?: sys_userScalarWhereInput | sys_userScalarWhereInput[]
    id?: StringFilter<"sys_user"> | string
    create_time?: DateTimeFilter<"sys_user"> | Date | string
    update_time?: DateTimeFilter<"sys_user"> | Date | string
    org_id?: StringNullableFilter<"sys_user"> | string | null
    org_code?: StringNullableFilter<"sys_user"> | string | null
    dept_id?: StringNullableFilter<"sys_user"> | string | null
    username?: StringFilter<"sys_user"> | string
    password?: StringNullableFilter<"sys_user"> | string | null
    nickname?: StringNullableFilter<"sys_user"> | string | null
    real_name?: StringNullableFilter<"sys_user"> | string | null
    email?: StringNullableFilter<"sys_user"> | string | null
    phone?: StringNullableFilter<"sys_user"> | string | null
    job_no?: StringNullableFilter<"sys_user"> | string | null
    status?: IntFilter<"sys_user"> | number
    hidden?: BoolFilter<"sys_user"> | boolean
    admin_flag?: BoolFilter<"sys_user"> | boolean
    avatar?: StringNullableFilter<"sys_user"> | string | null
    client_id?: StringNullableFilter<"sys_user"> | string | null
    sort?: IntFilter<"sys_user"> | number
    user_function_codes?: StringNullableFilter<"sys_user"> | string | null
    deleted?: BoolFilter<"sys_user"> | boolean
  }

  export type sys_deptCreateWithoutChildrenInput = {
    id: string
    parent_link_ids?: string | null
    org_code: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    parent?: sys_deptCreateNestedOneWithoutChildrenInput
    organization: sys_organizationCreateNestedOneWithoutDepartmentsInput
    users?: sys_userCreateNestedManyWithoutDepartmentInput
  }

  export type sys_deptUncheckedCreateWithoutChildrenInput = {
    id: string
    pid?: string | null
    parent_link_ids?: string | null
    org_code: string
    org_id: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    users?: sys_userUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type sys_deptCreateOrConnectWithoutChildrenInput = {
    where: sys_deptWhereUniqueInput
    create: XOR<sys_deptCreateWithoutChildrenInput, sys_deptUncheckedCreateWithoutChildrenInput>
  }

  export type sys_deptCreateWithoutParentInput = {
    id: string
    parent_link_ids?: string | null
    org_code: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    children?: sys_deptCreateNestedManyWithoutParentInput
    organization: sys_organizationCreateNestedOneWithoutDepartmentsInput
    users?: sys_userCreateNestedManyWithoutDepartmentInput
  }

  export type sys_deptUncheckedCreateWithoutParentInput = {
    id: string
    parent_link_ids?: string | null
    org_code: string
    org_id: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    children?: sys_deptUncheckedCreateNestedManyWithoutParentInput
    users?: sys_userUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type sys_deptCreateOrConnectWithoutParentInput = {
    where: sys_deptWhereUniqueInput
    create: XOR<sys_deptCreateWithoutParentInput, sys_deptUncheckedCreateWithoutParentInput>
  }

  export type sys_deptCreateManyParentInputEnvelope = {
    data: sys_deptCreateManyParentInput | sys_deptCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type sys_organizationCreateWithoutDepartmentsInput = {
    id: string
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    parent?: sys_organizationCreateNestedOneWithoutChildrenInput
    children?: sys_organizationCreateNestedManyWithoutParentInput
    roles?: sys_roleCreateNestedManyWithoutOrganizationInput
    users?: sys_userCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationUncheckedCreateWithoutDepartmentsInput = {
    id: string
    pid?: string | null
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    children?: sys_organizationUncheckedCreateNestedManyWithoutParentInput
    roles?: sys_roleUncheckedCreateNestedManyWithoutOrganizationInput
    users?: sys_userUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationCreateOrConnectWithoutDepartmentsInput = {
    where: sys_organizationWhereUniqueInput
    create: XOR<sys_organizationCreateWithoutDepartmentsInput, sys_organizationUncheckedCreateWithoutDepartmentsInput>
  }

  export type sys_userCreateWithoutDepartmentInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_code?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
    organization?: sys_organizationCreateNestedOneWithoutUsersInput
    sys_log?: sys_logCreateNestedManyWithoutUserInput
    role_users?: sys_role_userCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutDepartmentInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_id?: string | null
    org_code?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
    sys_log?: sys_logUncheckedCreateNestedManyWithoutUserInput
    role_users?: sys_role_userUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutDepartmentInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutDepartmentInput, sys_userUncheckedCreateWithoutDepartmentInput>
  }

  export type sys_userCreateManyDepartmentInputEnvelope = {
    data: sys_userCreateManyDepartmentInput | sys_userCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type sys_deptUpsertWithoutChildrenInput = {
    update: XOR<sys_deptUpdateWithoutChildrenInput, sys_deptUncheckedUpdateWithoutChildrenInput>
    create: XOR<sys_deptCreateWithoutChildrenInput, sys_deptUncheckedCreateWithoutChildrenInput>
    where?: sys_deptWhereInput
  }

  export type sys_deptUpdateToOneWithWhereWithoutChildrenInput = {
    where?: sys_deptWhereInput
    data: XOR<sys_deptUpdateWithoutChildrenInput, sys_deptUncheckedUpdateWithoutChildrenInput>
  }

  export type sys_deptUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    parent?: sys_deptUpdateOneWithoutChildrenNestedInput
    organization?: sys_organizationUpdateOneRequiredWithoutDepartmentsNestedInput
    users?: sys_userUpdateManyWithoutDepartmentNestedInput
  }

  export type sys_deptUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: sys_userUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type sys_deptUpsertWithWhereUniqueWithoutParentInput = {
    where: sys_deptWhereUniqueInput
    update: XOR<sys_deptUpdateWithoutParentInput, sys_deptUncheckedUpdateWithoutParentInput>
    create: XOR<sys_deptCreateWithoutParentInput, sys_deptUncheckedCreateWithoutParentInput>
  }

  export type sys_deptUpdateWithWhereUniqueWithoutParentInput = {
    where: sys_deptWhereUniqueInput
    data: XOR<sys_deptUpdateWithoutParentInput, sys_deptUncheckedUpdateWithoutParentInput>
  }

  export type sys_deptUpdateManyWithWhereWithoutParentInput = {
    where: sys_deptScalarWhereInput
    data: XOR<sys_deptUpdateManyMutationInput, sys_deptUncheckedUpdateManyWithoutParentInput>
  }

  export type sys_organizationUpsertWithoutDepartmentsInput = {
    update: XOR<sys_organizationUpdateWithoutDepartmentsInput, sys_organizationUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<sys_organizationCreateWithoutDepartmentsInput, sys_organizationUncheckedCreateWithoutDepartmentsInput>
    where?: sys_organizationWhereInput
  }

  export type sys_organizationUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: sys_organizationWhereInput
    data: XOR<sys_organizationUpdateWithoutDepartmentsInput, sys_organizationUncheckedUpdateWithoutDepartmentsInput>
  }

  export type sys_organizationUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: sys_organizationUpdateOneWithoutChildrenNestedInput
    children?: sys_organizationUpdateManyWithoutParentNestedInput
    roles?: sys_roleUpdateManyWithoutOrganizationNestedInput
    users?: sys_userUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_organizationUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_organizationUncheckedUpdateManyWithoutParentNestedInput
    roles?: sys_roleUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: sys_userUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_userUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: sys_userWhereUniqueInput
    update: XOR<sys_userUpdateWithoutDepartmentInput, sys_userUncheckedUpdateWithoutDepartmentInput>
    create: XOR<sys_userCreateWithoutDepartmentInput, sys_userUncheckedCreateWithoutDepartmentInput>
  }

  export type sys_userUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: sys_userWhereUniqueInput
    data: XOR<sys_userUpdateWithoutDepartmentInput, sys_userUncheckedUpdateWithoutDepartmentInput>
  }

  export type sys_userUpdateManyWithWhereWithoutDepartmentInput = {
    where: sys_userScalarWhereInput
    data: XOR<sys_userUpdateManyMutationInput, sys_userUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type sys_organizationCreateWithoutRolesInput = {
    id: string
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    parent?: sys_organizationCreateNestedOneWithoutChildrenInput
    children?: sys_organizationCreateNestedManyWithoutParentInput
    departments?: sys_deptCreateNestedManyWithoutOrganizationInput
    users?: sys_userCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationUncheckedCreateWithoutRolesInput = {
    id: string
    pid?: string | null
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
    children?: sys_organizationUncheckedCreateNestedManyWithoutParentInput
    departments?: sys_deptUncheckedCreateNestedManyWithoutOrganizationInput
    users?: sys_userUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type sys_organizationCreateOrConnectWithoutRolesInput = {
    where: sys_organizationWhereUniqueInput
    create: XOR<sys_organizationCreateWithoutRolesInput, sys_organizationUncheckedCreateWithoutRolesInput>
  }

  export type sys_role_menuCreateWithoutRoleInput = {
    id: string
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
    menu?: sys_menuCreateNestedOneWithoutRole_menusInput
  }

  export type sys_role_menuUncheckedCreateWithoutRoleInput = {
    id: string
    menu_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_role_menuCreateOrConnectWithoutRoleInput = {
    where: sys_role_menuWhereUniqueInput
    create: XOR<sys_role_menuCreateWithoutRoleInput, sys_role_menuUncheckedCreateWithoutRoleInput>
  }

  export type sys_role_menuCreateManyRoleInputEnvelope = {
    data: sys_role_menuCreateManyRoleInput | sys_role_menuCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type sys_role_userCreateWithoutRoleInput = {
    id: string
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
    user?: sys_userCreateNestedOneWithoutRole_usersInput
  }

  export type sys_role_userUncheckedCreateWithoutRoleInput = {
    id: string
    user_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_role_userCreateOrConnectWithoutRoleInput = {
    where: sys_role_userWhereUniqueInput
    create: XOR<sys_role_userCreateWithoutRoleInput, sys_role_userUncheckedCreateWithoutRoleInput>
  }

  export type sys_role_userCreateManyRoleInputEnvelope = {
    data: sys_role_userCreateManyRoleInput | sys_role_userCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type sys_organizationUpsertWithoutRolesInput = {
    update: XOR<sys_organizationUpdateWithoutRolesInput, sys_organizationUncheckedUpdateWithoutRolesInput>
    create: XOR<sys_organizationCreateWithoutRolesInput, sys_organizationUncheckedCreateWithoutRolesInput>
    where?: sys_organizationWhereInput
  }

  export type sys_organizationUpdateToOneWithWhereWithoutRolesInput = {
    where?: sys_organizationWhereInput
    data: XOR<sys_organizationUpdateWithoutRolesInput, sys_organizationUncheckedUpdateWithoutRolesInput>
  }

  export type sys_organizationUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: sys_organizationUpdateOneWithoutChildrenNestedInput
    children?: sys_organizationUpdateManyWithoutParentNestedInput
    departments?: sys_deptUpdateManyWithoutOrganizationNestedInput
    users?: sys_userUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_organizationUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_organizationUncheckedUpdateManyWithoutParentNestedInput
    departments?: sys_deptUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: sys_userUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_role_menuUpsertWithWhereUniqueWithoutRoleInput = {
    where: sys_role_menuWhereUniqueInput
    update: XOR<sys_role_menuUpdateWithoutRoleInput, sys_role_menuUncheckedUpdateWithoutRoleInput>
    create: XOR<sys_role_menuCreateWithoutRoleInput, sys_role_menuUncheckedCreateWithoutRoleInput>
  }

  export type sys_role_menuUpdateWithWhereUniqueWithoutRoleInput = {
    where: sys_role_menuWhereUniqueInput
    data: XOR<sys_role_menuUpdateWithoutRoleInput, sys_role_menuUncheckedUpdateWithoutRoleInput>
  }

  export type sys_role_menuUpdateManyWithWhereWithoutRoleInput = {
    where: sys_role_menuScalarWhereInput
    data: XOR<sys_role_menuUpdateManyMutationInput, sys_role_menuUncheckedUpdateManyWithoutRoleInput>
  }

  export type sys_role_userUpsertWithWhereUniqueWithoutRoleInput = {
    where: sys_role_userWhereUniqueInput
    update: XOR<sys_role_userUpdateWithoutRoleInput, sys_role_userUncheckedUpdateWithoutRoleInput>
    create: XOR<sys_role_userCreateWithoutRoleInput, sys_role_userUncheckedCreateWithoutRoleInput>
  }

  export type sys_role_userUpdateWithWhereUniqueWithoutRoleInput = {
    where: sys_role_userWhereUniqueInput
    data: XOR<sys_role_userUpdateWithoutRoleInput, sys_role_userUncheckedUpdateWithoutRoleInput>
  }

  export type sys_role_userUpdateManyWithWhereWithoutRoleInput = {
    where: sys_role_userScalarWhereInput
    data: XOR<sys_role_userUpdateManyMutationInput, sys_role_userUncheckedUpdateManyWithoutRoleInput>
  }

  export type sys_roleCreateWithoutRole_menusInput = {
    id: string
    org_code?: string | null
    name?: string | null
    description?: string | null
    data_scope_type?: $Enums.data_scope_type | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    organization?: sys_organizationCreateNestedOneWithoutRolesInput
    role_users?: sys_role_userCreateNestedManyWithoutRoleInput
  }

  export type sys_roleUncheckedCreateWithoutRole_menusInput = {
    id: string
    org_id?: string | null
    org_code?: string | null
    name?: string | null
    description?: string | null
    data_scope_type?: $Enums.data_scope_type | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    role_users?: sys_role_userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type sys_roleCreateOrConnectWithoutRole_menusInput = {
    where: sys_roleWhereUniqueInput
    create: XOR<sys_roleCreateWithoutRole_menusInput, sys_roleUncheckedCreateWithoutRole_menusInput>
  }

  export type sys_menuCreateWithoutRole_menusInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    create_by?: string | null
    update_by?: string | null
    name?: string | null
    url?: string | null
    perms?: string | null
    type?: number
    mode?: string | null
    icon?: string | null
    color?: string | null
    routeUrl?: string | null
    breadCrumb?: string | null
    componentName?: string | null
    componentPath?: string | null
    orderNum?: number
    display?: boolean
    deleted?: boolean
    parent?: sys_menuCreateNestedOneWithoutChildrenInput
    children?: sys_menuCreateNestedManyWithoutParentInput
  }

  export type sys_menuUncheckedCreateWithoutRole_menusInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    create_by?: string | null
    update_by?: string | null
    pid?: string | null
    name?: string | null
    url?: string | null
    perms?: string | null
    type?: number
    mode?: string | null
    icon?: string | null
    color?: string | null
    routeUrl?: string | null
    breadCrumb?: string | null
    componentName?: string | null
    componentPath?: string | null
    orderNum?: number
    display?: boolean
    deleted?: boolean
    children?: sys_menuUncheckedCreateNestedManyWithoutParentInput
  }

  export type sys_menuCreateOrConnectWithoutRole_menusInput = {
    where: sys_menuWhereUniqueInput
    create: XOR<sys_menuCreateWithoutRole_menusInput, sys_menuUncheckedCreateWithoutRole_menusInput>
  }

  export type sys_roleUpsertWithoutRole_menusInput = {
    update: XOR<sys_roleUpdateWithoutRole_menusInput, sys_roleUncheckedUpdateWithoutRole_menusInput>
    create: XOR<sys_roleCreateWithoutRole_menusInput, sys_roleUncheckedCreateWithoutRole_menusInput>
    where?: sys_roleWhereInput
  }

  export type sys_roleUpdateToOneWithWhereWithoutRole_menusInput = {
    where?: sys_roleWhereInput
    data: XOR<sys_roleUpdateWithoutRole_menusInput, sys_roleUncheckedUpdateWithoutRole_menusInput>
  }

  export type sys_roleUpdateWithoutRole_menusInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: sys_organizationUpdateOneWithoutRolesNestedInput
    role_users?: sys_role_userUpdateManyWithoutRoleNestedInput
  }

  export type sys_roleUncheckedUpdateWithoutRole_menusInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role_users?: sys_role_userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type sys_menuUpsertWithoutRole_menusInput = {
    update: XOR<sys_menuUpdateWithoutRole_menusInput, sys_menuUncheckedUpdateWithoutRole_menusInput>
    create: XOR<sys_menuCreateWithoutRole_menusInput, sys_menuUncheckedCreateWithoutRole_menusInput>
    where?: sys_menuWhereInput
  }

  export type sys_menuUpdateToOneWithWhereWithoutRole_menusInput = {
    where?: sys_menuWhereInput
    data: XOR<sys_menuUpdateWithoutRole_menusInput, sys_menuUncheckedUpdateWithoutRole_menusInput>
  }

  export type sys_menuUpdateWithoutRole_menusInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    parent?: sys_menuUpdateOneWithoutChildrenNestedInput
    children?: sys_menuUpdateManyWithoutParentNestedInput
  }

  export type sys_menuUncheckedUpdateWithoutRole_menusInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    children?: sys_menuUncheckedUpdateManyWithoutParentNestedInput
  }

  export type sys_roleCreateWithoutRole_usersInput = {
    id: string
    org_code?: string | null
    name?: string | null
    description?: string | null
    data_scope_type?: $Enums.data_scope_type | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    organization?: sys_organizationCreateNestedOneWithoutRolesInput
    role_menus?: sys_role_menuCreateNestedManyWithoutRoleInput
  }

  export type sys_roleUncheckedCreateWithoutRole_usersInput = {
    id: string
    org_id?: string | null
    org_code?: string | null
    name?: string | null
    description?: string | null
    data_scope_type?: $Enums.data_scope_type | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    role_menus?: sys_role_menuUncheckedCreateNestedManyWithoutRoleInput
  }

  export type sys_roleCreateOrConnectWithoutRole_usersInput = {
    where: sys_roleWhereUniqueInput
    create: XOR<sys_roleCreateWithoutRole_usersInput, sys_roleUncheckedCreateWithoutRole_usersInput>
  }

  export type sys_userCreateWithoutRole_usersInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_code?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
    organization?: sys_organizationCreateNestedOneWithoutUsersInput
    department?: sys_deptCreateNestedOneWithoutUsersInput
    sys_log?: sys_logCreateNestedManyWithoutUserInput
  }

  export type sys_userUncheckedCreateWithoutRole_usersInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_id?: string | null
    org_code?: string | null
    dept_id?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
    sys_log?: sys_logUncheckedCreateNestedManyWithoutUserInput
  }

  export type sys_userCreateOrConnectWithoutRole_usersInput = {
    where: sys_userWhereUniqueInput
    create: XOR<sys_userCreateWithoutRole_usersInput, sys_userUncheckedCreateWithoutRole_usersInput>
  }

  export type sys_roleUpsertWithoutRole_usersInput = {
    update: XOR<sys_roleUpdateWithoutRole_usersInput, sys_roleUncheckedUpdateWithoutRole_usersInput>
    create: XOR<sys_roleCreateWithoutRole_usersInput, sys_roleUncheckedCreateWithoutRole_usersInput>
    where?: sys_roleWhereInput
  }

  export type sys_roleUpdateToOneWithWhereWithoutRole_usersInput = {
    where?: sys_roleWhereInput
    data: XOR<sys_roleUpdateWithoutRole_usersInput, sys_roleUncheckedUpdateWithoutRole_usersInput>
  }

  export type sys_roleUpdateWithoutRole_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: sys_organizationUpdateOneWithoutRolesNestedInput
    role_menus?: sys_role_menuUpdateManyWithoutRoleNestedInput
  }

  export type sys_roleUncheckedUpdateWithoutRole_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role_menus?: sys_role_menuUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type sys_userUpsertWithoutRole_usersInput = {
    update: XOR<sys_userUpdateWithoutRole_usersInput, sys_userUncheckedUpdateWithoutRole_usersInput>
    create: XOR<sys_userCreateWithoutRole_usersInput, sys_userUncheckedCreateWithoutRole_usersInput>
    where?: sys_userWhereInput
  }

  export type sys_userUpdateToOneWithWhereWithoutRole_usersInput = {
    where?: sys_userWhereInput
    data: XOR<sys_userUpdateWithoutRole_usersInput, sys_userUncheckedUpdateWithoutRole_usersInput>
  }

  export type sys_userUpdateWithoutRole_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: sys_organizationUpdateOneWithoutUsersNestedInput
    department?: sys_deptUpdateOneWithoutUsersNestedInput
    sys_log?: sys_logUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutRole_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    sys_log?: sys_logUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sys_dict_detailCreateWithoutDictInput = {
    id: string
    label?: string | null
    code?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    tab?: string | null
  }

  export type sys_dict_detailUncheckedCreateWithoutDictInput = {
    id: string
    label?: string | null
    code?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    tab?: string | null
  }

  export type sys_dict_detailCreateOrConnectWithoutDictInput = {
    where: sys_dict_detailWhereUniqueInput
    create: XOR<sys_dict_detailCreateWithoutDictInput, sys_dict_detailUncheckedCreateWithoutDictInput>
  }

  export type sys_dict_detailCreateManyDictInputEnvelope = {
    data: sys_dict_detailCreateManyDictInput | sys_dict_detailCreateManyDictInput[]
    skipDuplicates?: boolean
  }

  export type sys_dict_detailUpsertWithWhereUniqueWithoutDictInput = {
    where: sys_dict_detailWhereUniqueInput
    update: XOR<sys_dict_detailUpdateWithoutDictInput, sys_dict_detailUncheckedUpdateWithoutDictInput>
    create: XOR<sys_dict_detailCreateWithoutDictInput, sys_dict_detailUncheckedCreateWithoutDictInput>
  }

  export type sys_dict_detailUpdateWithWhereUniqueWithoutDictInput = {
    where: sys_dict_detailWhereUniqueInput
    data: XOR<sys_dict_detailUpdateWithoutDictInput, sys_dict_detailUncheckedUpdateWithoutDictInput>
  }

  export type sys_dict_detailUpdateManyWithWhereWithoutDictInput = {
    where: sys_dict_detailScalarWhereInput
    data: XOR<sys_dict_detailUpdateManyMutationInput, sys_dict_detailUncheckedUpdateManyWithoutDictInput>
  }

  export type sys_dict_detailScalarWhereInput = {
    AND?: sys_dict_detailScalarWhereInput | sys_dict_detailScalarWhereInput[]
    OR?: sys_dict_detailScalarWhereInput[]
    NOT?: sys_dict_detailScalarWhereInput | sys_dict_detailScalarWhereInput[]
    id?: StringFilter<"sys_dict_detail"> | string
    dict_id?: StringNullableFilter<"sys_dict_detail"> | string | null
    label?: StringNullableFilter<"sys_dict_detail"> | string | null
    code?: StringNullableFilter<"sys_dict_detail"> | string | null
    sort?: IntFilter<"sys_dict_detail"> | number
    create_by?: StringNullableFilter<"sys_dict_detail"> | string | null
    update_by?: StringNullableFilter<"sys_dict_detail"> | string | null
    create_time?: DateTimeNullableFilter<"sys_dict_detail"> | Date | string | null
    update_time?: DateTimeNullableFilter<"sys_dict_detail"> | Date | string | null
    deleted?: BoolFilter<"sys_dict_detail"> | boolean
    tab?: StringNullableFilter<"sys_dict_detail"> | string | null
  }

  export type sys_dictCreateWithoutDetailsInput = {
    id: string
    name?: string | null
    description?: string | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_dictUncheckedCreateWithoutDetailsInput = {
    id: string
    name?: string | null
    description?: string | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_dictCreateOrConnectWithoutDetailsInput = {
    where: sys_dictWhereUniqueInput
    create: XOR<sys_dictCreateWithoutDetailsInput, sys_dictUncheckedCreateWithoutDetailsInput>
  }

  export type sys_dictUpsertWithoutDetailsInput = {
    update: XOR<sys_dictUpdateWithoutDetailsInput, sys_dictUncheckedUpdateWithoutDetailsInput>
    create: XOR<sys_dictCreateWithoutDetailsInput, sys_dictUncheckedCreateWithoutDetailsInput>
    where?: sys_dictWhereInput
  }

  export type sys_dictUpdateToOneWithWhereWithoutDetailsInput = {
    where?: sys_dictWhereInput
    data: XOR<sys_dictUpdateWithoutDetailsInput, sys_dictUncheckedUpdateWithoutDetailsInput>
  }

  export type sys_dictUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_dictUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_logCreateManyUserInput = {
    id?: string
    request_unique?: string | null
    description?: string | null
    log_type?: $Enums.log_type | null
    method?: string | null
    params?: string | null
    request_ip?: string | null
    time?: bigint | number | null
    user_name?: string | null
    address?: string | null
    exception_detail?: string | null
    create_time?: Date | string
  }

  export type sys_role_userCreateManyUserInput = {
    id: string
    role_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_logUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_unique?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    log_type?: NullableEnumlog_typeFieldUpdateOperationsInput | $Enums.log_type | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    request_ip?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    exception_detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sys_logUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_unique?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    log_type?: NullableEnumlog_typeFieldUpdateOperationsInput | $Enums.log_type | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    request_ip?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    exception_detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sys_logUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_unique?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    log_type?: NullableEnumlog_typeFieldUpdateOperationsInput | $Enums.log_type | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    request_ip?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    exception_detail?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sys_role_userUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role?: sys_roleUpdateOneWithoutRole_usersNestedInput
  }

  export type sys_role_userUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_userUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_menuCreateManyParentInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    create_by?: string | null
    update_by?: string | null
    name?: string | null
    url?: string | null
    perms?: string | null
    type?: number
    mode?: string | null
    icon?: string | null
    color?: string | null
    routeUrl?: string | null
    breadCrumb?: string | null
    componentName?: string | null
    componentPath?: string | null
    orderNum?: number
    display?: boolean
    deleted?: boolean
  }

  export type sys_role_menuCreateManyMenuInput = {
    id: string
    role_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_menuUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    children?: sys_menuUpdateManyWithoutParentNestedInput
    role_menus?: sys_role_menuUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
    children?: sys_menuUncheckedUpdateManyWithoutParentNestedInput
    role_menus?: sys_role_menuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type sys_menuUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    perms?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    mode?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    routeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    breadCrumb?: NullableStringFieldUpdateOperationsInput | string | null
    componentName?: NullableStringFieldUpdateOperationsInput | string | null
    componentPath?: NullableStringFieldUpdateOperationsInput | string | null
    orderNum?: IntFieldUpdateOperationsInput | number
    display?: BoolFieldUpdateOperationsInput | boolean
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_menuUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role?: sys_roleUpdateOneWithoutRole_menusNestedInput
  }

  export type sys_role_menuUncheckedUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_menuUncheckedUpdateManyWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    role_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_organizationCreateManyParentInput = {
    id: string
    code: string
    name?: string | null
    alias?: string | null
    description?: string | null
    full_path?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    lng?: Decimal | DecimalJsLike | number | string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: string | null
    car_clear_sys_org_id?: string | null
  }

  export type sys_deptCreateManyOrganizationInput = {
    id: string
    pid?: string | null
    parent_link_ids?: string | null
    org_code: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_roleCreateManyOrganizationInput = {
    id: string
    org_code?: string | null
    name?: string | null
    description?: string | null
    data_scope_type?: $Enums.data_scope_type | null
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_userCreateManyOrganizationInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_code?: string | null
    dept_id?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
  }

  export type sys_organizationUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_organizationUpdateManyWithoutParentNestedInput
    departments?: sys_deptUpdateManyWithoutOrganizationNestedInput
    roles?: sys_roleUpdateManyWithoutOrganizationNestedInput
    users?: sys_userUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_organizationUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: sys_organizationUncheckedUpdateManyWithoutParentNestedInput
    departments?: sys_deptUncheckedUpdateManyWithoutOrganizationNestedInput
    roles?: sys_roleUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: sys_userUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type sys_organizationUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    full_path?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    car_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
    car_clear_sys_org_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_deptUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    parent?: sys_deptUpdateOneWithoutChildrenNestedInput
    children?: sys_deptUpdateManyWithoutParentNestedInput
    users?: sys_userUpdateManyWithoutDepartmentNestedInput
  }

  export type sys_deptUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    children?: sys_deptUncheckedUpdateManyWithoutParentNestedInput
    users?: sys_userUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type sys_deptUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pid?: NullableStringFieldUpdateOperationsInput | string | null
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_roleUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role_menus?: sys_role_menuUpdateManyWithoutRoleNestedInput
    role_users?: sys_role_userUpdateManyWithoutRoleNestedInput
  }

  export type sys_roleUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    role_menus?: sys_role_menuUncheckedUpdateManyWithoutRoleNestedInput
    role_users?: sys_role_userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type sys_roleUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data_scope_type?: NullableEnumdata_scope_typeFieldUpdateOperationsInput | $Enums.data_scope_type | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    department?: sys_deptUpdateOneWithoutUsersNestedInput
    sys_log?: sys_logUpdateManyWithoutUserNestedInput
    role_users?: sys_role_userUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    sys_log?: sys_logUncheckedUpdateManyWithoutUserNestedInput
    role_users?: sys_role_userUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_deptCreateManyParentInput = {
    id: string
    parent_link_ids?: string | null
    org_code: string
    org_id: string
    name: string
    display?: boolean
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_userCreateManyDepartmentInput = {
    id?: string
    create_time?: Date | string
    update_time?: Date | string
    org_id?: string | null
    org_code?: string | null
    username: string
    password?: string | null
    nickname?: string | null
    real_name?: string | null
    email?: string | null
    phone?: string | null
    job_no?: string | null
    status?: number
    hidden?: boolean
    admin_flag?: boolean
    avatar?: string | null
    client_id?: string | null
    sort?: number
    user_function_codes?: string | null
    deleted?: boolean
  }

  export type sys_deptUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    children?: sys_deptUpdateManyWithoutParentNestedInput
    organization?: sys_organizationUpdateOneRequiredWithoutDepartmentsNestedInput
    users?: sys_userUpdateManyWithoutDepartmentNestedInput
  }

  export type sys_deptUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    children?: sys_deptUncheckedUpdateManyWithoutParentNestedInput
    users?: sys_userUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type sys_deptUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    parent_link_ids?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display?: BoolFieldUpdateOperationsInput | boolean
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_userUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: sys_organizationUpdateOneWithoutUsersNestedInput
    sys_log?: sys_logUpdateManyWithoutUserNestedInput
    role_users?: sys_role_userUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    sys_log?: sys_logUncheckedUpdateManyWithoutUserNestedInput
    role_users?: sys_role_userUncheckedUpdateManyWithoutUserNestedInput
  }

  export type sys_userUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    update_time?: DateTimeFieldUpdateOperationsInput | Date | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    org_code?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    real_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    job_no?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    hidden?: BoolFieldUpdateOperationsInput | boolean
    admin_flag?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    user_function_codes?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_menuCreateManyRoleInput = {
    id: string
    menu_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_role_userCreateManyRoleInput = {
    id: string
    user_id?: string | null
    create_by?: string | null
    create_time?: Date | string | null
    deleted?: boolean
  }

  export type sys_role_menuUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    menu?: sys_menuUpdateOneWithoutRole_menusNestedInput
  }

  export type sys_role_menuUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    menu_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_menuUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    menu_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_userUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: sys_userUpdateOneWithoutRole_usersNestedInput
  }

  export type sys_role_userUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_role_userUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type sys_dict_detailCreateManyDictInput = {
    id: string
    label?: string | null
    code?: string | null
    sort?: number
    create_by?: string | null
    update_by?: string | null
    create_time?: Date | string | null
    update_time?: Date | string | null
    deleted?: boolean
    tab?: string | null
  }

  export type sys_dict_detailUpdateWithoutDictInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tab?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_dict_detailUncheckedUpdateWithoutDictInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tab?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sys_dict_detailUncheckedUpdateManyWithoutDictInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: IntFieldUpdateOperationsInput | number
    create_by?: NullableStringFieldUpdateOperationsInput | string | null
    update_by?: NullableStringFieldUpdateOperationsInput | string | null
    create_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    tab?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}