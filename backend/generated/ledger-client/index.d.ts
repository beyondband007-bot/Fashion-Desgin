
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
 * Model CreditAccount
 * 
 */
export type CreditAccount = $Result.DefaultSelection<Prisma.$CreditAccountPayload>
/**
 * Model BillingTask
 * 
 */
export type BillingTask = $Result.DefaultSelection<Prisma.$BillingTaskPayload>
/**
 * Model CreditTransaction
 * 
 */
export type CreditTransaction = $Result.DefaultSelection<Prisma.$CreditTransactionPayload>
/**
 * Model IdempotencyKey
 * 
 */
export type IdempotencyKey = $Result.DefaultSelection<Prisma.$IdempotencyKeyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountOwnerType: {
  user: 'user',
  enterprise: 'enterprise'
};

export type AccountOwnerType = (typeof AccountOwnerType)[keyof typeof AccountOwnerType]


export const CreditAccountStatus: {
  active: 'active',
  frozen: 'frozen',
  closed: 'closed'
};

export type CreditAccountStatus = (typeof CreditAccountStatus)[keyof typeof CreditAccountStatus]


export const BillingTaskStatus: {
  created: 'created',
  frozen: 'frozen',
  partially_settled: 'partially_settled',
  settled: 'settled',
  refunding: 'refunding',
  refunded: 'refunded',
  cancelled: 'cancelled',
  failed: 'failed'
};

export type BillingTaskStatus = (typeof BillingTaskStatus)[keyof typeof BillingTaskStatus]


export const IdempotencyStatus: {
  processing: 'processing',
  succeeded: 'succeeded',
  failed: 'failed'
};

export type IdempotencyStatus = (typeof IdempotencyStatus)[keyof typeof IdempotencyStatus]


export const TransactionType: {
  grant: 'grant',
  recharge: 'recharge',
  freeze: 'freeze',
  settle: 'settle',
  release: 'release',
  refund: 'refund',
  expire: 'expire',
  adjust_credit: 'adjust_credit',
  adjust_debit: 'adjust_debit',
  reverse: 'reverse'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionDirection: {
  credit: 'credit',
  debit: 'debit',
  lock: 'lock',
  unlock: 'unlock'
};

export type TransactionDirection = (typeof TransactionDirection)[keyof typeof TransactionDirection]

}

export type AccountOwnerType = $Enums.AccountOwnerType

export const AccountOwnerType: typeof $Enums.AccountOwnerType

export type CreditAccountStatus = $Enums.CreditAccountStatus

export const CreditAccountStatus: typeof $Enums.CreditAccountStatus

export type BillingTaskStatus = $Enums.BillingTaskStatus

export const BillingTaskStatus: typeof $Enums.BillingTaskStatus

export type IdempotencyStatus = $Enums.IdempotencyStatus

export const IdempotencyStatus: typeof $Enums.IdempotencyStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionDirection = $Enums.TransactionDirection

export const TransactionDirection: typeof $Enums.TransactionDirection

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CreditAccounts
 * const creditAccounts = await prisma.creditAccount.findMany()
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
   * // Fetch zero or more CreditAccounts
   * const creditAccounts = await prisma.creditAccount.findMany()
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
   * `prisma.creditAccount`: Exposes CRUD operations for the **CreditAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditAccounts
    * const creditAccounts = await prisma.creditAccount.findMany()
    * ```
    */
  get creditAccount(): Prisma.CreditAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billingTask`: Exposes CRUD operations for the **BillingTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillingTasks
    * const billingTasks = await prisma.billingTask.findMany()
    * ```
    */
  get billingTask(): Prisma.BillingTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditTransaction`: Exposes CRUD operations for the **CreditTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransactions
    * const creditTransactions = await prisma.creditTransaction.findMany()
    * ```
    */
  get creditTransaction(): Prisma.CreditTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idempotencyKey`: Exposes CRUD operations for the **IdempotencyKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdempotencyKeys
    * const idempotencyKeys = await prisma.idempotencyKey.findMany()
    * ```
    */
  get idempotencyKey(): Prisma.IdempotencyKeyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    CreditAccount: 'CreditAccount',
    BillingTask: 'BillingTask',
    CreditTransaction: 'CreditTransaction',
    IdempotencyKey: 'IdempotencyKey'
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
      modelProps: "creditAccount" | "billingTask" | "creditTransaction" | "idempotencyKey"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CreditAccount: {
        payload: Prisma.$CreditAccountPayload<ExtArgs>
        fields: Prisma.CreditAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          findFirst: {
            args: Prisma.CreditAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          findMany: {
            args: Prisma.CreditAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>[]
          }
          create: {
            args: Prisma.CreditAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          createMany: {
            args: Prisma.CreditAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CreditAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          update: {
            args: Prisma.CreditAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          deleteMany: {
            args: Prisma.CreditAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditAccountPayload>
          }
          aggregate: {
            args: Prisma.CreditAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditAccount>
          }
          groupBy: {
            args: Prisma.CreditAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditAccountCountArgs<ExtArgs>
            result: $Utils.Optional<CreditAccountCountAggregateOutputType> | number
          }
        }
      }
      BillingTask: {
        payload: Prisma.$BillingTaskPayload<ExtArgs>
        fields: Prisma.BillingTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTaskPayload>
          }
          findFirst: {
            args: Prisma.BillingTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTaskPayload>
          }
          findMany: {
            args: Prisma.BillingTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTaskPayload>[]
          }
          create: {
            args: Prisma.BillingTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTaskPayload>
          }
          createMany: {
            args: Prisma.BillingTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BillingTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTaskPayload>
          }
          update: {
            args: Prisma.BillingTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTaskPayload>
          }
          deleteMany: {
            args: Prisma.BillingTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BillingTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingTaskPayload>
          }
          aggregate: {
            args: Prisma.BillingTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillingTask>
          }
          groupBy: {
            args: Prisma.BillingTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingTaskCountArgs<ExtArgs>
            result: $Utils.Optional<BillingTaskCountAggregateOutputType> | number
          }
        }
      }
      CreditTransaction: {
        payload: Prisma.$CreditTransactionPayload<ExtArgs>
        fields: Prisma.CreditTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findFirst: {
            args: Prisma.CreditTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findMany: {
            args: Prisma.CreditTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          create: {
            args: Prisma.CreditTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          createMany: {
            args: Prisma.CreditTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CreditTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          update: {
            args: Prisma.CreditTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          aggregate: {
            args: Prisma.CreditTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditTransaction>
          }
          groupBy: {
            args: Prisma.CreditTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionCountAggregateOutputType> | number
          }
        }
      }
      IdempotencyKey: {
        payload: Prisma.$IdempotencyKeyPayload<ExtArgs>
        fields: Prisma.IdempotencyKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdempotencyKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          findFirst: {
            args: Prisma.IdempotencyKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          findMany: {
            args: Prisma.IdempotencyKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          create: {
            args: Prisma.IdempotencyKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          createMany: {
            args: Prisma.IdempotencyKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IdempotencyKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          update: {
            args: Prisma.IdempotencyKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          deleteMany: {
            args: Prisma.IdempotencyKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdempotencyKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IdempotencyKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          aggregate: {
            args: Prisma.IdempotencyKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdempotencyKey>
          }
          groupBy: {
            args: Prisma.IdempotencyKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdempotencyKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdempotencyKeyCountArgs<ExtArgs>
            result: $Utils.Optional<IdempotencyKeyCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    creditAccount?: CreditAccountOmit
    billingTask?: BillingTaskOmit
    creditTransaction?: CreditTransactionOmit
    idempotencyKey?: IdempotencyKeyOmit
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
   * Count Type CreditAccountCountOutputType
   */

  export type CreditAccountCountOutputType = {
    billingTasks: number
    transactions: number
  }

  export type CreditAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billingTasks?: boolean | CreditAccountCountOutputTypeCountBillingTasksArgs
    transactions?: boolean | CreditAccountCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CreditAccountCountOutputType without action
   */
  export type CreditAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccountCountOutputType
     */
    select?: CreditAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditAccountCountOutputType without action
   */
  export type CreditAccountCountOutputTypeCountBillingTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingTaskWhereInput
  }

  /**
   * CreditAccountCountOutputType without action
   */
  export type CreditAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }


  /**
   * Count Type BillingTaskCountOutputType
   */

  export type BillingTaskCountOutputType = {
    transactions: number
  }

  export type BillingTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | BillingTaskCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BillingTaskCountOutputType without action
   */
  export type BillingTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTaskCountOutputType
     */
    select?: BillingTaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillingTaskCountOutputType without action
   */
  export type BillingTaskCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CreditAccount
   */

  export type AggregateCreditAccount = {
    _count: CreditAccountCountAggregateOutputType | null
    _avg: CreditAccountAvgAggregateOutputType | null
    _sum: CreditAccountSumAggregateOutputType | null
    _min: CreditAccountMinAggregateOutputType | null
    _max: CreditAccountMaxAggregateOutputType | null
  }

  export type CreditAccountAvgAggregateOutputType = {
    totalBalance: Decimal | null
    lockedBalance: Decimal | null
    availableBalance: Decimal | null
    version: number | null
  }

  export type CreditAccountSumAggregateOutputType = {
    totalBalance: Decimal | null
    lockedBalance: Decimal | null
    availableBalance: Decimal | null
    version: bigint | null
  }

  export type CreditAccountMinAggregateOutputType = {
    id: string | null
    ownerType: $Enums.AccountOwnerType | null
    ownerId: string | null
    currency: string | null
    totalBalance: Decimal | null
    lockedBalance: Decimal | null
    availableBalance: Decimal | null
    status: $Enums.CreditAccountStatus | null
    version: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditAccountMaxAggregateOutputType = {
    id: string | null
    ownerType: $Enums.AccountOwnerType | null
    ownerId: string | null
    currency: string | null
    totalBalance: Decimal | null
    lockedBalance: Decimal | null
    availableBalance: Decimal | null
    status: $Enums.CreditAccountStatus | null
    version: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditAccountCountAggregateOutputType = {
    id: number
    ownerType: number
    ownerId: number
    currency: number
    totalBalance: number
    lockedBalance: number
    availableBalance: number
    status: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditAccountAvgAggregateInputType = {
    totalBalance?: true
    lockedBalance?: true
    availableBalance?: true
    version?: true
  }

  export type CreditAccountSumAggregateInputType = {
    totalBalance?: true
    lockedBalance?: true
    availableBalance?: true
    version?: true
  }

  export type CreditAccountMinAggregateInputType = {
    id?: true
    ownerType?: true
    ownerId?: true
    currency?: true
    totalBalance?: true
    lockedBalance?: true
    availableBalance?: true
    status?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditAccountMaxAggregateInputType = {
    id?: true
    ownerType?: true
    ownerId?: true
    currency?: true
    totalBalance?: true
    lockedBalance?: true
    availableBalance?: true
    status?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditAccountCountAggregateInputType = {
    id?: true
    ownerType?: true
    ownerId?: true
    currency?: true
    totalBalance?: true
    lockedBalance?: true
    availableBalance?: true
    status?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditAccount to aggregate.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditAccounts
    **/
    _count?: true | CreditAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditAccountMaxAggregateInputType
  }

  export type GetCreditAccountAggregateType<T extends CreditAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditAccount[P]>
      : GetScalarType<T[P], AggregateCreditAccount[P]>
  }




  export type CreditAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditAccountWhereInput
    orderBy?: CreditAccountOrderByWithAggregationInput | CreditAccountOrderByWithAggregationInput[]
    by: CreditAccountScalarFieldEnum[] | CreditAccountScalarFieldEnum
    having?: CreditAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditAccountCountAggregateInputType | true
    _avg?: CreditAccountAvgAggregateInputType
    _sum?: CreditAccountSumAggregateInputType
    _min?: CreditAccountMinAggregateInputType
    _max?: CreditAccountMaxAggregateInputType
  }

  export type CreditAccountGroupByOutputType = {
    id: string
    ownerType: $Enums.AccountOwnerType
    ownerId: string
    currency: string
    totalBalance: Decimal
    lockedBalance: Decimal
    availableBalance: Decimal
    status: $Enums.CreditAccountStatus
    version: bigint
    createdAt: Date
    updatedAt: Date
    _count: CreditAccountCountAggregateOutputType | null
    _avg: CreditAccountAvgAggregateOutputType | null
    _sum: CreditAccountSumAggregateOutputType | null
    _min: CreditAccountMinAggregateOutputType | null
    _max: CreditAccountMaxAggregateOutputType | null
  }

  type GetCreditAccountGroupByPayload<T extends CreditAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CreditAccountGroupByOutputType[P]>
        }
      >
    >


  export type CreditAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerType?: boolean
    ownerId?: boolean
    currency?: boolean
    totalBalance?: boolean
    lockedBalance?: boolean
    availableBalance?: boolean
    status?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    billingTasks?: boolean | CreditAccount$billingTasksArgs<ExtArgs>
    transactions?: boolean | CreditAccount$transactionsArgs<ExtArgs>
    _count?: boolean | CreditAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditAccount"]>



  export type CreditAccountSelectScalar = {
    id?: boolean
    ownerType?: boolean
    ownerId?: boolean
    currency?: boolean
    totalBalance?: boolean
    lockedBalance?: boolean
    availableBalance?: boolean
    status?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreditAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerType" | "ownerId" | "currency" | "totalBalance" | "lockedBalance" | "availableBalance" | "status" | "version" | "createdAt" | "updatedAt", ExtArgs["result"]["creditAccount"]>
  export type CreditAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billingTasks?: boolean | CreditAccount$billingTasksArgs<ExtArgs>
    transactions?: boolean | CreditAccount$transactionsArgs<ExtArgs>
    _count?: boolean | CreditAccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CreditAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditAccount"
    objects: {
      billingTasks: Prisma.$BillingTaskPayload<ExtArgs>[]
      transactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerType: $Enums.AccountOwnerType
      ownerId: string
      currency: string
      totalBalance: Prisma.Decimal
      lockedBalance: Prisma.Decimal
      availableBalance: Prisma.Decimal
      status: $Enums.CreditAccountStatus
      version: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creditAccount"]>
    composites: {}
  }

  type CreditAccountGetPayload<S extends boolean | null | undefined | CreditAccountDefaultArgs> = $Result.GetResult<Prisma.$CreditAccountPayload, S>

  type CreditAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditAccountCountAggregateInputType | true
    }

  export interface CreditAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditAccount'], meta: { name: 'CreditAccount' } }
    /**
     * Find zero or one CreditAccount that matches the filter.
     * @param {CreditAccountFindUniqueArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditAccountFindUniqueArgs>(args: SelectSubset<T, CreditAccountFindUniqueArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditAccountFindUniqueOrThrowArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountFindFirstArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditAccountFindFirstArgs>(args?: SelectSubset<T, CreditAccountFindFirstArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountFindFirstOrThrowArgs} args - Arguments to find a CreditAccount
     * @example
     * // Get one CreditAccount
     * const creditAccount = await prisma.creditAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditAccounts
     * const creditAccounts = await prisma.creditAccount.findMany()
     * 
     * // Get first 10 CreditAccounts
     * const creditAccounts = await prisma.creditAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditAccountWithIdOnly = await prisma.creditAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditAccountFindManyArgs>(args?: SelectSubset<T, CreditAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditAccount.
     * @param {CreditAccountCreateArgs} args - Arguments to create a CreditAccount.
     * @example
     * // Create one CreditAccount
     * const CreditAccount = await prisma.creditAccount.create({
     *   data: {
     *     // ... data to create a CreditAccount
     *   }
     * })
     * 
     */
    create<T extends CreditAccountCreateArgs>(args: SelectSubset<T, CreditAccountCreateArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditAccounts.
     * @param {CreditAccountCreateManyArgs} args - Arguments to create many CreditAccounts.
     * @example
     * // Create many CreditAccounts
     * const creditAccount = await prisma.creditAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditAccountCreateManyArgs>(args?: SelectSubset<T, CreditAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditAccount.
     * @param {CreditAccountDeleteArgs} args - Arguments to delete one CreditAccount.
     * @example
     * // Delete one CreditAccount
     * const CreditAccount = await prisma.creditAccount.delete({
     *   where: {
     *     // ... filter to delete one CreditAccount
     *   }
     * })
     * 
     */
    delete<T extends CreditAccountDeleteArgs>(args: SelectSubset<T, CreditAccountDeleteArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditAccount.
     * @param {CreditAccountUpdateArgs} args - Arguments to update one CreditAccount.
     * @example
     * // Update one CreditAccount
     * const creditAccount = await prisma.creditAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditAccountUpdateArgs>(args: SelectSubset<T, CreditAccountUpdateArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditAccounts.
     * @param {CreditAccountDeleteManyArgs} args - Arguments to filter CreditAccounts to delete.
     * @example
     * // Delete a few CreditAccounts
     * const { count } = await prisma.creditAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditAccountDeleteManyArgs>(args?: SelectSubset<T, CreditAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditAccounts
     * const creditAccount = await prisma.creditAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditAccountUpdateManyArgs>(args: SelectSubset<T, CreditAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditAccount.
     * @param {CreditAccountUpsertArgs} args - Arguments to update or create a CreditAccount.
     * @example
     * // Update or create a CreditAccount
     * const creditAccount = await prisma.creditAccount.upsert({
     *   create: {
     *     // ... data to create a CreditAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditAccount we want to update
     *   }
     * })
     */
    upsert<T extends CreditAccountUpsertArgs>(args: SelectSubset<T, CreditAccountUpsertArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountCountArgs} args - Arguments to filter CreditAccounts to count.
     * @example
     * // Count the number of CreditAccounts
     * const count = await prisma.creditAccount.count({
     *   where: {
     *     // ... the filter for the CreditAccounts we want to count
     *   }
     * })
    **/
    count<T extends CreditAccountCountArgs>(
      args?: Subset<T, CreditAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditAccountAggregateArgs>(args: Subset<T, CreditAccountAggregateArgs>): Prisma.PrismaPromise<GetCreditAccountAggregateType<T>>

    /**
     * Group by CreditAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditAccountGroupByArgs} args - Group by arguments.
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
      T extends CreditAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditAccountGroupByArgs['orderBy'] }
        : { orderBy?: CreditAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditAccount model
   */
  readonly fields: CreditAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    billingTasks<T extends CreditAccount$billingTasksArgs<ExtArgs> = {}>(args?: Subset<T, CreditAccount$billingTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends CreditAccount$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, CreditAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CreditAccount model
   */
  interface CreditAccountFieldRefs {
    readonly id: FieldRef<"CreditAccount", 'String'>
    readonly ownerType: FieldRef<"CreditAccount", 'AccountOwnerType'>
    readonly ownerId: FieldRef<"CreditAccount", 'String'>
    readonly currency: FieldRef<"CreditAccount", 'String'>
    readonly totalBalance: FieldRef<"CreditAccount", 'Decimal'>
    readonly lockedBalance: FieldRef<"CreditAccount", 'Decimal'>
    readonly availableBalance: FieldRef<"CreditAccount", 'Decimal'>
    readonly status: FieldRef<"CreditAccount", 'CreditAccountStatus'>
    readonly version: FieldRef<"CreditAccount", 'BigInt'>
    readonly createdAt: FieldRef<"CreditAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditAccount findUnique
   */
  export type CreditAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount findUniqueOrThrow
   */
  export type CreditAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount findFirst
   */
  export type CreditAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditAccounts.
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditAccounts.
     */
    distinct?: CreditAccountScalarFieldEnum | CreditAccountScalarFieldEnum[]
  }

  /**
   * CreditAccount findFirstOrThrow
   */
  export type CreditAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccount to fetch.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditAccounts.
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditAccounts.
     */
    distinct?: CreditAccountScalarFieldEnum | CreditAccountScalarFieldEnum[]
  }

  /**
   * CreditAccount findMany
   */
  export type CreditAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditAccounts to fetch.
     */
    where?: CreditAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditAccounts to fetch.
     */
    orderBy?: CreditAccountOrderByWithRelationInput | CreditAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditAccounts.
     */
    cursor?: CreditAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditAccounts.
     */
    skip?: number
    distinct?: CreditAccountScalarFieldEnum | CreditAccountScalarFieldEnum[]
  }

  /**
   * CreditAccount create
   */
  export type CreditAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditAccount.
     */
    data: XOR<CreditAccountCreateInput, CreditAccountUncheckedCreateInput>
  }

  /**
   * CreditAccount createMany
   */
  export type CreditAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditAccounts.
     */
    data: CreditAccountCreateManyInput | CreditAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditAccount update
   */
  export type CreditAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditAccount.
     */
    data: XOR<CreditAccountUpdateInput, CreditAccountUncheckedUpdateInput>
    /**
     * Choose, which CreditAccount to update.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount updateMany
   */
  export type CreditAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditAccounts.
     */
    data: XOR<CreditAccountUpdateManyMutationInput, CreditAccountUncheckedUpdateManyInput>
    /**
     * Filter which CreditAccounts to update
     */
    where?: CreditAccountWhereInput
    /**
     * Limit how many CreditAccounts to update.
     */
    limit?: number
  }

  /**
   * CreditAccount upsert
   */
  export type CreditAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditAccount to update in case it exists.
     */
    where: CreditAccountWhereUniqueInput
    /**
     * In case the CreditAccount found by the `where` argument doesn't exist, create a new CreditAccount with this data.
     */
    create: XOR<CreditAccountCreateInput, CreditAccountUncheckedCreateInput>
    /**
     * In case the CreditAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditAccountUpdateInput, CreditAccountUncheckedUpdateInput>
  }

  /**
   * CreditAccount delete
   */
  export type CreditAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
    /**
     * Filter which CreditAccount to delete.
     */
    where: CreditAccountWhereUniqueInput
  }

  /**
   * CreditAccount deleteMany
   */
  export type CreditAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditAccounts to delete
     */
    where?: CreditAccountWhereInput
    /**
     * Limit how many CreditAccounts to delete.
     */
    limit?: number
  }

  /**
   * CreditAccount.billingTasks
   */
  export type CreditAccount$billingTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    where?: BillingTaskWhereInput
    orderBy?: BillingTaskOrderByWithRelationInput | BillingTaskOrderByWithRelationInput[]
    cursor?: BillingTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillingTaskScalarFieldEnum | BillingTaskScalarFieldEnum[]
  }

  /**
   * CreditAccount.transactions
   */
  export type CreditAccount$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditAccount without action
   */
  export type CreditAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditAccount
     */
    select?: CreditAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditAccount
     */
    omit?: CreditAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditAccountInclude<ExtArgs> | null
  }


  /**
   * Model BillingTask
   */

  export type AggregateBillingTask = {
    _count: BillingTaskCountAggregateOutputType | null
    _avg: BillingTaskAvgAggregateOutputType | null
    _sum: BillingTaskSumAggregateOutputType | null
    _min: BillingTaskMinAggregateOutputType | null
    _max: BillingTaskMaxAggregateOutputType | null
  }

  export type BillingTaskAvgAggregateOutputType = {
    estimatedPoints: Decimal | null
    frozenPoints: Decimal | null
    settledPoints: Decimal | null
    refundedPoints: Decimal | null
    version: number | null
  }

  export type BillingTaskSumAggregateOutputType = {
    estimatedPoints: Decimal | null
    frozenPoints: Decimal | null
    settledPoints: Decimal | null
    refundedPoints: Decimal | null
    version: number | null
  }

  export type BillingTaskMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    bizType: string | null
    bizId: string | null
    estimatedPoints: Decimal | null
    frozenPoints: Decimal | null
    settledPoints: Decimal | null
    refundedPoints: Decimal | null
    status: $Enums.BillingTaskStatus | null
    freezeIdempotencyKey: string | null
    settleIdempotencyKey: string | null
    refundIdempotencyKey: string | null
    lockExpireAt: Date | null
    frozenAt: Date | null
    settledAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    version: number | null
  }

  export type BillingTaskMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    bizType: string | null
    bizId: string | null
    estimatedPoints: Decimal | null
    frozenPoints: Decimal | null
    settledPoints: Decimal | null
    refundedPoints: Decimal | null
    status: $Enums.BillingTaskStatus | null
    freezeIdempotencyKey: string | null
    settleIdempotencyKey: string | null
    refundIdempotencyKey: string | null
    lockExpireAt: Date | null
    frozenAt: Date | null
    settledAt: Date | null
    refundedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    version: number | null
  }

  export type BillingTaskCountAggregateOutputType = {
    id: number
    accountId: number
    bizType: number
    bizId: number
    estimatedPoints: number
    frozenPoints: number
    settledPoints: number
    refundedPoints: number
    status: number
    pricingSnapshotJson: number
    freezeIdempotencyKey: number
    settleIdempotencyKey: number
    refundIdempotencyKey: number
    lockExpireAt: number
    frozenAt: number
    settledAt: number
    refundedAt: number
    createdAt: number
    updatedAt: number
    version: number
    _all: number
  }


  export type BillingTaskAvgAggregateInputType = {
    estimatedPoints?: true
    frozenPoints?: true
    settledPoints?: true
    refundedPoints?: true
    version?: true
  }

  export type BillingTaskSumAggregateInputType = {
    estimatedPoints?: true
    frozenPoints?: true
    settledPoints?: true
    refundedPoints?: true
    version?: true
  }

  export type BillingTaskMinAggregateInputType = {
    id?: true
    accountId?: true
    bizType?: true
    bizId?: true
    estimatedPoints?: true
    frozenPoints?: true
    settledPoints?: true
    refundedPoints?: true
    status?: true
    freezeIdempotencyKey?: true
    settleIdempotencyKey?: true
    refundIdempotencyKey?: true
    lockExpireAt?: true
    frozenAt?: true
    settledAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    version?: true
  }

  export type BillingTaskMaxAggregateInputType = {
    id?: true
    accountId?: true
    bizType?: true
    bizId?: true
    estimatedPoints?: true
    frozenPoints?: true
    settledPoints?: true
    refundedPoints?: true
    status?: true
    freezeIdempotencyKey?: true
    settleIdempotencyKey?: true
    refundIdempotencyKey?: true
    lockExpireAt?: true
    frozenAt?: true
    settledAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    version?: true
  }

  export type BillingTaskCountAggregateInputType = {
    id?: true
    accountId?: true
    bizType?: true
    bizId?: true
    estimatedPoints?: true
    frozenPoints?: true
    settledPoints?: true
    refundedPoints?: true
    status?: true
    pricingSnapshotJson?: true
    freezeIdempotencyKey?: true
    settleIdempotencyKey?: true
    refundIdempotencyKey?: true
    lockExpireAt?: true
    frozenAt?: true
    settledAt?: true
    refundedAt?: true
    createdAt?: true
    updatedAt?: true
    version?: true
    _all?: true
  }

  export type BillingTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingTask to aggregate.
     */
    where?: BillingTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingTasks to fetch.
     */
    orderBy?: BillingTaskOrderByWithRelationInput | BillingTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillingTasks
    **/
    _count?: true | BillingTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingTaskMaxAggregateInputType
  }

  export type GetBillingTaskAggregateType<T extends BillingTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateBillingTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillingTask[P]>
      : GetScalarType<T[P], AggregateBillingTask[P]>
  }




  export type BillingTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingTaskWhereInput
    orderBy?: BillingTaskOrderByWithAggregationInput | BillingTaskOrderByWithAggregationInput[]
    by: BillingTaskScalarFieldEnum[] | BillingTaskScalarFieldEnum
    having?: BillingTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingTaskCountAggregateInputType | true
    _avg?: BillingTaskAvgAggregateInputType
    _sum?: BillingTaskSumAggregateInputType
    _min?: BillingTaskMinAggregateInputType
    _max?: BillingTaskMaxAggregateInputType
  }

  export type BillingTaskGroupByOutputType = {
    id: string
    accountId: string
    bizType: string
    bizId: string
    estimatedPoints: Decimal
    frozenPoints: Decimal
    settledPoints: Decimal
    refundedPoints: Decimal
    status: $Enums.BillingTaskStatus
    pricingSnapshotJson: JsonValue | null
    freezeIdempotencyKey: string
    settleIdempotencyKey: string | null
    refundIdempotencyKey: string | null
    lockExpireAt: Date | null
    frozenAt: Date | null
    settledAt: Date | null
    refundedAt: Date | null
    createdAt: Date
    updatedAt: Date
    version: number
    _count: BillingTaskCountAggregateOutputType | null
    _avg: BillingTaskAvgAggregateOutputType | null
    _sum: BillingTaskSumAggregateOutputType | null
    _min: BillingTaskMinAggregateOutputType | null
    _max: BillingTaskMaxAggregateOutputType | null
  }

  type GetBillingTaskGroupByPayload<T extends BillingTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingTaskGroupByOutputType[P]>
            : GetScalarType<T[P], BillingTaskGroupByOutputType[P]>
        }
      >
    >


  export type BillingTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    bizType?: boolean
    bizId?: boolean
    estimatedPoints?: boolean
    frozenPoints?: boolean
    settledPoints?: boolean
    refundedPoints?: boolean
    status?: boolean
    pricingSnapshotJson?: boolean
    freezeIdempotencyKey?: boolean
    settleIdempotencyKey?: boolean
    refundIdempotencyKey?: boolean
    lockExpireAt?: boolean
    frozenAt?: boolean
    settledAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    version?: boolean
    account?: boolean | CreditAccountDefaultArgs<ExtArgs>
    transactions?: boolean | BillingTask$transactionsArgs<ExtArgs>
    _count?: boolean | BillingTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingTask"]>



  export type BillingTaskSelectScalar = {
    id?: boolean
    accountId?: boolean
    bizType?: boolean
    bizId?: boolean
    estimatedPoints?: boolean
    frozenPoints?: boolean
    settledPoints?: boolean
    refundedPoints?: boolean
    status?: boolean
    pricingSnapshotJson?: boolean
    freezeIdempotencyKey?: boolean
    settleIdempotencyKey?: boolean
    refundIdempotencyKey?: boolean
    lockExpireAt?: boolean
    frozenAt?: boolean
    settledAt?: boolean
    refundedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    version?: boolean
  }

  export type BillingTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "bizType" | "bizId" | "estimatedPoints" | "frozenPoints" | "settledPoints" | "refundedPoints" | "status" | "pricingSnapshotJson" | "freezeIdempotencyKey" | "settleIdempotencyKey" | "refundIdempotencyKey" | "lockExpireAt" | "frozenAt" | "settledAt" | "refundedAt" | "createdAt" | "updatedAt" | "version", ExtArgs["result"]["billingTask"]>
  export type BillingTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | CreditAccountDefaultArgs<ExtArgs>
    transactions?: boolean | BillingTask$transactionsArgs<ExtArgs>
    _count?: boolean | BillingTaskCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BillingTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillingTask"
    objects: {
      account: Prisma.$CreditAccountPayload<ExtArgs>
      transactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      bizType: string
      bizId: string
      estimatedPoints: Prisma.Decimal
      frozenPoints: Prisma.Decimal
      settledPoints: Prisma.Decimal
      refundedPoints: Prisma.Decimal
      status: $Enums.BillingTaskStatus
      pricingSnapshotJson: Prisma.JsonValue | null
      freezeIdempotencyKey: string
      settleIdempotencyKey: string | null
      refundIdempotencyKey: string | null
      lockExpireAt: Date | null
      frozenAt: Date | null
      settledAt: Date | null
      refundedAt: Date | null
      createdAt: Date
      updatedAt: Date
      version: number
    }, ExtArgs["result"]["billingTask"]>
    composites: {}
  }

  type BillingTaskGetPayload<S extends boolean | null | undefined | BillingTaskDefaultArgs> = $Result.GetResult<Prisma.$BillingTaskPayload, S>

  type BillingTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillingTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillingTaskCountAggregateInputType | true
    }

  export interface BillingTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillingTask'], meta: { name: 'BillingTask' } }
    /**
     * Find zero or one BillingTask that matches the filter.
     * @param {BillingTaskFindUniqueArgs} args - Arguments to find a BillingTask
     * @example
     * // Get one BillingTask
     * const billingTask = await prisma.billingTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingTaskFindUniqueArgs>(args: SelectSubset<T, BillingTaskFindUniqueArgs<ExtArgs>>): Prisma__BillingTaskClient<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillingTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillingTaskFindUniqueOrThrowArgs} args - Arguments to find a BillingTask
     * @example
     * // Get one BillingTask
     * const billingTask = await prisma.billingTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingTaskClient<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTaskFindFirstArgs} args - Arguments to find a BillingTask
     * @example
     * // Get one BillingTask
     * const billingTask = await prisma.billingTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingTaskFindFirstArgs>(args?: SelectSubset<T, BillingTaskFindFirstArgs<ExtArgs>>): Prisma__BillingTaskClient<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTaskFindFirstOrThrowArgs} args - Arguments to find a BillingTask
     * @example
     * // Get one BillingTask
     * const billingTask = await prisma.billingTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingTaskClient<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillingTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillingTasks
     * const billingTasks = await prisma.billingTask.findMany()
     * 
     * // Get first 10 BillingTasks
     * const billingTasks = await prisma.billingTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingTaskWithIdOnly = await prisma.billingTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingTaskFindManyArgs>(args?: SelectSubset<T, BillingTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillingTask.
     * @param {BillingTaskCreateArgs} args - Arguments to create a BillingTask.
     * @example
     * // Create one BillingTask
     * const BillingTask = await prisma.billingTask.create({
     *   data: {
     *     // ... data to create a BillingTask
     *   }
     * })
     * 
     */
    create<T extends BillingTaskCreateArgs>(args: SelectSubset<T, BillingTaskCreateArgs<ExtArgs>>): Prisma__BillingTaskClient<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillingTasks.
     * @param {BillingTaskCreateManyArgs} args - Arguments to create many BillingTasks.
     * @example
     * // Create many BillingTasks
     * const billingTask = await prisma.billingTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingTaskCreateManyArgs>(args?: SelectSubset<T, BillingTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BillingTask.
     * @param {BillingTaskDeleteArgs} args - Arguments to delete one BillingTask.
     * @example
     * // Delete one BillingTask
     * const BillingTask = await prisma.billingTask.delete({
     *   where: {
     *     // ... filter to delete one BillingTask
     *   }
     * })
     * 
     */
    delete<T extends BillingTaskDeleteArgs>(args: SelectSubset<T, BillingTaskDeleteArgs<ExtArgs>>): Prisma__BillingTaskClient<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillingTask.
     * @param {BillingTaskUpdateArgs} args - Arguments to update one BillingTask.
     * @example
     * // Update one BillingTask
     * const billingTask = await prisma.billingTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingTaskUpdateArgs>(args: SelectSubset<T, BillingTaskUpdateArgs<ExtArgs>>): Prisma__BillingTaskClient<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillingTasks.
     * @param {BillingTaskDeleteManyArgs} args - Arguments to filter BillingTasks to delete.
     * @example
     * // Delete a few BillingTasks
     * const { count } = await prisma.billingTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingTaskDeleteManyArgs>(args?: SelectSubset<T, BillingTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillingTasks
     * const billingTask = await prisma.billingTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingTaskUpdateManyArgs>(args: SelectSubset<T, BillingTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BillingTask.
     * @param {BillingTaskUpsertArgs} args - Arguments to update or create a BillingTask.
     * @example
     * // Update or create a BillingTask
     * const billingTask = await prisma.billingTask.upsert({
     *   create: {
     *     // ... data to create a BillingTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillingTask we want to update
     *   }
     * })
     */
    upsert<T extends BillingTaskUpsertArgs>(args: SelectSubset<T, BillingTaskUpsertArgs<ExtArgs>>): Prisma__BillingTaskClient<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillingTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTaskCountArgs} args - Arguments to filter BillingTasks to count.
     * @example
     * // Count the number of BillingTasks
     * const count = await prisma.billingTask.count({
     *   where: {
     *     // ... the filter for the BillingTasks we want to count
     *   }
     * })
    **/
    count<T extends BillingTaskCountArgs>(
      args?: Subset<T, BillingTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillingTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillingTaskAggregateArgs>(args: Subset<T, BillingTaskAggregateArgs>): Prisma.PrismaPromise<GetBillingTaskAggregateType<T>>

    /**
     * Group by BillingTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingTaskGroupByArgs} args - Group by arguments.
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
      T extends BillingTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingTaskGroupByArgs['orderBy'] }
        : { orderBy?: BillingTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillingTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillingTask model
   */
  readonly fields: BillingTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillingTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends CreditAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditAccountDefaultArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends BillingTask$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, BillingTask$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BillingTask model
   */
  interface BillingTaskFieldRefs {
    readonly id: FieldRef<"BillingTask", 'String'>
    readonly accountId: FieldRef<"BillingTask", 'String'>
    readonly bizType: FieldRef<"BillingTask", 'String'>
    readonly bizId: FieldRef<"BillingTask", 'String'>
    readonly estimatedPoints: FieldRef<"BillingTask", 'Decimal'>
    readonly frozenPoints: FieldRef<"BillingTask", 'Decimal'>
    readonly settledPoints: FieldRef<"BillingTask", 'Decimal'>
    readonly refundedPoints: FieldRef<"BillingTask", 'Decimal'>
    readonly status: FieldRef<"BillingTask", 'BillingTaskStatus'>
    readonly pricingSnapshotJson: FieldRef<"BillingTask", 'Json'>
    readonly freezeIdempotencyKey: FieldRef<"BillingTask", 'String'>
    readonly settleIdempotencyKey: FieldRef<"BillingTask", 'String'>
    readonly refundIdempotencyKey: FieldRef<"BillingTask", 'String'>
    readonly lockExpireAt: FieldRef<"BillingTask", 'DateTime'>
    readonly frozenAt: FieldRef<"BillingTask", 'DateTime'>
    readonly settledAt: FieldRef<"BillingTask", 'DateTime'>
    readonly refundedAt: FieldRef<"BillingTask", 'DateTime'>
    readonly createdAt: FieldRef<"BillingTask", 'DateTime'>
    readonly updatedAt: FieldRef<"BillingTask", 'DateTime'>
    readonly version: FieldRef<"BillingTask", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BillingTask findUnique
   */
  export type BillingTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    /**
     * Filter, which BillingTask to fetch.
     */
    where: BillingTaskWhereUniqueInput
  }

  /**
   * BillingTask findUniqueOrThrow
   */
  export type BillingTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    /**
     * Filter, which BillingTask to fetch.
     */
    where: BillingTaskWhereUniqueInput
  }

  /**
   * BillingTask findFirst
   */
  export type BillingTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    /**
     * Filter, which BillingTask to fetch.
     */
    where?: BillingTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingTasks to fetch.
     */
    orderBy?: BillingTaskOrderByWithRelationInput | BillingTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingTasks.
     */
    cursor?: BillingTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingTasks.
     */
    distinct?: BillingTaskScalarFieldEnum | BillingTaskScalarFieldEnum[]
  }

  /**
   * BillingTask findFirstOrThrow
   */
  export type BillingTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    /**
     * Filter, which BillingTask to fetch.
     */
    where?: BillingTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingTasks to fetch.
     */
    orderBy?: BillingTaskOrderByWithRelationInput | BillingTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingTasks.
     */
    cursor?: BillingTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingTasks.
     */
    distinct?: BillingTaskScalarFieldEnum | BillingTaskScalarFieldEnum[]
  }

  /**
   * BillingTask findMany
   */
  export type BillingTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    /**
     * Filter, which BillingTasks to fetch.
     */
    where?: BillingTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingTasks to fetch.
     */
    orderBy?: BillingTaskOrderByWithRelationInput | BillingTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillingTasks.
     */
    cursor?: BillingTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingTasks.
     */
    skip?: number
    distinct?: BillingTaskScalarFieldEnum | BillingTaskScalarFieldEnum[]
  }

  /**
   * BillingTask create
   */
  export type BillingTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a BillingTask.
     */
    data: XOR<BillingTaskCreateInput, BillingTaskUncheckedCreateInput>
  }

  /**
   * BillingTask createMany
   */
  export type BillingTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillingTasks.
     */
    data: BillingTaskCreateManyInput | BillingTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingTask update
   */
  export type BillingTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a BillingTask.
     */
    data: XOR<BillingTaskUpdateInput, BillingTaskUncheckedUpdateInput>
    /**
     * Choose, which BillingTask to update.
     */
    where: BillingTaskWhereUniqueInput
  }

  /**
   * BillingTask updateMany
   */
  export type BillingTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillingTasks.
     */
    data: XOR<BillingTaskUpdateManyMutationInput, BillingTaskUncheckedUpdateManyInput>
    /**
     * Filter which BillingTasks to update
     */
    where?: BillingTaskWhereInput
    /**
     * Limit how many BillingTasks to update.
     */
    limit?: number
  }

  /**
   * BillingTask upsert
   */
  export type BillingTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the BillingTask to update in case it exists.
     */
    where: BillingTaskWhereUniqueInput
    /**
     * In case the BillingTask found by the `where` argument doesn't exist, create a new BillingTask with this data.
     */
    create: XOR<BillingTaskCreateInput, BillingTaskUncheckedCreateInput>
    /**
     * In case the BillingTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingTaskUpdateInput, BillingTaskUncheckedUpdateInput>
  }

  /**
   * BillingTask delete
   */
  export type BillingTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    /**
     * Filter which BillingTask to delete.
     */
    where: BillingTaskWhereUniqueInput
  }

  /**
   * BillingTask deleteMany
   */
  export type BillingTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingTasks to delete
     */
    where?: BillingTaskWhereInput
    /**
     * Limit how many BillingTasks to delete.
     */
    limit?: number
  }

  /**
   * BillingTask.transactions
   */
  export type BillingTask$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * BillingTask without action
   */
  export type BillingTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
  }


  /**
   * Model CreditTransaction
   */

  export type AggregateCreditTransaction = {
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  export type CreditTransactionAvgAggregateOutputType = {
    points: Decimal | null
    totalBalanceBefore: Decimal | null
    totalBalanceAfter: Decimal | null
    lockedBalanceBefore: Decimal | null
    lockedBalanceAfter: Decimal | null
    availableBalanceAfter: Decimal | null
  }

  export type CreditTransactionSumAggregateOutputType = {
    points: Decimal | null
    totalBalanceBefore: Decimal | null
    totalBalanceAfter: Decimal | null
    lockedBalanceBefore: Decimal | null
    lockedBalanceAfter: Decimal | null
    availableBalanceAfter: Decimal | null
  }

  export type CreditTransactionMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    grantId: string | null
    billingTaskId: string | null
    transactionType: $Enums.TransactionType | null
    direction: $Enums.TransactionDirection | null
    points: Decimal | null
    totalBalanceBefore: Decimal | null
    totalBalanceAfter: Decimal | null
    lockedBalanceBefore: Decimal | null
    lockedBalanceAfter: Decimal | null
    availableBalanceAfter: Decimal | null
    bizType: string | null
    bizId: string | null
    sourceOrderId: string | null
    refTransactionId: string | null
    descriptionCode: string | null
    createdAt: Date | null
  }

  export type CreditTransactionMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    grantId: string | null
    billingTaskId: string | null
    transactionType: $Enums.TransactionType | null
    direction: $Enums.TransactionDirection | null
    points: Decimal | null
    totalBalanceBefore: Decimal | null
    totalBalanceAfter: Decimal | null
    lockedBalanceBefore: Decimal | null
    lockedBalanceAfter: Decimal | null
    availableBalanceAfter: Decimal | null
    bizType: string | null
    bizId: string | null
    sourceOrderId: string | null
    refTransactionId: string | null
    descriptionCode: string | null
    createdAt: Date | null
  }

  export type CreditTransactionCountAggregateOutputType = {
    id: number
    accountId: number
    grantId: number
    billingTaskId: number
    transactionType: number
    direction: number
    points: number
    totalBalanceBefore: number
    totalBalanceAfter: number
    lockedBalanceBefore: number
    lockedBalanceAfter: number
    availableBalanceAfter: number
    bizType: number
    bizId: number
    sourceOrderId: number
    refTransactionId: number
    descriptionCode: number
    metadataJson: number
    createdAt: number
    _all: number
  }


  export type CreditTransactionAvgAggregateInputType = {
    points?: true
    totalBalanceBefore?: true
    totalBalanceAfter?: true
    lockedBalanceBefore?: true
    lockedBalanceAfter?: true
    availableBalanceAfter?: true
  }

  export type CreditTransactionSumAggregateInputType = {
    points?: true
    totalBalanceBefore?: true
    totalBalanceAfter?: true
    lockedBalanceBefore?: true
    lockedBalanceAfter?: true
    availableBalanceAfter?: true
  }

  export type CreditTransactionMinAggregateInputType = {
    id?: true
    accountId?: true
    grantId?: true
    billingTaskId?: true
    transactionType?: true
    direction?: true
    points?: true
    totalBalanceBefore?: true
    totalBalanceAfter?: true
    lockedBalanceBefore?: true
    lockedBalanceAfter?: true
    availableBalanceAfter?: true
    bizType?: true
    bizId?: true
    sourceOrderId?: true
    refTransactionId?: true
    descriptionCode?: true
    createdAt?: true
  }

  export type CreditTransactionMaxAggregateInputType = {
    id?: true
    accountId?: true
    grantId?: true
    billingTaskId?: true
    transactionType?: true
    direction?: true
    points?: true
    totalBalanceBefore?: true
    totalBalanceAfter?: true
    lockedBalanceBefore?: true
    lockedBalanceAfter?: true
    availableBalanceAfter?: true
    bizType?: true
    bizId?: true
    sourceOrderId?: true
    refTransactionId?: true
    descriptionCode?: true
    createdAt?: true
  }

  export type CreditTransactionCountAggregateInputType = {
    id?: true
    accountId?: true
    grantId?: true
    billingTaskId?: true
    transactionType?: true
    direction?: true
    points?: true
    totalBalanceBefore?: true
    totalBalanceAfter?: true
    lockedBalanceBefore?: true
    lockedBalanceAfter?: true
    availableBalanceAfter?: true
    bizType?: true
    bizId?: true
    sourceOrderId?: true
    refTransactionId?: true
    descriptionCode?: true
    metadataJson?: true
    createdAt?: true
    _all?: true
  }

  export type CreditTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransaction to aggregate.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransactions
    **/
    _count?: true | CreditTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type GetCreditTransactionAggregateType<T extends CreditTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransaction[P]>
      : GetScalarType<T[P], AggregateCreditTransaction[P]>
  }




  export type CreditTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithAggregationInput | CreditTransactionOrderByWithAggregationInput[]
    by: CreditTransactionScalarFieldEnum[] | CreditTransactionScalarFieldEnum
    having?: CreditTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransactionCountAggregateInputType | true
    _avg?: CreditTransactionAvgAggregateInputType
    _sum?: CreditTransactionSumAggregateInputType
    _min?: CreditTransactionMinAggregateInputType
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type CreditTransactionGroupByOutputType = {
    id: string
    accountId: string
    grantId: string | null
    billingTaskId: string | null
    transactionType: $Enums.TransactionType
    direction: $Enums.TransactionDirection
    points: Decimal
    totalBalanceBefore: Decimal
    totalBalanceAfter: Decimal
    lockedBalanceBefore: Decimal
    lockedBalanceAfter: Decimal
    availableBalanceAfter: Decimal
    bizType: string
    bizId: string
    sourceOrderId: string | null
    refTransactionId: string | null
    descriptionCode: string
    metadataJson: JsonValue | null
    createdAt: Date
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  type GetCreditTransactionGroupByPayload<T extends CreditTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    grantId?: boolean
    billingTaskId?: boolean
    transactionType?: boolean
    direction?: boolean
    points?: boolean
    totalBalanceBefore?: boolean
    totalBalanceAfter?: boolean
    lockedBalanceBefore?: boolean
    lockedBalanceAfter?: boolean
    availableBalanceAfter?: boolean
    bizType?: boolean
    bizId?: boolean
    sourceOrderId?: boolean
    refTransactionId?: boolean
    descriptionCode?: boolean
    metadataJson?: boolean
    createdAt?: boolean
    account?: boolean | CreditAccountDefaultArgs<ExtArgs>
    billingTask?: boolean | CreditTransaction$billingTaskArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>



  export type CreditTransactionSelectScalar = {
    id?: boolean
    accountId?: boolean
    grantId?: boolean
    billingTaskId?: boolean
    transactionType?: boolean
    direction?: boolean
    points?: boolean
    totalBalanceBefore?: boolean
    totalBalanceAfter?: boolean
    lockedBalanceBefore?: boolean
    lockedBalanceAfter?: boolean
    availableBalanceAfter?: boolean
    bizType?: boolean
    bizId?: boolean
    sourceOrderId?: boolean
    refTransactionId?: boolean
    descriptionCode?: boolean
    metadataJson?: boolean
    createdAt?: boolean
  }

  export type CreditTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "grantId" | "billingTaskId" | "transactionType" | "direction" | "points" | "totalBalanceBefore" | "totalBalanceAfter" | "lockedBalanceBefore" | "lockedBalanceAfter" | "availableBalanceAfter" | "bizType" | "bizId" | "sourceOrderId" | "refTransactionId" | "descriptionCode" | "metadataJson" | "createdAt", ExtArgs["result"]["creditTransaction"]>
  export type CreditTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | CreditAccountDefaultArgs<ExtArgs>
    billingTask?: boolean | CreditTransaction$billingTaskArgs<ExtArgs>
  }

  export type $CreditTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransaction"
    objects: {
      account: Prisma.$CreditAccountPayload<ExtArgs>
      billingTask: Prisma.$BillingTaskPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      grantId: string | null
      billingTaskId: string | null
      transactionType: $Enums.TransactionType
      direction: $Enums.TransactionDirection
      points: Prisma.Decimal
      totalBalanceBefore: Prisma.Decimal
      totalBalanceAfter: Prisma.Decimal
      lockedBalanceBefore: Prisma.Decimal
      lockedBalanceAfter: Prisma.Decimal
      availableBalanceAfter: Prisma.Decimal
      bizType: string
      bizId: string
      sourceOrderId: string | null
      refTransactionId: string | null
      descriptionCode: string
      metadataJson: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["creditTransaction"]>
    composites: {}
  }

  type CreditTransactionGetPayload<S extends boolean | null | undefined | CreditTransactionDefaultArgs> = $Result.GetResult<Prisma.$CreditTransactionPayload, S>

  type CreditTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditTransactionCountAggregateInputType | true
    }

  export interface CreditTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransaction'], meta: { name: 'CreditTransaction' } }
    /**
     * Find zero or one CreditTransaction that matches the filter.
     * @param {CreditTransactionFindUniqueArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditTransactionFindUniqueArgs>(args: SelectSubset<T, CreditTransactionFindUniqueArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditTransactionFindUniqueOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditTransactionFindFirstArgs>(args?: SelectSubset<T, CreditTransactionFindFirstArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany()
     * 
     * // Get first 10 CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditTransactionFindManyArgs>(args?: SelectSubset<T, CreditTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditTransaction.
     * @param {CreditTransactionCreateArgs} args - Arguments to create a CreditTransaction.
     * @example
     * // Create one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.create({
     *   data: {
     *     // ... data to create a CreditTransaction
     *   }
     * })
     * 
     */
    create<T extends CreditTransactionCreateArgs>(args: SelectSubset<T, CreditTransactionCreateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditTransactions.
     * @param {CreditTransactionCreateManyArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditTransactionCreateManyArgs>(args?: SelectSubset<T, CreditTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditTransaction.
     * @param {CreditTransactionDeleteArgs} args - Arguments to delete one CreditTransaction.
     * @example
     * // Delete one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.delete({
     *   where: {
     *     // ... filter to delete one CreditTransaction
     *   }
     * })
     * 
     */
    delete<T extends CreditTransactionDeleteArgs>(args: SelectSubset<T, CreditTransactionDeleteArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditTransaction.
     * @param {CreditTransactionUpdateArgs} args - Arguments to update one CreditTransaction.
     * @example
     * // Update one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditTransactionUpdateArgs>(args: SelectSubset<T, CreditTransactionUpdateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditTransactions.
     * @param {CreditTransactionDeleteManyArgs} args - Arguments to filter CreditTransactions to delete.
     * @example
     * // Delete a few CreditTransactions
     * const { count } = await prisma.creditTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditTransactionDeleteManyArgs>(args?: SelectSubset<T, CreditTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditTransactionUpdateManyArgs>(args: SelectSubset<T, CreditTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditTransaction.
     * @param {CreditTransactionUpsertArgs} args - Arguments to update or create a CreditTransaction.
     * @example
     * // Update or create a CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.upsert({
     *   create: {
     *     // ... data to create a CreditTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CreditTransactionUpsertArgs>(args: SelectSubset<T, CreditTransactionUpsertArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionCountArgs} args - Arguments to filter CreditTransactions to count.
     * @example
     * // Count the number of CreditTransactions
     * const count = await prisma.creditTransaction.count({
     *   where: {
     *     // ... the filter for the CreditTransactions we want to count
     *   }
     * })
    **/
    count<T extends CreditTransactionCountArgs>(
      args?: Subset<T, CreditTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditTransactionAggregateArgs>(args: Subset<T, CreditTransactionAggregateArgs>): Prisma.PrismaPromise<GetCreditTransactionAggregateType<T>>

    /**
     * Group by CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionGroupByArgs} args - Group by arguments.
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
      T extends CreditTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransaction model
   */
  readonly fields: CreditTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends CreditAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditAccountDefaultArgs<ExtArgs>>): Prisma__CreditAccountClient<$Result.GetResult<Prisma.$CreditAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    billingTask<T extends CreditTransaction$billingTaskArgs<ExtArgs> = {}>(args?: Subset<T, CreditTransaction$billingTaskArgs<ExtArgs>>): Prisma__BillingTaskClient<$Result.GetResult<Prisma.$BillingTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CreditTransaction model
   */
  interface CreditTransactionFieldRefs {
    readonly id: FieldRef<"CreditTransaction", 'String'>
    readonly accountId: FieldRef<"CreditTransaction", 'String'>
    readonly grantId: FieldRef<"CreditTransaction", 'String'>
    readonly billingTaskId: FieldRef<"CreditTransaction", 'String'>
    readonly transactionType: FieldRef<"CreditTransaction", 'TransactionType'>
    readonly direction: FieldRef<"CreditTransaction", 'TransactionDirection'>
    readonly points: FieldRef<"CreditTransaction", 'Decimal'>
    readonly totalBalanceBefore: FieldRef<"CreditTransaction", 'Decimal'>
    readonly totalBalanceAfter: FieldRef<"CreditTransaction", 'Decimal'>
    readonly lockedBalanceBefore: FieldRef<"CreditTransaction", 'Decimal'>
    readonly lockedBalanceAfter: FieldRef<"CreditTransaction", 'Decimal'>
    readonly availableBalanceAfter: FieldRef<"CreditTransaction", 'Decimal'>
    readonly bizType: FieldRef<"CreditTransaction", 'String'>
    readonly bizId: FieldRef<"CreditTransaction", 'String'>
    readonly sourceOrderId: FieldRef<"CreditTransaction", 'String'>
    readonly refTransactionId: FieldRef<"CreditTransaction", 'String'>
    readonly descriptionCode: FieldRef<"CreditTransaction", 'String'>
    readonly metadataJson: FieldRef<"CreditTransaction", 'Json'>
    readonly createdAt: FieldRef<"CreditTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditTransaction findUnique
   */
  export type CreditTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findUniqueOrThrow
   */
  export type CreditTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findFirst
   */
  export type CreditTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findFirstOrThrow
   */
  export type CreditTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findMany
   */
  export type CreditTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransactions to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction create
   */
  export type CreditTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditTransaction.
     */
    data: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
  }

  /**
   * CreditTransaction createMany
   */
  export type CreditTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTransaction update
   */
  export type CreditTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditTransaction.
     */
    data: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
    /**
     * Choose, which CreditTransaction to update.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction updateMany
   */
  export type CreditTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to update.
     */
    limit?: number
  }

  /**
   * CreditTransaction upsert
   */
  export type CreditTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditTransaction to update in case it exists.
     */
    where: CreditTransactionWhereUniqueInput
    /**
     * In case the CreditTransaction found by the `where` argument doesn't exist, create a new CreditTransaction with this data.
     */
    create: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
    /**
     * In case the CreditTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
  }

  /**
   * CreditTransaction delete
   */
  export type CreditTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter which CreditTransaction to delete.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction deleteMany
   */
  export type CreditTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransactions to delete
     */
    where?: CreditTransactionWhereInput
    /**
     * Limit how many CreditTransactions to delete.
     */
    limit?: number
  }

  /**
   * CreditTransaction.billingTask
   */
  export type CreditTransaction$billingTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingTask
     */
    select?: BillingTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingTask
     */
    omit?: BillingTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingTaskInclude<ExtArgs> | null
    where?: BillingTaskWhereInput
  }

  /**
   * CreditTransaction without action
   */
  export type CreditTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditTransaction
     */
    omit?: CreditTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditTransactionInclude<ExtArgs> | null
  }


  /**
   * Model IdempotencyKey
   */

  export type AggregateIdempotencyKey = {
    _count: IdempotencyKeyCountAggregateOutputType | null
    _min: IdempotencyKeyMinAggregateOutputType | null
    _max: IdempotencyKeyMaxAggregateOutputType | null
  }

  export type IdempotencyKeyMinAggregateOutputType = {
    id: string | null
    caller: string | null
    operation: string | null
    idempotencyKey: string | null
    requestHash: string | null
    status: $Enums.IdempotencyStatus | null
    resourceType: string | null
    resourceId: string | null
    errorCode: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdempotencyKeyMaxAggregateOutputType = {
    id: string | null
    caller: string | null
    operation: string | null
    idempotencyKey: string | null
    requestHash: string | null
    status: $Enums.IdempotencyStatus | null
    resourceType: string | null
    resourceId: string | null
    errorCode: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdempotencyKeyCountAggregateOutputType = {
    id: number
    caller: number
    operation: number
    idempotencyKey: number
    requestHash: number
    status: number
    resourceType: number
    resourceId: number
    responseJson: number
    errorCode: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IdempotencyKeyMinAggregateInputType = {
    id?: true
    caller?: true
    operation?: true
    idempotencyKey?: true
    requestHash?: true
    status?: true
    resourceType?: true
    resourceId?: true
    errorCode?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdempotencyKeyMaxAggregateInputType = {
    id?: true
    caller?: true
    operation?: true
    idempotencyKey?: true
    requestHash?: true
    status?: true
    resourceType?: true
    resourceId?: true
    errorCode?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdempotencyKeyCountAggregateInputType = {
    id?: true
    caller?: true
    operation?: true
    idempotencyKey?: true
    requestHash?: true
    status?: true
    resourceType?: true
    resourceId?: true
    responseJson?: true
    errorCode?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IdempotencyKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdempotencyKey to aggregate.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdempotencyKeys
    **/
    _count?: true | IdempotencyKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdempotencyKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdempotencyKeyMaxAggregateInputType
  }

  export type GetIdempotencyKeyAggregateType<T extends IdempotencyKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateIdempotencyKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdempotencyKey[P]>
      : GetScalarType<T[P], AggregateIdempotencyKey[P]>
  }




  export type IdempotencyKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdempotencyKeyWhereInput
    orderBy?: IdempotencyKeyOrderByWithAggregationInput | IdempotencyKeyOrderByWithAggregationInput[]
    by: IdempotencyKeyScalarFieldEnum[] | IdempotencyKeyScalarFieldEnum
    having?: IdempotencyKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdempotencyKeyCountAggregateInputType | true
    _min?: IdempotencyKeyMinAggregateInputType
    _max?: IdempotencyKeyMaxAggregateInputType
  }

  export type IdempotencyKeyGroupByOutputType = {
    id: string
    caller: string
    operation: string
    idempotencyKey: string
    requestHash: string
    status: $Enums.IdempotencyStatus
    resourceType: string | null
    resourceId: string | null
    responseJson: JsonValue | null
    errorCode: string | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: IdempotencyKeyCountAggregateOutputType | null
    _min: IdempotencyKeyMinAggregateOutputType | null
    _max: IdempotencyKeyMaxAggregateOutputType | null
  }

  type GetIdempotencyKeyGroupByPayload<T extends IdempotencyKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdempotencyKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdempotencyKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>
            : GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>
        }
      >
    >


  export type IdempotencyKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caller?: boolean
    operation?: boolean
    idempotencyKey?: boolean
    requestHash?: boolean
    status?: boolean
    resourceType?: boolean
    resourceId?: boolean
    responseJson?: boolean
    errorCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["idempotencyKey"]>



  export type IdempotencyKeySelectScalar = {
    id?: boolean
    caller?: boolean
    operation?: boolean
    idempotencyKey?: boolean
    requestHash?: boolean
    status?: boolean
    resourceType?: boolean
    resourceId?: boolean
    responseJson?: boolean
    errorCode?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IdempotencyKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caller" | "operation" | "idempotencyKey" | "requestHash" | "status" | "resourceType" | "resourceId" | "responseJson" | "errorCode" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["idempotencyKey"]>

  export type $IdempotencyKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdempotencyKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      caller: string
      operation: string
      idempotencyKey: string
      requestHash: string
      status: $Enums.IdempotencyStatus
      resourceType: string | null
      resourceId: string | null
      responseJson: Prisma.JsonValue | null
      errorCode: string | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["idempotencyKey"]>
    composites: {}
  }

  type IdempotencyKeyGetPayload<S extends boolean | null | undefined | IdempotencyKeyDefaultArgs> = $Result.GetResult<Prisma.$IdempotencyKeyPayload, S>

  type IdempotencyKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdempotencyKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdempotencyKeyCountAggregateInputType | true
    }

  export interface IdempotencyKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdempotencyKey'], meta: { name: 'IdempotencyKey' } }
    /**
     * Find zero or one IdempotencyKey that matches the filter.
     * @param {IdempotencyKeyFindUniqueArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdempotencyKeyFindUniqueArgs>(args: SelectSubset<T, IdempotencyKeyFindUniqueArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdempotencyKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdempotencyKeyFindUniqueOrThrowArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdempotencyKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdempotencyKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindFirstArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdempotencyKeyFindFirstArgs>(args?: SelectSubset<T, IdempotencyKeyFindFirstArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdempotencyKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindFirstOrThrowArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdempotencyKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdempotencyKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdempotencyKeys
     * const idempotencyKeys = await prisma.idempotencyKey.findMany()
     * 
     * // Get first 10 IdempotencyKeys
     * const idempotencyKeys = await prisma.idempotencyKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idempotencyKeyWithIdOnly = await prisma.idempotencyKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdempotencyKeyFindManyArgs>(args?: SelectSubset<T, IdempotencyKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdempotencyKey.
     * @param {IdempotencyKeyCreateArgs} args - Arguments to create a IdempotencyKey.
     * @example
     * // Create one IdempotencyKey
     * const IdempotencyKey = await prisma.idempotencyKey.create({
     *   data: {
     *     // ... data to create a IdempotencyKey
     *   }
     * })
     * 
     */
    create<T extends IdempotencyKeyCreateArgs>(args: SelectSubset<T, IdempotencyKeyCreateArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdempotencyKeys.
     * @param {IdempotencyKeyCreateManyArgs} args - Arguments to create many IdempotencyKeys.
     * @example
     * // Create many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdempotencyKeyCreateManyArgs>(args?: SelectSubset<T, IdempotencyKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IdempotencyKey.
     * @param {IdempotencyKeyDeleteArgs} args - Arguments to delete one IdempotencyKey.
     * @example
     * // Delete one IdempotencyKey
     * const IdempotencyKey = await prisma.idempotencyKey.delete({
     *   where: {
     *     // ... filter to delete one IdempotencyKey
     *   }
     * })
     * 
     */
    delete<T extends IdempotencyKeyDeleteArgs>(args: SelectSubset<T, IdempotencyKeyDeleteArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdempotencyKey.
     * @param {IdempotencyKeyUpdateArgs} args - Arguments to update one IdempotencyKey.
     * @example
     * // Update one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdempotencyKeyUpdateArgs>(args: SelectSubset<T, IdempotencyKeyUpdateArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdempotencyKeys.
     * @param {IdempotencyKeyDeleteManyArgs} args - Arguments to filter IdempotencyKeys to delete.
     * @example
     * // Delete a few IdempotencyKeys
     * const { count } = await prisma.idempotencyKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdempotencyKeyDeleteManyArgs>(args?: SelectSubset<T, IdempotencyKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdempotencyKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdempotencyKeyUpdateManyArgs>(args: SelectSubset<T, IdempotencyKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IdempotencyKey.
     * @param {IdempotencyKeyUpsertArgs} args - Arguments to update or create a IdempotencyKey.
     * @example
     * // Update or create a IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.upsert({
     *   create: {
     *     // ... data to create a IdempotencyKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdempotencyKey we want to update
     *   }
     * })
     */
    upsert<T extends IdempotencyKeyUpsertArgs>(args: SelectSubset<T, IdempotencyKeyUpsertArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdempotencyKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyCountArgs} args - Arguments to filter IdempotencyKeys to count.
     * @example
     * // Count the number of IdempotencyKeys
     * const count = await prisma.idempotencyKey.count({
     *   where: {
     *     // ... the filter for the IdempotencyKeys we want to count
     *   }
     * })
    **/
    count<T extends IdempotencyKeyCountArgs>(
      args?: Subset<T, IdempotencyKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdempotencyKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdempotencyKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdempotencyKeyAggregateArgs>(args: Subset<T, IdempotencyKeyAggregateArgs>): Prisma.PrismaPromise<GetIdempotencyKeyAggregateType<T>>

    /**
     * Group by IdempotencyKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyGroupByArgs} args - Group by arguments.
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
      T extends IdempotencyKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdempotencyKeyGroupByArgs['orderBy'] }
        : { orderBy?: IdempotencyKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdempotencyKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdempotencyKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdempotencyKey model
   */
  readonly fields: IdempotencyKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdempotencyKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdempotencyKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the IdempotencyKey model
   */
  interface IdempotencyKeyFieldRefs {
    readonly id: FieldRef<"IdempotencyKey", 'String'>
    readonly caller: FieldRef<"IdempotencyKey", 'String'>
    readonly operation: FieldRef<"IdempotencyKey", 'String'>
    readonly idempotencyKey: FieldRef<"IdempotencyKey", 'String'>
    readonly requestHash: FieldRef<"IdempotencyKey", 'String'>
    readonly status: FieldRef<"IdempotencyKey", 'IdempotencyStatus'>
    readonly resourceType: FieldRef<"IdempotencyKey", 'String'>
    readonly resourceId: FieldRef<"IdempotencyKey", 'String'>
    readonly responseJson: FieldRef<"IdempotencyKey", 'Json'>
    readonly errorCode: FieldRef<"IdempotencyKey", 'String'>
    readonly expiresAt: FieldRef<"IdempotencyKey", 'DateTime'>
    readonly createdAt: FieldRef<"IdempotencyKey", 'DateTime'>
    readonly updatedAt: FieldRef<"IdempotencyKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IdempotencyKey findUnique
   */
  export type IdempotencyKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey findUniqueOrThrow
   */
  export type IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey findFirst
   */
  export type IdempotencyKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey findFirstOrThrow
   */
  export type IdempotencyKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey findMany
   */
  export type IdempotencyKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter, which IdempotencyKeys to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey create
   */
  export type IdempotencyKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * The data needed to create a IdempotencyKey.
     */
    data: XOR<IdempotencyKeyCreateInput, IdempotencyKeyUncheckedCreateInput>
  }

  /**
   * IdempotencyKey createMany
   */
  export type IdempotencyKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdempotencyKeys.
     */
    data: IdempotencyKeyCreateManyInput | IdempotencyKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdempotencyKey update
   */
  export type IdempotencyKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * The data needed to update a IdempotencyKey.
     */
    data: XOR<IdempotencyKeyUpdateInput, IdempotencyKeyUncheckedUpdateInput>
    /**
     * Choose, which IdempotencyKey to update.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey updateMany
   */
  export type IdempotencyKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdempotencyKeys.
     */
    data: XOR<IdempotencyKeyUpdateManyMutationInput, IdempotencyKeyUncheckedUpdateManyInput>
    /**
     * Filter which IdempotencyKeys to update
     */
    where?: IdempotencyKeyWhereInput
    /**
     * Limit how many IdempotencyKeys to update.
     */
    limit?: number
  }

  /**
   * IdempotencyKey upsert
   */
  export type IdempotencyKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * The filter to search for the IdempotencyKey to update in case it exists.
     */
    where: IdempotencyKeyWhereUniqueInput
    /**
     * In case the IdempotencyKey found by the `where` argument doesn't exist, create a new IdempotencyKey with this data.
     */
    create: XOR<IdempotencyKeyCreateInput, IdempotencyKeyUncheckedCreateInput>
    /**
     * In case the IdempotencyKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdempotencyKeyUpdateInput, IdempotencyKeyUncheckedUpdateInput>
  }

  /**
   * IdempotencyKey delete
   */
  export type IdempotencyKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Filter which IdempotencyKey to delete.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey deleteMany
   */
  export type IdempotencyKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdempotencyKeys to delete
     */
    where?: IdempotencyKeyWhereInput
    /**
     * Limit how many IdempotencyKeys to delete.
     */
    limit?: number
  }

  /**
   * IdempotencyKey without action
   */
  export type IdempotencyKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
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


  export const CreditAccountScalarFieldEnum: {
    id: 'id',
    ownerType: 'ownerType',
    ownerId: 'ownerId',
    currency: 'currency',
    totalBalance: 'totalBalance',
    lockedBalance: 'lockedBalance',
    availableBalance: 'availableBalance',
    status: 'status',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditAccountScalarFieldEnum = (typeof CreditAccountScalarFieldEnum)[keyof typeof CreditAccountScalarFieldEnum]


  export const BillingTaskScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    bizType: 'bizType',
    bizId: 'bizId',
    estimatedPoints: 'estimatedPoints',
    frozenPoints: 'frozenPoints',
    settledPoints: 'settledPoints',
    refundedPoints: 'refundedPoints',
    status: 'status',
    pricingSnapshotJson: 'pricingSnapshotJson',
    freezeIdempotencyKey: 'freezeIdempotencyKey',
    settleIdempotencyKey: 'settleIdempotencyKey',
    refundIdempotencyKey: 'refundIdempotencyKey',
    lockExpireAt: 'lockExpireAt',
    frozenAt: 'frozenAt',
    settledAt: 'settledAt',
    refundedAt: 'refundedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    version: 'version'
  };

  export type BillingTaskScalarFieldEnum = (typeof BillingTaskScalarFieldEnum)[keyof typeof BillingTaskScalarFieldEnum]


  export const CreditTransactionScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    grantId: 'grantId',
    billingTaskId: 'billingTaskId',
    transactionType: 'transactionType',
    direction: 'direction',
    points: 'points',
    totalBalanceBefore: 'totalBalanceBefore',
    totalBalanceAfter: 'totalBalanceAfter',
    lockedBalanceBefore: 'lockedBalanceBefore',
    lockedBalanceAfter: 'lockedBalanceAfter',
    availableBalanceAfter: 'availableBalanceAfter',
    bizType: 'bizType',
    bizId: 'bizId',
    sourceOrderId: 'sourceOrderId',
    refTransactionId: 'refTransactionId',
    descriptionCode: 'descriptionCode',
    metadataJson: 'metadataJson',
    createdAt: 'createdAt'
  };

  export type CreditTransactionScalarFieldEnum = (typeof CreditTransactionScalarFieldEnum)[keyof typeof CreditTransactionScalarFieldEnum]


  export const IdempotencyKeyScalarFieldEnum: {
    id: 'id',
    caller: 'caller',
    operation: 'operation',
    idempotencyKey: 'idempotencyKey',
    requestHash: 'requestHash',
    status: 'status',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    responseJson: 'responseJson',
    errorCode: 'errorCode',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IdempotencyKeyScalarFieldEnum = (typeof IdempotencyKeyScalarFieldEnum)[keyof typeof IdempotencyKeyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const CreditAccountOrderByRelevanceFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    currency: 'currency'
  };

  export type CreditAccountOrderByRelevanceFieldEnum = (typeof CreditAccountOrderByRelevanceFieldEnum)[keyof typeof CreditAccountOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BillingTaskOrderByRelevanceFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    bizType: 'bizType',
    bizId: 'bizId',
    freezeIdempotencyKey: 'freezeIdempotencyKey',
    settleIdempotencyKey: 'settleIdempotencyKey',
    refundIdempotencyKey: 'refundIdempotencyKey'
  };

  export type BillingTaskOrderByRelevanceFieldEnum = (typeof BillingTaskOrderByRelevanceFieldEnum)[keyof typeof BillingTaskOrderByRelevanceFieldEnum]


  export const CreditTransactionOrderByRelevanceFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    grantId: 'grantId',
    billingTaskId: 'billingTaskId',
    bizType: 'bizType',
    bizId: 'bizId',
    sourceOrderId: 'sourceOrderId',
    refTransactionId: 'refTransactionId',
    descriptionCode: 'descriptionCode'
  };

  export type CreditTransactionOrderByRelevanceFieldEnum = (typeof CreditTransactionOrderByRelevanceFieldEnum)[keyof typeof CreditTransactionOrderByRelevanceFieldEnum]


  export const IdempotencyKeyOrderByRelevanceFieldEnum: {
    id: 'id',
    caller: 'caller',
    operation: 'operation',
    idempotencyKey: 'idempotencyKey',
    requestHash: 'requestHash',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    errorCode: 'errorCode'
  };

  export type IdempotencyKeyOrderByRelevanceFieldEnum = (typeof IdempotencyKeyOrderByRelevanceFieldEnum)[keyof typeof IdempotencyKeyOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'AccountOwnerType'
   */
  export type EnumAccountOwnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountOwnerType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'CreditAccountStatus'
   */
  export type EnumCreditAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditAccountStatus'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'BillingTaskStatus'
   */
  export type EnumBillingTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingTaskStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionDirection'
   */
  export type EnumTransactionDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionDirection'>
    


  /**
   * Reference to a field of type 'IdempotencyStatus'
   */
  export type EnumIdempotencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IdempotencyStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CreditAccountWhereInput = {
    AND?: CreditAccountWhereInput | CreditAccountWhereInput[]
    OR?: CreditAccountWhereInput[]
    NOT?: CreditAccountWhereInput | CreditAccountWhereInput[]
    id?: StringFilter<"CreditAccount"> | string
    ownerType?: EnumAccountOwnerTypeFilter<"CreditAccount"> | $Enums.AccountOwnerType
    ownerId?: StringFilter<"CreditAccount"> | string
    currency?: StringFilter<"CreditAccount"> | string
    totalBalance?: DecimalFilter<"CreditAccount"> | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalFilter<"CreditAccount"> | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFilter<"CreditAccount"> | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusFilter<"CreditAccount"> | $Enums.CreditAccountStatus
    version?: BigIntFilter<"CreditAccount"> | bigint | number
    createdAt?: DateTimeFilter<"CreditAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAccount"> | Date | string
    billingTasks?: BillingTaskListRelationFilter
    transactions?: CreditTransactionListRelationFilter
  }

  export type CreditAccountOrderByWithRelationInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    currency?: SortOrder
    totalBalance?: SortOrder
    lockedBalance?: SortOrder
    availableBalance?: SortOrder
    status?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    billingTasks?: BillingTaskOrderByRelationAggregateInput
    transactions?: CreditTransactionOrderByRelationAggregateInput
    _relevance?: CreditAccountOrderByRelevanceInput
  }

  export type CreditAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerType_ownerId_currency?: CreditAccountOwnerTypeOwnerIdCurrencyCompoundUniqueInput
    AND?: CreditAccountWhereInput | CreditAccountWhereInput[]
    OR?: CreditAccountWhereInput[]
    NOT?: CreditAccountWhereInput | CreditAccountWhereInput[]
    ownerType?: EnumAccountOwnerTypeFilter<"CreditAccount"> | $Enums.AccountOwnerType
    ownerId?: StringFilter<"CreditAccount"> | string
    currency?: StringFilter<"CreditAccount"> | string
    totalBalance?: DecimalFilter<"CreditAccount"> | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalFilter<"CreditAccount"> | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFilter<"CreditAccount"> | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusFilter<"CreditAccount"> | $Enums.CreditAccountStatus
    version?: BigIntFilter<"CreditAccount"> | bigint | number
    createdAt?: DateTimeFilter<"CreditAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CreditAccount"> | Date | string
    billingTasks?: BillingTaskListRelationFilter
    transactions?: CreditTransactionListRelationFilter
  }, "id" | "ownerType_ownerId_currency">

  export type CreditAccountOrderByWithAggregationInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    currency?: SortOrder
    totalBalance?: SortOrder
    lockedBalance?: SortOrder
    availableBalance?: SortOrder
    status?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditAccountCountOrderByAggregateInput
    _avg?: CreditAccountAvgOrderByAggregateInput
    _max?: CreditAccountMaxOrderByAggregateInput
    _min?: CreditAccountMinOrderByAggregateInput
    _sum?: CreditAccountSumOrderByAggregateInput
  }

  export type CreditAccountScalarWhereWithAggregatesInput = {
    AND?: CreditAccountScalarWhereWithAggregatesInput | CreditAccountScalarWhereWithAggregatesInput[]
    OR?: CreditAccountScalarWhereWithAggregatesInput[]
    NOT?: CreditAccountScalarWhereWithAggregatesInput | CreditAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditAccount"> | string
    ownerType?: EnumAccountOwnerTypeWithAggregatesFilter<"CreditAccount"> | $Enums.AccountOwnerType
    ownerId?: StringWithAggregatesFilter<"CreditAccount"> | string
    currency?: StringWithAggregatesFilter<"CreditAccount"> | string
    totalBalance?: DecimalWithAggregatesFilter<"CreditAccount"> | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalWithAggregatesFilter<"CreditAccount"> | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalWithAggregatesFilter<"CreditAccount"> | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusWithAggregatesFilter<"CreditAccount"> | $Enums.CreditAccountStatus
    version?: BigIntWithAggregatesFilter<"CreditAccount"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"CreditAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditAccount"> | Date | string
  }

  export type BillingTaskWhereInput = {
    AND?: BillingTaskWhereInput | BillingTaskWhereInput[]
    OR?: BillingTaskWhereInput[]
    NOT?: BillingTaskWhereInput | BillingTaskWhereInput[]
    id?: StringFilter<"BillingTask"> | string
    accountId?: StringFilter<"BillingTask"> | string
    bizType?: StringFilter<"BillingTask"> | string
    bizId?: StringFilter<"BillingTask"> | string
    estimatedPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFilter<"BillingTask"> | $Enums.BillingTaskStatus
    pricingSnapshotJson?: JsonNullableFilter<"BillingTask">
    freezeIdempotencyKey?: StringFilter<"BillingTask"> | string
    settleIdempotencyKey?: StringNullableFilter<"BillingTask"> | string | null
    refundIdempotencyKey?: StringNullableFilter<"BillingTask"> | string | null
    lockExpireAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    frozenAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    settledAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    createdAt?: DateTimeFilter<"BillingTask"> | Date | string
    updatedAt?: DateTimeFilter<"BillingTask"> | Date | string
    version?: IntFilter<"BillingTask"> | number
    account?: XOR<CreditAccountScalarRelationFilter, CreditAccountWhereInput>
    transactions?: CreditTransactionListRelationFilter
  }

  export type BillingTaskOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    bizType?: SortOrder
    bizId?: SortOrder
    estimatedPoints?: SortOrder
    frozenPoints?: SortOrder
    settledPoints?: SortOrder
    refundedPoints?: SortOrder
    status?: SortOrder
    pricingSnapshotJson?: SortOrderInput | SortOrder
    freezeIdempotencyKey?: SortOrder
    settleIdempotencyKey?: SortOrderInput | SortOrder
    refundIdempotencyKey?: SortOrderInput | SortOrder
    lockExpireAt?: SortOrderInput | SortOrder
    frozenAt?: SortOrderInput | SortOrder
    settledAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    account?: CreditAccountOrderByWithRelationInput
    transactions?: CreditTransactionOrderByRelationAggregateInput
    _relevance?: BillingTaskOrderByRelevanceInput
  }

  export type BillingTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    freezeIdempotencyKey?: string
    bizType_bizId?: BillingTaskBizTypeBizIdCompoundUniqueInput
    AND?: BillingTaskWhereInput | BillingTaskWhereInput[]
    OR?: BillingTaskWhereInput[]
    NOT?: BillingTaskWhereInput | BillingTaskWhereInput[]
    accountId?: StringFilter<"BillingTask"> | string
    bizType?: StringFilter<"BillingTask"> | string
    bizId?: StringFilter<"BillingTask"> | string
    estimatedPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFilter<"BillingTask"> | $Enums.BillingTaskStatus
    pricingSnapshotJson?: JsonNullableFilter<"BillingTask">
    settleIdempotencyKey?: StringNullableFilter<"BillingTask"> | string | null
    refundIdempotencyKey?: StringNullableFilter<"BillingTask"> | string | null
    lockExpireAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    frozenAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    settledAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    createdAt?: DateTimeFilter<"BillingTask"> | Date | string
    updatedAt?: DateTimeFilter<"BillingTask"> | Date | string
    version?: IntFilter<"BillingTask"> | number
    account?: XOR<CreditAccountScalarRelationFilter, CreditAccountWhereInput>
    transactions?: CreditTransactionListRelationFilter
  }, "id" | "bizType_bizId" | "freezeIdempotencyKey">

  export type BillingTaskOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    bizType?: SortOrder
    bizId?: SortOrder
    estimatedPoints?: SortOrder
    frozenPoints?: SortOrder
    settledPoints?: SortOrder
    refundedPoints?: SortOrder
    status?: SortOrder
    pricingSnapshotJson?: SortOrderInput | SortOrder
    freezeIdempotencyKey?: SortOrder
    settleIdempotencyKey?: SortOrderInput | SortOrder
    refundIdempotencyKey?: SortOrderInput | SortOrder
    lockExpireAt?: SortOrderInput | SortOrder
    frozenAt?: SortOrderInput | SortOrder
    settledAt?: SortOrderInput | SortOrder
    refundedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
    _count?: BillingTaskCountOrderByAggregateInput
    _avg?: BillingTaskAvgOrderByAggregateInput
    _max?: BillingTaskMaxOrderByAggregateInput
    _min?: BillingTaskMinOrderByAggregateInput
    _sum?: BillingTaskSumOrderByAggregateInput
  }

  export type BillingTaskScalarWhereWithAggregatesInput = {
    AND?: BillingTaskScalarWhereWithAggregatesInput | BillingTaskScalarWhereWithAggregatesInput[]
    OR?: BillingTaskScalarWhereWithAggregatesInput[]
    NOT?: BillingTaskScalarWhereWithAggregatesInput | BillingTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BillingTask"> | string
    accountId?: StringWithAggregatesFilter<"BillingTask"> | string
    bizType?: StringWithAggregatesFilter<"BillingTask"> | string
    bizId?: StringWithAggregatesFilter<"BillingTask"> | string
    estimatedPoints?: DecimalWithAggregatesFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalWithAggregatesFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalWithAggregatesFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalWithAggregatesFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusWithAggregatesFilter<"BillingTask"> | $Enums.BillingTaskStatus
    pricingSnapshotJson?: JsonNullableWithAggregatesFilter<"BillingTask">
    freezeIdempotencyKey?: StringWithAggregatesFilter<"BillingTask"> | string
    settleIdempotencyKey?: StringNullableWithAggregatesFilter<"BillingTask"> | string | null
    refundIdempotencyKey?: StringNullableWithAggregatesFilter<"BillingTask"> | string | null
    lockExpireAt?: DateTimeNullableWithAggregatesFilter<"BillingTask"> | Date | string | null
    frozenAt?: DateTimeNullableWithAggregatesFilter<"BillingTask"> | Date | string | null
    settledAt?: DateTimeNullableWithAggregatesFilter<"BillingTask"> | Date | string | null
    refundedAt?: DateTimeNullableWithAggregatesFilter<"BillingTask"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BillingTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BillingTask"> | Date | string
    version?: IntWithAggregatesFilter<"BillingTask"> | number
  }

  export type CreditTransactionWhereInput = {
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    accountId?: StringFilter<"CreditTransaction"> | string
    grantId?: StringNullableFilter<"CreditTransaction"> | string | null
    billingTaskId?: StringNullableFilter<"CreditTransaction"> | string | null
    transactionType?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    direction?: EnumTransactionDirectionFilter<"CreditTransaction"> | $Enums.TransactionDirection
    points?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    bizType?: StringFilter<"CreditTransaction"> | string
    bizId?: StringFilter<"CreditTransaction"> | string
    sourceOrderId?: StringNullableFilter<"CreditTransaction"> | string | null
    refTransactionId?: StringNullableFilter<"CreditTransaction"> | string | null
    descriptionCode?: StringFilter<"CreditTransaction"> | string
    metadataJson?: JsonNullableFilter<"CreditTransaction">
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    account?: XOR<CreditAccountScalarRelationFilter, CreditAccountWhereInput>
    billingTask?: XOR<BillingTaskNullableScalarRelationFilter, BillingTaskWhereInput> | null
  }

  export type CreditTransactionOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    grantId?: SortOrderInput | SortOrder
    billingTaskId?: SortOrderInput | SortOrder
    transactionType?: SortOrder
    direction?: SortOrder
    points?: SortOrder
    totalBalanceBefore?: SortOrder
    totalBalanceAfter?: SortOrder
    lockedBalanceBefore?: SortOrder
    lockedBalanceAfter?: SortOrder
    availableBalanceAfter?: SortOrder
    bizType?: SortOrder
    bizId?: SortOrder
    sourceOrderId?: SortOrderInput | SortOrder
    refTransactionId?: SortOrderInput | SortOrder
    descriptionCode?: SortOrder
    metadataJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    account?: CreditAccountOrderByWithRelationInput
    billingTask?: BillingTaskOrderByWithRelationInput
    _relevance?: CreditTransactionOrderByRelevanceInput
  }

  export type CreditTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    accountId?: StringFilter<"CreditTransaction"> | string
    grantId?: StringNullableFilter<"CreditTransaction"> | string | null
    billingTaskId?: StringNullableFilter<"CreditTransaction"> | string | null
    transactionType?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    direction?: EnumTransactionDirectionFilter<"CreditTransaction"> | $Enums.TransactionDirection
    points?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    bizType?: StringFilter<"CreditTransaction"> | string
    bizId?: StringFilter<"CreditTransaction"> | string
    sourceOrderId?: StringNullableFilter<"CreditTransaction"> | string | null
    refTransactionId?: StringNullableFilter<"CreditTransaction"> | string | null
    descriptionCode?: StringFilter<"CreditTransaction"> | string
    metadataJson?: JsonNullableFilter<"CreditTransaction">
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    account?: XOR<CreditAccountScalarRelationFilter, CreditAccountWhereInput>
    billingTask?: XOR<BillingTaskNullableScalarRelationFilter, BillingTaskWhereInput> | null
  }, "id">

  export type CreditTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    grantId?: SortOrderInput | SortOrder
    billingTaskId?: SortOrderInput | SortOrder
    transactionType?: SortOrder
    direction?: SortOrder
    points?: SortOrder
    totalBalanceBefore?: SortOrder
    totalBalanceAfter?: SortOrder
    lockedBalanceBefore?: SortOrder
    lockedBalanceAfter?: SortOrder
    availableBalanceAfter?: SortOrder
    bizType?: SortOrder
    bizId?: SortOrder
    sourceOrderId?: SortOrderInput | SortOrder
    refTransactionId?: SortOrderInput | SortOrder
    descriptionCode?: SortOrder
    metadataJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CreditTransactionCountOrderByAggregateInput
    _avg?: CreditTransactionAvgOrderByAggregateInput
    _max?: CreditTransactionMaxOrderByAggregateInput
    _min?: CreditTransactionMinOrderByAggregateInput
    _sum?: CreditTransactionSumOrderByAggregateInput
  }

  export type CreditTransactionScalarWhereWithAggregatesInput = {
    AND?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    OR?: CreditTransactionScalarWhereWithAggregatesInput[]
    NOT?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditTransaction"> | string
    accountId?: StringWithAggregatesFilter<"CreditTransaction"> | string
    grantId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    billingTaskId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    transactionType?: EnumTransactionTypeWithAggregatesFilter<"CreditTransaction"> | $Enums.TransactionType
    direction?: EnumTransactionDirectionWithAggregatesFilter<"CreditTransaction"> | $Enums.TransactionDirection
    points?: DecimalWithAggregatesFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalWithAggregatesFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalWithAggregatesFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalWithAggregatesFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalWithAggregatesFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalWithAggregatesFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    bizType?: StringWithAggregatesFilter<"CreditTransaction"> | string
    bizId?: StringWithAggregatesFilter<"CreditTransaction"> | string
    sourceOrderId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    refTransactionId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    descriptionCode?: StringWithAggregatesFilter<"CreditTransaction"> | string
    metadataJson?: JsonNullableWithAggregatesFilter<"CreditTransaction">
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransaction"> | Date | string
  }

  export type IdempotencyKeyWhereInput = {
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    id?: StringFilter<"IdempotencyKey"> | string
    caller?: StringFilter<"IdempotencyKey"> | string
    operation?: StringFilter<"IdempotencyKey"> | string
    idempotencyKey?: StringFilter<"IdempotencyKey"> | string
    requestHash?: StringFilter<"IdempotencyKey"> | string
    status?: EnumIdempotencyStatusFilter<"IdempotencyKey"> | $Enums.IdempotencyStatus
    resourceType?: StringNullableFilter<"IdempotencyKey"> | string | null
    resourceId?: StringNullableFilter<"IdempotencyKey"> | string | null
    responseJson?: JsonNullableFilter<"IdempotencyKey">
    errorCode?: StringNullableFilter<"IdempotencyKey"> | string | null
    expiresAt?: DateTimeNullableFilter<"IdempotencyKey"> | Date | string | null
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
    updatedAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }

  export type IdempotencyKeyOrderByWithRelationInput = {
    id?: SortOrder
    caller?: SortOrder
    operation?: SortOrder
    idempotencyKey?: SortOrder
    requestHash?: SortOrder
    status?: SortOrder
    resourceType?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    responseJson?: SortOrderInput | SortOrder
    errorCode?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: IdempotencyKeyOrderByRelevanceInput
  }

  export type IdempotencyKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    caller_operation_idempotencyKey?: IdempotencyKeyCallerOperationIdempotencyKeyCompoundUniqueInput
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    caller?: StringFilter<"IdempotencyKey"> | string
    operation?: StringFilter<"IdempotencyKey"> | string
    idempotencyKey?: StringFilter<"IdempotencyKey"> | string
    requestHash?: StringFilter<"IdempotencyKey"> | string
    status?: EnumIdempotencyStatusFilter<"IdempotencyKey"> | $Enums.IdempotencyStatus
    resourceType?: StringNullableFilter<"IdempotencyKey"> | string | null
    resourceId?: StringNullableFilter<"IdempotencyKey"> | string | null
    responseJson?: JsonNullableFilter<"IdempotencyKey">
    errorCode?: StringNullableFilter<"IdempotencyKey"> | string | null
    expiresAt?: DateTimeNullableFilter<"IdempotencyKey"> | Date | string | null
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
    updatedAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }, "id" | "caller_operation_idempotencyKey">

  export type IdempotencyKeyOrderByWithAggregationInput = {
    id?: SortOrder
    caller?: SortOrder
    operation?: SortOrder
    idempotencyKey?: SortOrder
    requestHash?: SortOrder
    status?: SortOrder
    resourceType?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    responseJson?: SortOrderInput | SortOrder
    errorCode?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IdempotencyKeyCountOrderByAggregateInput
    _max?: IdempotencyKeyMaxOrderByAggregateInput
    _min?: IdempotencyKeyMinOrderByAggregateInput
  }

  export type IdempotencyKeyScalarWhereWithAggregatesInput = {
    AND?: IdempotencyKeyScalarWhereWithAggregatesInput | IdempotencyKeyScalarWhereWithAggregatesInput[]
    OR?: IdempotencyKeyScalarWhereWithAggregatesInput[]
    NOT?: IdempotencyKeyScalarWhereWithAggregatesInput | IdempotencyKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    caller?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    operation?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    idempotencyKey?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    requestHash?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    status?: EnumIdempotencyStatusWithAggregatesFilter<"IdempotencyKey"> | $Enums.IdempotencyStatus
    resourceType?: StringNullableWithAggregatesFilter<"IdempotencyKey"> | string | null
    resourceId?: StringNullableWithAggregatesFilter<"IdempotencyKey"> | string | null
    responseJson?: JsonNullableWithAggregatesFilter<"IdempotencyKey">
    errorCode?: StringNullableWithAggregatesFilter<"IdempotencyKey"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"IdempotencyKey"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IdempotencyKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IdempotencyKey"> | Date | string
  }

  export type CreditAccountCreateInput = {
    id: string
    ownerType: $Enums.AccountOwnerType
    ownerId: string
    currency?: string
    totalBalance?: Decimal | DecimalJsLike | number | string
    lockedBalance?: Decimal | DecimalJsLike | number | string
    availableBalance?: Decimal | DecimalJsLike | number | string
    status: $Enums.CreditAccountStatus
    version?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    billingTasks?: BillingTaskCreateNestedManyWithoutAccountInput
    transactions?: CreditTransactionCreateNestedManyWithoutAccountInput
  }

  export type CreditAccountUncheckedCreateInput = {
    id: string
    ownerType: $Enums.AccountOwnerType
    ownerId: string
    currency?: string
    totalBalance?: Decimal | DecimalJsLike | number | string
    lockedBalance?: Decimal | DecimalJsLike | number | string
    availableBalance?: Decimal | DecimalJsLike | number | string
    status: $Enums.CreditAccountStatus
    version?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    billingTasks?: BillingTaskUncheckedCreateNestedManyWithoutAccountInput
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type CreditAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumAccountOwnerTypeFieldUpdateOperationsInput | $Enums.AccountOwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    totalBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTasks?: BillingTaskUpdateManyWithoutAccountNestedInput
    transactions?: CreditTransactionUpdateManyWithoutAccountNestedInput
  }

  export type CreditAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumAccountOwnerTypeFieldUpdateOperationsInput | $Enums.AccountOwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    totalBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTasks?: BillingTaskUncheckedUpdateManyWithoutAccountNestedInput
    transactions?: CreditTransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type CreditAccountCreateManyInput = {
    id: string
    ownerType: $Enums.AccountOwnerType
    ownerId: string
    currency?: string
    totalBalance?: Decimal | DecimalJsLike | number | string
    lockedBalance?: Decimal | DecimalJsLike | number | string
    availableBalance?: Decimal | DecimalJsLike | number | string
    status: $Enums.CreditAccountStatus
    version?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumAccountOwnerTypeFieldUpdateOperationsInput | $Enums.AccountOwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    totalBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumAccountOwnerTypeFieldUpdateOperationsInput | $Enums.AccountOwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    totalBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingTaskCreateInput = {
    id: string
    bizType: string
    bizId: string
    estimatedPoints: Decimal | DecimalJsLike | number | string
    frozenPoints?: Decimal | DecimalJsLike | number | string
    settledPoints?: Decimal | DecimalJsLike | number | string
    refundedPoints?: Decimal | DecimalJsLike | number | string
    status: $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey: string
    settleIdempotencyKey?: string | null
    refundIdempotencyKey?: string | null
    lockExpireAt?: Date | string | null
    frozenAt?: Date | string | null
    settledAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    account: CreditAccountCreateNestedOneWithoutBillingTasksInput
    transactions?: CreditTransactionCreateNestedManyWithoutBillingTaskInput
  }

  export type BillingTaskUncheckedCreateInput = {
    id: string
    accountId: string
    bizType: string
    bizId: string
    estimatedPoints: Decimal | DecimalJsLike | number | string
    frozenPoints?: Decimal | DecimalJsLike | number | string
    settledPoints?: Decimal | DecimalJsLike | number | string
    refundedPoints?: Decimal | DecimalJsLike | number | string
    status: $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey: string
    settleIdempotencyKey?: string | null
    refundIdempotencyKey?: string | null
    lockExpireAt?: Date | string | null
    frozenAt?: Date | string | null
    settledAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutBillingTaskInput
  }

  export type BillingTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    estimatedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFieldUpdateOperationsInput | $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey?: StringFieldUpdateOperationsInput | string
    settleIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    refundIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    lockExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    account?: CreditAccountUpdateOneRequiredWithoutBillingTasksNestedInput
    transactions?: CreditTransactionUpdateManyWithoutBillingTaskNestedInput
  }

  export type BillingTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    estimatedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFieldUpdateOperationsInput | $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey?: StringFieldUpdateOperationsInput | string
    settleIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    refundIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    lockExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    transactions?: CreditTransactionUncheckedUpdateManyWithoutBillingTaskNestedInput
  }

  export type BillingTaskCreateManyInput = {
    id: string
    accountId: string
    bizType: string
    bizId: string
    estimatedPoints: Decimal | DecimalJsLike | number | string
    frozenPoints?: Decimal | DecimalJsLike | number | string
    settledPoints?: Decimal | DecimalJsLike | number | string
    refundedPoints?: Decimal | DecimalJsLike | number | string
    status: $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey: string
    settleIdempotencyKey?: string | null
    refundIdempotencyKey?: string | null
    lockExpireAt?: Date | string | null
    frozenAt?: Date | string | null
    settledAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
  }

  export type BillingTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    estimatedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFieldUpdateOperationsInput | $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey?: StringFieldUpdateOperationsInput | string
    settleIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    refundIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    lockExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type BillingTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    estimatedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFieldUpdateOperationsInput | $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey?: StringFieldUpdateOperationsInput | string
    settleIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    refundIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    lockExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type CreditTransactionCreateInput = {
    id: string
    grantId?: string | null
    transactionType: $Enums.TransactionType
    direction: $Enums.TransactionDirection
    points: Decimal | DecimalJsLike | number | string
    totalBalanceBefore: Decimal | DecimalJsLike | number | string
    totalBalanceAfter: Decimal | DecimalJsLike | number | string
    lockedBalanceBefore: Decimal | DecimalJsLike | number | string
    lockedBalanceAfter: Decimal | DecimalJsLike | number | string
    availableBalanceAfter: Decimal | DecimalJsLike | number | string
    bizType: string
    bizId: string
    sourceOrderId?: string | null
    refTransactionId?: string | null
    descriptionCode: string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    account: CreditAccountCreateNestedOneWithoutTransactionsInput
    billingTask?: BillingTaskCreateNestedOneWithoutTransactionsInput
  }

  export type CreditTransactionUncheckedCreateInput = {
    id: string
    accountId: string
    grantId?: string | null
    billingTaskId?: string | null
    transactionType: $Enums.TransactionType
    direction: $Enums.TransactionDirection
    points: Decimal | DecimalJsLike | number | string
    totalBalanceBefore: Decimal | DecimalJsLike | number | string
    totalBalanceAfter: Decimal | DecimalJsLike | number | string
    lockedBalanceBefore: Decimal | DecimalJsLike | number | string
    lockedBalanceAfter: Decimal | DecimalJsLike | number | string
    availableBalanceAfter: Decimal | DecimalJsLike | number | string
    bizType: string
    bizId: string
    sourceOrderId?: string | null
    refTransactionId?: string | null
    descriptionCode: string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grantId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    sourceOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    refTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionCode?: StringFieldUpdateOperationsInput | string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput
    billingTask?: BillingTaskUpdateOneWithoutTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    grantId?: NullableStringFieldUpdateOperationsInput | string | null
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    sourceOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    refTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionCode?: StringFieldUpdateOperationsInput | string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateManyInput = {
    id: string
    accountId: string
    grantId?: string | null
    billingTaskId?: string | null
    transactionType: $Enums.TransactionType
    direction: $Enums.TransactionDirection
    points: Decimal | DecimalJsLike | number | string
    totalBalanceBefore: Decimal | DecimalJsLike | number | string
    totalBalanceAfter: Decimal | DecimalJsLike | number | string
    lockedBalanceBefore: Decimal | DecimalJsLike | number | string
    lockedBalanceAfter: Decimal | DecimalJsLike | number | string
    availableBalanceAfter: Decimal | DecimalJsLike | number | string
    bizType: string
    bizId: string
    sourceOrderId?: string | null
    refTransactionId?: string | null
    descriptionCode: string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grantId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    sourceOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    refTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionCode?: StringFieldUpdateOperationsInput | string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    grantId?: NullableStringFieldUpdateOperationsInput | string | null
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    sourceOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    refTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionCode?: StringFieldUpdateOperationsInput | string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateInput = {
    id: string
    caller: string
    operation: string
    idempotencyKey: string
    requestHash: string
    status: $Enums.IdempotencyStatus
    resourceType?: string | null
    resourceId?: string | null
    responseJson?: NullableJsonNullValueInput | InputJsonValue
    errorCode?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdempotencyKeyUncheckedCreateInput = {
    id: string
    caller: string
    operation: string
    idempotencyKey: string
    requestHash: string
    status: $Enums.IdempotencyStatus
    resourceType?: string | null
    resourceId?: string | null
    responseJson?: NullableJsonNullValueInput | InputJsonValue
    errorCode?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdempotencyKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caller?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    status?: EnumIdempotencyStatusFieldUpdateOperationsInput | $Enums.IdempotencyStatus
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    responseJson?: NullableJsonNullValueInput | InputJsonValue
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caller?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    status?: EnumIdempotencyStatusFieldUpdateOperationsInput | $Enums.IdempotencyStatus
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    responseJson?: NullableJsonNullValueInput | InputJsonValue
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateManyInput = {
    id: string
    caller: string
    operation: string
    idempotencyKey: string
    requestHash: string
    status: $Enums.IdempotencyStatus
    resourceType?: string | null
    resourceId?: string | null
    responseJson?: NullableJsonNullValueInput | InputJsonValue
    errorCode?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdempotencyKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    caller?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    status?: EnumIdempotencyStatusFieldUpdateOperationsInput | $Enums.IdempotencyStatus
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    responseJson?: NullableJsonNullValueInput | InputJsonValue
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    caller?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    idempotencyKey?: StringFieldUpdateOperationsInput | string
    requestHash?: StringFieldUpdateOperationsInput | string
    status?: EnumIdempotencyStatusFieldUpdateOperationsInput | $Enums.IdempotencyStatus
    resourceType?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    responseJson?: NullableJsonNullValueInput | InputJsonValue
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumAccountOwnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountOwnerType | EnumAccountOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountOwnerType[]
    notIn?: $Enums.AccountOwnerType[]
    not?: NestedEnumAccountOwnerTypeFilter<$PrismaModel> | $Enums.AccountOwnerType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumCreditAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountStatus | EnumCreditAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountStatus[]
    notIn?: $Enums.CreditAccountStatus[]
    not?: NestedEnumCreditAccountStatusFilter<$PrismaModel> | $Enums.CreditAccountStatus
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type BillingTaskListRelationFilter = {
    every?: BillingTaskWhereInput
    some?: BillingTaskWhereInput
    none?: BillingTaskWhereInput
  }

  export type CreditTransactionListRelationFilter = {
    every?: CreditTransactionWhereInput
    some?: CreditTransactionWhereInput
    none?: CreditTransactionWhereInput
  }

  export type BillingTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditAccountOrderByRelevanceInput = {
    fields: CreditAccountOrderByRelevanceFieldEnum | CreditAccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CreditAccountOwnerTypeOwnerIdCurrencyCompoundUniqueInput = {
    ownerType: $Enums.AccountOwnerType
    ownerId: string
    currency: string
  }

  export type CreditAccountCountOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    currency?: SortOrder
    totalBalance?: SortOrder
    lockedBalance?: SortOrder
    availableBalance?: SortOrder
    status?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAccountAvgOrderByAggregateInput = {
    totalBalance?: SortOrder
    lockedBalance?: SortOrder
    availableBalance?: SortOrder
    version?: SortOrder
  }

  export type CreditAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    currency?: SortOrder
    totalBalance?: SortOrder
    lockedBalance?: SortOrder
    availableBalance?: SortOrder
    status?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAccountMinOrderByAggregateInput = {
    id?: SortOrder
    ownerType?: SortOrder
    ownerId?: SortOrder
    currency?: SortOrder
    totalBalance?: SortOrder
    lockedBalance?: SortOrder
    availableBalance?: SortOrder
    status?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditAccountSumOrderByAggregateInput = {
    totalBalance?: SortOrder
    lockedBalance?: SortOrder
    availableBalance?: SortOrder
    version?: SortOrder
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

  export type EnumAccountOwnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountOwnerType | EnumAccountOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountOwnerType[]
    notIn?: $Enums.AccountOwnerType[]
    not?: NestedEnumAccountOwnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountOwnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountOwnerTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountOwnerTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumCreditAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountStatus | EnumCreditAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountStatus[]
    notIn?: $Enums.CreditAccountStatus[]
    not?: NestedEnumCreditAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.CreditAccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumCreditAccountStatusFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type EnumBillingTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingTaskStatus | EnumBillingTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingTaskStatus[]
    notIn?: $Enums.BillingTaskStatus[]
    not?: NestedEnumBillingTaskStatusFilter<$PrismaModel> | $Enums.BillingTaskStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type CreditAccountScalarRelationFilter = {
    is?: CreditAccountWhereInput
    isNot?: CreditAccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BillingTaskOrderByRelevanceInput = {
    fields: BillingTaskOrderByRelevanceFieldEnum | BillingTaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BillingTaskBizTypeBizIdCompoundUniqueInput = {
    bizType: string
    bizId: string
  }

  export type BillingTaskCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    bizType?: SortOrder
    bizId?: SortOrder
    estimatedPoints?: SortOrder
    frozenPoints?: SortOrder
    settledPoints?: SortOrder
    refundedPoints?: SortOrder
    status?: SortOrder
    pricingSnapshotJson?: SortOrder
    freezeIdempotencyKey?: SortOrder
    settleIdempotencyKey?: SortOrder
    refundIdempotencyKey?: SortOrder
    lockExpireAt?: SortOrder
    frozenAt?: SortOrder
    settledAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
  }

  export type BillingTaskAvgOrderByAggregateInput = {
    estimatedPoints?: SortOrder
    frozenPoints?: SortOrder
    settledPoints?: SortOrder
    refundedPoints?: SortOrder
    version?: SortOrder
  }

  export type BillingTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    bizType?: SortOrder
    bizId?: SortOrder
    estimatedPoints?: SortOrder
    frozenPoints?: SortOrder
    settledPoints?: SortOrder
    refundedPoints?: SortOrder
    status?: SortOrder
    freezeIdempotencyKey?: SortOrder
    settleIdempotencyKey?: SortOrder
    refundIdempotencyKey?: SortOrder
    lockExpireAt?: SortOrder
    frozenAt?: SortOrder
    settledAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
  }

  export type BillingTaskMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    bizType?: SortOrder
    bizId?: SortOrder
    estimatedPoints?: SortOrder
    frozenPoints?: SortOrder
    settledPoints?: SortOrder
    refundedPoints?: SortOrder
    status?: SortOrder
    freezeIdempotencyKey?: SortOrder
    settleIdempotencyKey?: SortOrder
    refundIdempotencyKey?: SortOrder
    lockExpireAt?: SortOrder
    frozenAt?: SortOrder
    settledAt?: SortOrder
    refundedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    version?: SortOrder
  }

  export type BillingTaskSumOrderByAggregateInput = {
    estimatedPoints?: SortOrder
    frozenPoints?: SortOrder
    settledPoints?: SortOrder
    refundedPoints?: SortOrder
    version?: SortOrder
  }

  export type EnumBillingTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingTaskStatus | EnumBillingTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingTaskStatus[]
    notIn?: $Enums.BillingTaskStatus[]
    not?: NestedEnumBillingTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillingTaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumBillingTaskStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[]
    notIn?: $Enums.TransactionDirection[]
    not?: NestedEnumTransactionDirectionFilter<$PrismaModel> | $Enums.TransactionDirection
  }

  export type BillingTaskNullableScalarRelationFilter = {
    is?: BillingTaskWhereInput | null
    isNot?: BillingTaskWhereInput | null
  }

  export type CreditTransactionOrderByRelevanceInput = {
    fields: CreditTransactionOrderByRelevanceFieldEnum | CreditTransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CreditTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    grantId?: SortOrder
    billingTaskId?: SortOrder
    transactionType?: SortOrder
    direction?: SortOrder
    points?: SortOrder
    totalBalanceBefore?: SortOrder
    totalBalanceAfter?: SortOrder
    lockedBalanceBefore?: SortOrder
    lockedBalanceAfter?: SortOrder
    availableBalanceAfter?: SortOrder
    bizType?: SortOrder
    bizId?: SortOrder
    sourceOrderId?: SortOrder
    refTransactionId?: SortOrder
    descriptionCode?: SortOrder
    metadataJson?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionAvgOrderByAggregateInput = {
    points?: SortOrder
    totalBalanceBefore?: SortOrder
    totalBalanceAfter?: SortOrder
    lockedBalanceBefore?: SortOrder
    lockedBalanceAfter?: SortOrder
    availableBalanceAfter?: SortOrder
  }

  export type CreditTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    grantId?: SortOrder
    billingTaskId?: SortOrder
    transactionType?: SortOrder
    direction?: SortOrder
    points?: SortOrder
    totalBalanceBefore?: SortOrder
    totalBalanceAfter?: SortOrder
    lockedBalanceBefore?: SortOrder
    lockedBalanceAfter?: SortOrder
    availableBalanceAfter?: SortOrder
    bizType?: SortOrder
    bizId?: SortOrder
    sourceOrderId?: SortOrder
    refTransactionId?: SortOrder
    descriptionCode?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    grantId?: SortOrder
    billingTaskId?: SortOrder
    transactionType?: SortOrder
    direction?: SortOrder
    points?: SortOrder
    totalBalanceBefore?: SortOrder
    totalBalanceAfter?: SortOrder
    lockedBalanceBefore?: SortOrder
    lockedBalanceAfter?: SortOrder
    availableBalanceAfter?: SortOrder
    bizType?: SortOrder
    bizId?: SortOrder
    sourceOrderId?: SortOrder
    refTransactionId?: SortOrder
    descriptionCode?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionSumOrderByAggregateInput = {
    points?: SortOrder
    totalBalanceBefore?: SortOrder
    totalBalanceAfter?: SortOrder
    lockedBalanceBefore?: SortOrder
    lockedBalanceAfter?: SortOrder
    availableBalanceAfter?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[]
    notIn?: $Enums.TransactionDirection[]
    not?: NestedEnumTransactionDirectionWithAggregatesFilter<$PrismaModel> | $Enums.TransactionDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionDirectionFilter<$PrismaModel>
    _max?: NestedEnumTransactionDirectionFilter<$PrismaModel>
  }

  export type EnumIdempotencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IdempotencyStatus | EnumIdempotencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IdempotencyStatus[]
    notIn?: $Enums.IdempotencyStatus[]
    not?: NestedEnumIdempotencyStatusFilter<$PrismaModel> | $Enums.IdempotencyStatus
  }

  export type IdempotencyKeyOrderByRelevanceInput = {
    fields: IdempotencyKeyOrderByRelevanceFieldEnum | IdempotencyKeyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IdempotencyKeyCallerOperationIdempotencyKeyCompoundUniqueInput = {
    caller: string
    operation: string
    idempotencyKey: string
  }

  export type IdempotencyKeyCountOrderByAggregateInput = {
    id?: SortOrder
    caller?: SortOrder
    operation?: SortOrder
    idempotencyKey?: SortOrder
    requestHash?: SortOrder
    status?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    responseJson?: SortOrder
    errorCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdempotencyKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    caller?: SortOrder
    operation?: SortOrder
    idempotencyKey?: SortOrder
    requestHash?: SortOrder
    status?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    errorCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdempotencyKeyMinOrderByAggregateInput = {
    id?: SortOrder
    caller?: SortOrder
    operation?: SortOrder
    idempotencyKey?: SortOrder
    requestHash?: SortOrder
    status?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    errorCode?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIdempotencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdempotencyStatus | EnumIdempotencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IdempotencyStatus[]
    notIn?: $Enums.IdempotencyStatus[]
    not?: NestedEnumIdempotencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.IdempotencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdempotencyStatusFilter<$PrismaModel>
    _max?: NestedEnumIdempotencyStatusFilter<$PrismaModel>
  }

  export type BillingTaskCreateNestedManyWithoutAccountInput = {
    create?: XOR<BillingTaskCreateWithoutAccountInput, BillingTaskUncheckedCreateWithoutAccountInput> | BillingTaskCreateWithoutAccountInput[] | BillingTaskUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BillingTaskCreateOrConnectWithoutAccountInput | BillingTaskCreateOrConnectWithoutAccountInput[]
    createMany?: BillingTaskCreateManyAccountInputEnvelope
    connect?: BillingTaskWhereUniqueInput | BillingTaskWhereUniqueInput[]
  }

  export type CreditTransactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<CreditTransactionCreateWithoutAccountInput, CreditTransactionUncheckedCreateWithoutAccountInput> | CreditTransactionCreateWithoutAccountInput[] | CreditTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAccountInput | CreditTransactionCreateOrConnectWithoutAccountInput[]
    createMany?: CreditTransactionCreateManyAccountInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type BillingTaskUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<BillingTaskCreateWithoutAccountInput, BillingTaskUncheckedCreateWithoutAccountInput> | BillingTaskCreateWithoutAccountInput[] | BillingTaskUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BillingTaskCreateOrConnectWithoutAccountInput | BillingTaskCreateOrConnectWithoutAccountInput[]
    createMany?: BillingTaskCreateManyAccountInputEnvelope
    connect?: BillingTaskWhereUniqueInput | BillingTaskWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CreditTransactionCreateWithoutAccountInput, CreditTransactionUncheckedCreateWithoutAccountInput> | CreditTransactionCreateWithoutAccountInput[] | CreditTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAccountInput | CreditTransactionCreateOrConnectWithoutAccountInput[]
    createMany?: CreditTransactionCreateManyAccountInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAccountOwnerTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountOwnerType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumCreditAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.CreditAccountStatus
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BillingTaskUpdateManyWithoutAccountNestedInput = {
    create?: XOR<BillingTaskCreateWithoutAccountInput, BillingTaskUncheckedCreateWithoutAccountInput> | BillingTaskCreateWithoutAccountInput[] | BillingTaskUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BillingTaskCreateOrConnectWithoutAccountInput | BillingTaskCreateOrConnectWithoutAccountInput[]
    upsert?: BillingTaskUpsertWithWhereUniqueWithoutAccountInput | BillingTaskUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: BillingTaskCreateManyAccountInputEnvelope
    set?: BillingTaskWhereUniqueInput | BillingTaskWhereUniqueInput[]
    disconnect?: BillingTaskWhereUniqueInput | BillingTaskWhereUniqueInput[]
    delete?: BillingTaskWhereUniqueInput | BillingTaskWhereUniqueInput[]
    connect?: BillingTaskWhereUniqueInput | BillingTaskWhereUniqueInput[]
    update?: BillingTaskUpdateWithWhereUniqueWithoutAccountInput | BillingTaskUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: BillingTaskUpdateManyWithWhereWithoutAccountInput | BillingTaskUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: BillingTaskScalarWhereInput | BillingTaskScalarWhereInput[]
  }

  export type CreditTransactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutAccountInput, CreditTransactionUncheckedCreateWithoutAccountInput> | CreditTransactionCreateWithoutAccountInput[] | CreditTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAccountInput | CreditTransactionCreateOrConnectWithoutAccountInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutAccountInput | CreditTransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CreditTransactionCreateManyAccountInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutAccountInput | CreditTransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutAccountInput | CreditTransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type BillingTaskUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<BillingTaskCreateWithoutAccountInput, BillingTaskUncheckedCreateWithoutAccountInput> | BillingTaskCreateWithoutAccountInput[] | BillingTaskUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BillingTaskCreateOrConnectWithoutAccountInput | BillingTaskCreateOrConnectWithoutAccountInput[]
    upsert?: BillingTaskUpsertWithWhereUniqueWithoutAccountInput | BillingTaskUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: BillingTaskCreateManyAccountInputEnvelope
    set?: BillingTaskWhereUniqueInput | BillingTaskWhereUniqueInput[]
    disconnect?: BillingTaskWhereUniqueInput | BillingTaskWhereUniqueInput[]
    delete?: BillingTaskWhereUniqueInput | BillingTaskWhereUniqueInput[]
    connect?: BillingTaskWhereUniqueInput | BillingTaskWhereUniqueInput[]
    update?: BillingTaskUpdateWithWhereUniqueWithoutAccountInput | BillingTaskUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: BillingTaskUpdateManyWithWhereWithoutAccountInput | BillingTaskUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: BillingTaskScalarWhereInput | BillingTaskScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutAccountInput, CreditTransactionUncheckedCreateWithoutAccountInput> | CreditTransactionCreateWithoutAccountInput[] | CreditTransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutAccountInput | CreditTransactionCreateOrConnectWithoutAccountInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutAccountInput | CreditTransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CreditTransactionCreateManyAccountInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutAccountInput | CreditTransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutAccountInput | CreditTransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type CreditAccountCreateNestedOneWithoutBillingTasksInput = {
    create?: XOR<CreditAccountCreateWithoutBillingTasksInput, CreditAccountUncheckedCreateWithoutBillingTasksInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutBillingTasksInput
    connect?: CreditAccountWhereUniqueInput
  }

  export type CreditTransactionCreateNestedManyWithoutBillingTaskInput = {
    create?: XOR<CreditTransactionCreateWithoutBillingTaskInput, CreditTransactionUncheckedCreateWithoutBillingTaskInput> | CreditTransactionCreateWithoutBillingTaskInput[] | CreditTransactionUncheckedCreateWithoutBillingTaskInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutBillingTaskInput | CreditTransactionCreateOrConnectWithoutBillingTaskInput[]
    createMany?: CreditTransactionCreateManyBillingTaskInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutBillingTaskInput = {
    create?: XOR<CreditTransactionCreateWithoutBillingTaskInput, CreditTransactionUncheckedCreateWithoutBillingTaskInput> | CreditTransactionCreateWithoutBillingTaskInput[] | CreditTransactionUncheckedCreateWithoutBillingTaskInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutBillingTaskInput | CreditTransactionCreateOrConnectWithoutBillingTaskInput[]
    createMany?: CreditTransactionCreateManyBillingTaskInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type EnumBillingTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.BillingTaskStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CreditAccountUpdateOneRequiredWithoutBillingTasksNestedInput = {
    create?: XOR<CreditAccountCreateWithoutBillingTasksInput, CreditAccountUncheckedCreateWithoutBillingTasksInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutBillingTasksInput
    upsert?: CreditAccountUpsertWithoutBillingTasksInput
    connect?: CreditAccountWhereUniqueInput
    update?: XOR<XOR<CreditAccountUpdateToOneWithWhereWithoutBillingTasksInput, CreditAccountUpdateWithoutBillingTasksInput>, CreditAccountUncheckedUpdateWithoutBillingTasksInput>
  }

  export type CreditTransactionUpdateManyWithoutBillingTaskNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutBillingTaskInput, CreditTransactionUncheckedCreateWithoutBillingTaskInput> | CreditTransactionCreateWithoutBillingTaskInput[] | CreditTransactionUncheckedCreateWithoutBillingTaskInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutBillingTaskInput | CreditTransactionCreateOrConnectWithoutBillingTaskInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutBillingTaskInput | CreditTransactionUpsertWithWhereUniqueWithoutBillingTaskInput[]
    createMany?: CreditTransactionCreateManyBillingTaskInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutBillingTaskInput | CreditTransactionUpdateWithWhereUniqueWithoutBillingTaskInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutBillingTaskInput | CreditTransactionUpdateManyWithWhereWithoutBillingTaskInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutBillingTaskNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutBillingTaskInput, CreditTransactionUncheckedCreateWithoutBillingTaskInput> | CreditTransactionCreateWithoutBillingTaskInput[] | CreditTransactionUncheckedCreateWithoutBillingTaskInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutBillingTaskInput | CreditTransactionCreateOrConnectWithoutBillingTaskInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutBillingTaskInput | CreditTransactionUpsertWithWhereUniqueWithoutBillingTaskInput[]
    createMany?: CreditTransactionCreateManyBillingTaskInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutBillingTaskInput | CreditTransactionUpdateWithWhereUniqueWithoutBillingTaskInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutBillingTaskInput | CreditTransactionUpdateManyWithWhereWithoutBillingTaskInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type CreditAccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutTransactionsInput
    connect?: CreditAccountWhereUniqueInput
  }

  export type BillingTaskCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<BillingTaskCreateWithoutTransactionsInput, BillingTaskUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BillingTaskCreateOrConnectWithoutTransactionsInput
    connect?: BillingTaskWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionDirectionFieldUpdateOperationsInput = {
    set?: $Enums.TransactionDirection
  }

  export type CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CreditAccountCreateOrConnectWithoutTransactionsInput
    upsert?: CreditAccountUpsertWithoutTransactionsInput
    connect?: CreditAccountWhereUniqueInput
    update?: XOR<XOR<CreditAccountUpdateToOneWithWhereWithoutTransactionsInput, CreditAccountUpdateWithoutTransactionsInput>, CreditAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type BillingTaskUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<BillingTaskCreateWithoutTransactionsInput, BillingTaskUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BillingTaskCreateOrConnectWithoutTransactionsInput
    upsert?: BillingTaskUpsertWithoutTransactionsInput
    disconnect?: BillingTaskWhereInput | boolean
    delete?: BillingTaskWhereInput | boolean
    connect?: BillingTaskWhereUniqueInput
    update?: XOR<XOR<BillingTaskUpdateToOneWithWhereWithoutTransactionsInput, BillingTaskUpdateWithoutTransactionsInput>, BillingTaskUncheckedUpdateWithoutTransactionsInput>
  }

  export type EnumIdempotencyStatusFieldUpdateOperationsInput = {
    set?: $Enums.IdempotencyStatus
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

  export type NestedEnumAccountOwnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountOwnerType | EnumAccountOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountOwnerType[]
    notIn?: $Enums.AccountOwnerType[]
    not?: NestedEnumAccountOwnerTypeFilter<$PrismaModel> | $Enums.AccountOwnerType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCreditAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountStatus | EnumCreditAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountStatus[]
    notIn?: $Enums.CreditAccountStatus[]
    not?: NestedEnumCreditAccountStatusFilter<$PrismaModel> | $Enums.CreditAccountStatus
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedEnumAccountOwnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountOwnerType | EnumAccountOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountOwnerType[]
    notIn?: $Enums.AccountOwnerType[]
    not?: NestedEnumAccountOwnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountOwnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountOwnerTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountOwnerTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumCreditAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditAccountStatus | EnumCreditAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CreditAccountStatus[]
    notIn?: $Enums.CreditAccountStatus[]
    not?: NestedEnumCreditAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.CreditAccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumCreditAccountStatusFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedEnumBillingTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingTaskStatus | EnumBillingTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingTaskStatus[]
    notIn?: $Enums.BillingTaskStatus[]
    not?: NestedEnumBillingTaskStatusFilter<$PrismaModel> | $Enums.BillingTaskStatus
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

  export type NestedEnumBillingTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingTaskStatus | EnumBillingTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillingTaskStatus[]
    notIn?: $Enums.BillingTaskStatus[]
    not?: NestedEnumBillingTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillingTaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillingTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumBillingTaskStatusFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[]
    notIn?: $Enums.TransactionDirection[]
    not?: NestedEnumTransactionDirectionFilter<$PrismaModel> | $Enums.TransactionDirection
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionDirection | EnumTransactionDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionDirection[]
    notIn?: $Enums.TransactionDirection[]
    not?: NestedEnumTransactionDirectionWithAggregatesFilter<$PrismaModel> | $Enums.TransactionDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionDirectionFilter<$PrismaModel>
    _max?: NestedEnumTransactionDirectionFilter<$PrismaModel>
  }

  export type NestedEnumIdempotencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IdempotencyStatus | EnumIdempotencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IdempotencyStatus[]
    notIn?: $Enums.IdempotencyStatus[]
    not?: NestedEnumIdempotencyStatusFilter<$PrismaModel> | $Enums.IdempotencyStatus
  }

  export type NestedEnumIdempotencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdempotencyStatus | EnumIdempotencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IdempotencyStatus[]
    notIn?: $Enums.IdempotencyStatus[]
    not?: NestedEnumIdempotencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.IdempotencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdempotencyStatusFilter<$PrismaModel>
    _max?: NestedEnumIdempotencyStatusFilter<$PrismaModel>
  }

  export type BillingTaskCreateWithoutAccountInput = {
    id: string
    bizType: string
    bizId: string
    estimatedPoints: Decimal | DecimalJsLike | number | string
    frozenPoints?: Decimal | DecimalJsLike | number | string
    settledPoints?: Decimal | DecimalJsLike | number | string
    refundedPoints?: Decimal | DecimalJsLike | number | string
    status: $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey: string
    settleIdempotencyKey?: string | null
    refundIdempotencyKey?: string | null
    lockExpireAt?: Date | string | null
    frozenAt?: Date | string | null
    settledAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    transactions?: CreditTransactionCreateNestedManyWithoutBillingTaskInput
  }

  export type BillingTaskUncheckedCreateWithoutAccountInput = {
    id: string
    bizType: string
    bizId: string
    estimatedPoints: Decimal | DecimalJsLike | number | string
    frozenPoints?: Decimal | DecimalJsLike | number | string
    settledPoints?: Decimal | DecimalJsLike | number | string
    refundedPoints?: Decimal | DecimalJsLike | number | string
    status: $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey: string
    settleIdempotencyKey?: string | null
    refundIdempotencyKey?: string | null
    lockExpireAt?: Date | string | null
    frozenAt?: Date | string | null
    settledAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutBillingTaskInput
  }

  export type BillingTaskCreateOrConnectWithoutAccountInput = {
    where: BillingTaskWhereUniqueInput
    create: XOR<BillingTaskCreateWithoutAccountInput, BillingTaskUncheckedCreateWithoutAccountInput>
  }

  export type BillingTaskCreateManyAccountInputEnvelope = {
    data: BillingTaskCreateManyAccountInput | BillingTaskCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type CreditTransactionCreateWithoutAccountInput = {
    id: string
    grantId?: string | null
    transactionType: $Enums.TransactionType
    direction: $Enums.TransactionDirection
    points: Decimal | DecimalJsLike | number | string
    totalBalanceBefore: Decimal | DecimalJsLike | number | string
    totalBalanceAfter: Decimal | DecimalJsLike | number | string
    lockedBalanceBefore: Decimal | DecimalJsLike | number | string
    lockedBalanceAfter: Decimal | DecimalJsLike | number | string
    availableBalanceAfter: Decimal | DecimalJsLike | number | string
    bizType: string
    bizId: string
    sourceOrderId?: string | null
    refTransactionId?: string | null
    descriptionCode: string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    billingTask?: BillingTaskCreateNestedOneWithoutTransactionsInput
  }

  export type CreditTransactionUncheckedCreateWithoutAccountInput = {
    id: string
    grantId?: string | null
    billingTaskId?: string | null
    transactionType: $Enums.TransactionType
    direction: $Enums.TransactionDirection
    points: Decimal | DecimalJsLike | number | string
    totalBalanceBefore: Decimal | DecimalJsLike | number | string
    totalBalanceAfter: Decimal | DecimalJsLike | number | string
    lockedBalanceBefore: Decimal | DecimalJsLike | number | string
    lockedBalanceAfter: Decimal | DecimalJsLike | number | string
    availableBalanceAfter: Decimal | DecimalJsLike | number | string
    bizType: string
    bizId: string
    sourceOrderId?: string | null
    refTransactionId?: string | null
    descriptionCode: string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CreditTransactionCreateOrConnectWithoutAccountInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutAccountInput, CreditTransactionUncheckedCreateWithoutAccountInput>
  }

  export type CreditTransactionCreateManyAccountInputEnvelope = {
    data: CreditTransactionCreateManyAccountInput | CreditTransactionCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type BillingTaskUpsertWithWhereUniqueWithoutAccountInput = {
    where: BillingTaskWhereUniqueInput
    update: XOR<BillingTaskUpdateWithoutAccountInput, BillingTaskUncheckedUpdateWithoutAccountInput>
    create: XOR<BillingTaskCreateWithoutAccountInput, BillingTaskUncheckedCreateWithoutAccountInput>
  }

  export type BillingTaskUpdateWithWhereUniqueWithoutAccountInput = {
    where: BillingTaskWhereUniqueInput
    data: XOR<BillingTaskUpdateWithoutAccountInput, BillingTaskUncheckedUpdateWithoutAccountInput>
  }

  export type BillingTaskUpdateManyWithWhereWithoutAccountInput = {
    where: BillingTaskScalarWhereInput
    data: XOR<BillingTaskUpdateManyMutationInput, BillingTaskUncheckedUpdateManyWithoutAccountInput>
  }

  export type BillingTaskScalarWhereInput = {
    AND?: BillingTaskScalarWhereInput | BillingTaskScalarWhereInput[]
    OR?: BillingTaskScalarWhereInput[]
    NOT?: BillingTaskScalarWhereInput | BillingTaskScalarWhereInput[]
    id?: StringFilter<"BillingTask"> | string
    accountId?: StringFilter<"BillingTask"> | string
    bizType?: StringFilter<"BillingTask"> | string
    bizId?: StringFilter<"BillingTask"> | string
    estimatedPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFilter<"BillingTask"> | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFilter<"BillingTask"> | $Enums.BillingTaskStatus
    pricingSnapshotJson?: JsonNullableFilter<"BillingTask">
    freezeIdempotencyKey?: StringFilter<"BillingTask"> | string
    settleIdempotencyKey?: StringNullableFilter<"BillingTask"> | string | null
    refundIdempotencyKey?: StringNullableFilter<"BillingTask"> | string | null
    lockExpireAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    frozenAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    settledAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    refundedAt?: DateTimeNullableFilter<"BillingTask"> | Date | string | null
    createdAt?: DateTimeFilter<"BillingTask"> | Date | string
    updatedAt?: DateTimeFilter<"BillingTask"> | Date | string
    version?: IntFilter<"BillingTask"> | number
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutAccountInput, CreditTransactionUncheckedUpdateWithoutAccountInput>
    create: XOR<CreditTransactionCreateWithoutAccountInput, CreditTransactionUncheckedCreateWithoutAccountInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutAccountInput, CreditTransactionUncheckedUpdateWithoutAccountInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutAccountInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type CreditTransactionScalarWhereInput = {
    AND?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    OR?: CreditTransactionScalarWhereInput[]
    NOT?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    accountId?: StringFilter<"CreditTransaction"> | string
    grantId?: StringNullableFilter<"CreditTransaction"> | string | null
    billingTaskId?: StringNullableFilter<"CreditTransaction"> | string | null
    transactionType?: EnumTransactionTypeFilter<"CreditTransaction"> | $Enums.TransactionType
    direction?: EnumTransactionDirectionFilter<"CreditTransaction"> | $Enums.TransactionDirection
    points?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFilter<"CreditTransaction"> | Decimal | DecimalJsLike | number | string
    bizType?: StringFilter<"CreditTransaction"> | string
    bizId?: StringFilter<"CreditTransaction"> | string
    sourceOrderId?: StringNullableFilter<"CreditTransaction"> | string | null
    refTransactionId?: StringNullableFilter<"CreditTransaction"> | string | null
    descriptionCode?: StringFilter<"CreditTransaction"> | string
    metadataJson?: JsonNullableFilter<"CreditTransaction">
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
  }

  export type CreditAccountCreateWithoutBillingTasksInput = {
    id: string
    ownerType: $Enums.AccountOwnerType
    ownerId: string
    currency?: string
    totalBalance?: Decimal | DecimalJsLike | number | string
    lockedBalance?: Decimal | DecimalJsLike | number | string
    availableBalance?: Decimal | DecimalJsLike | number | string
    status: $Enums.CreditAccountStatus
    version?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: CreditTransactionCreateNestedManyWithoutAccountInput
  }

  export type CreditAccountUncheckedCreateWithoutBillingTasksInput = {
    id: string
    ownerType: $Enums.AccountOwnerType
    ownerId: string
    currency?: string
    totalBalance?: Decimal | DecimalJsLike | number | string
    lockedBalance?: Decimal | DecimalJsLike | number | string
    availableBalance?: Decimal | DecimalJsLike | number | string
    status: $Enums.CreditAccountStatus
    version?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: CreditTransactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type CreditAccountCreateOrConnectWithoutBillingTasksInput = {
    where: CreditAccountWhereUniqueInput
    create: XOR<CreditAccountCreateWithoutBillingTasksInput, CreditAccountUncheckedCreateWithoutBillingTasksInput>
  }

  export type CreditTransactionCreateWithoutBillingTaskInput = {
    id: string
    grantId?: string | null
    transactionType: $Enums.TransactionType
    direction: $Enums.TransactionDirection
    points: Decimal | DecimalJsLike | number | string
    totalBalanceBefore: Decimal | DecimalJsLike | number | string
    totalBalanceAfter: Decimal | DecimalJsLike | number | string
    lockedBalanceBefore: Decimal | DecimalJsLike | number | string
    lockedBalanceAfter: Decimal | DecimalJsLike | number | string
    availableBalanceAfter: Decimal | DecimalJsLike | number | string
    bizType: string
    bizId: string
    sourceOrderId?: string | null
    refTransactionId?: string | null
    descriptionCode: string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    account: CreditAccountCreateNestedOneWithoutTransactionsInput
  }

  export type CreditTransactionUncheckedCreateWithoutBillingTaskInput = {
    id: string
    accountId: string
    grantId?: string | null
    transactionType: $Enums.TransactionType
    direction: $Enums.TransactionDirection
    points: Decimal | DecimalJsLike | number | string
    totalBalanceBefore: Decimal | DecimalJsLike | number | string
    totalBalanceAfter: Decimal | DecimalJsLike | number | string
    lockedBalanceBefore: Decimal | DecimalJsLike | number | string
    lockedBalanceAfter: Decimal | DecimalJsLike | number | string
    availableBalanceAfter: Decimal | DecimalJsLike | number | string
    bizType: string
    bizId: string
    sourceOrderId?: string | null
    refTransactionId?: string | null
    descriptionCode: string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CreditTransactionCreateOrConnectWithoutBillingTaskInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutBillingTaskInput, CreditTransactionUncheckedCreateWithoutBillingTaskInput>
  }

  export type CreditTransactionCreateManyBillingTaskInputEnvelope = {
    data: CreditTransactionCreateManyBillingTaskInput | CreditTransactionCreateManyBillingTaskInput[]
    skipDuplicates?: boolean
  }

  export type CreditAccountUpsertWithoutBillingTasksInput = {
    update: XOR<CreditAccountUpdateWithoutBillingTasksInput, CreditAccountUncheckedUpdateWithoutBillingTasksInput>
    create: XOR<CreditAccountCreateWithoutBillingTasksInput, CreditAccountUncheckedCreateWithoutBillingTasksInput>
    where?: CreditAccountWhereInput
  }

  export type CreditAccountUpdateToOneWithWhereWithoutBillingTasksInput = {
    where?: CreditAccountWhereInput
    data: XOR<CreditAccountUpdateWithoutBillingTasksInput, CreditAccountUncheckedUpdateWithoutBillingTasksInput>
  }

  export type CreditAccountUpdateWithoutBillingTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumAccountOwnerTypeFieldUpdateOperationsInput | $Enums.AccountOwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    totalBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: CreditTransactionUpdateManyWithoutAccountNestedInput
  }

  export type CreditAccountUncheckedUpdateWithoutBillingTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumAccountOwnerTypeFieldUpdateOperationsInput | $Enums.AccountOwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    totalBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: CreditTransactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutBillingTaskInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutBillingTaskInput, CreditTransactionUncheckedUpdateWithoutBillingTaskInput>
    create: XOR<CreditTransactionCreateWithoutBillingTaskInput, CreditTransactionUncheckedCreateWithoutBillingTaskInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutBillingTaskInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutBillingTaskInput, CreditTransactionUncheckedUpdateWithoutBillingTaskInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutBillingTaskInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutBillingTaskInput>
  }

  export type CreditAccountCreateWithoutTransactionsInput = {
    id: string
    ownerType: $Enums.AccountOwnerType
    ownerId: string
    currency?: string
    totalBalance?: Decimal | DecimalJsLike | number | string
    lockedBalance?: Decimal | DecimalJsLike | number | string
    availableBalance?: Decimal | DecimalJsLike | number | string
    status: $Enums.CreditAccountStatus
    version?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    billingTasks?: BillingTaskCreateNestedManyWithoutAccountInput
  }

  export type CreditAccountUncheckedCreateWithoutTransactionsInput = {
    id: string
    ownerType: $Enums.AccountOwnerType
    ownerId: string
    currency?: string
    totalBalance?: Decimal | DecimalJsLike | number | string
    lockedBalance?: Decimal | DecimalJsLike | number | string
    availableBalance?: Decimal | DecimalJsLike | number | string
    status: $Enums.CreditAccountStatus
    version?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    billingTasks?: BillingTaskUncheckedCreateNestedManyWithoutAccountInput
  }

  export type CreditAccountCreateOrConnectWithoutTransactionsInput = {
    where: CreditAccountWhereUniqueInput
    create: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
  }

  export type BillingTaskCreateWithoutTransactionsInput = {
    id: string
    bizType: string
    bizId: string
    estimatedPoints: Decimal | DecimalJsLike | number | string
    frozenPoints?: Decimal | DecimalJsLike | number | string
    settledPoints?: Decimal | DecimalJsLike | number | string
    refundedPoints?: Decimal | DecimalJsLike | number | string
    status: $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey: string
    settleIdempotencyKey?: string | null
    refundIdempotencyKey?: string | null
    lockExpireAt?: Date | string | null
    frozenAt?: Date | string | null
    settledAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
    account: CreditAccountCreateNestedOneWithoutBillingTasksInput
  }

  export type BillingTaskUncheckedCreateWithoutTransactionsInput = {
    id: string
    accountId: string
    bizType: string
    bizId: string
    estimatedPoints: Decimal | DecimalJsLike | number | string
    frozenPoints?: Decimal | DecimalJsLike | number | string
    settledPoints?: Decimal | DecimalJsLike | number | string
    refundedPoints?: Decimal | DecimalJsLike | number | string
    status: $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey: string
    settleIdempotencyKey?: string | null
    refundIdempotencyKey?: string | null
    lockExpireAt?: Date | string | null
    frozenAt?: Date | string | null
    settledAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
  }

  export type BillingTaskCreateOrConnectWithoutTransactionsInput = {
    where: BillingTaskWhereUniqueInput
    create: XOR<BillingTaskCreateWithoutTransactionsInput, BillingTaskUncheckedCreateWithoutTransactionsInput>
  }

  export type CreditAccountUpsertWithoutTransactionsInput = {
    update: XOR<CreditAccountUpdateWithoutTransactionsInput, CreditAccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CreditAccountCreateWithoutTransactionsInput, CreditAccountUncheckedCreateWithoutTransactionsInput>
    where?: CreditAccountWhereInput
  }

  export type CreditAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CreditAccountWhereInput
    data: XOR<CreditAccountUpdateWithoutTransactionsInput, CreditAccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type CreditAccountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumAccountOwnerTypeFieldUpdateOperationsInput | $Enums.AccountOwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    totalBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTasks?: BillingTaskUpdateManyWithoutAccountNestedInput
  }

  export type CreditAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumAccountOwnerTypeFieldUpdateOperationsInput | $Enums.AccountOwnerType
    ownerId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    totalBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCreditAccountStatusFieldUpdateOperationsInput | $Enums.CreditAccountStatus
    version?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTasks?: BillingTaskUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type BillingTaskUpsertWithoutTransactionsInput = {
    update: XOR<BillingTaskUpdateWithoutTransactionsInput, BillingTaskUncheckedUpdateWithoutTransactionsInput>
    create: XOR<BillingTaskCreateWithoutTransactionsInput, BillingTaskUncheckedCreateWithoutTransactionsInput>
    where?: BillingTaskWhereInput
  }

  export type BillingTaskUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: BillingTaskWhereInput
    data: XOR<BillingTaskUpdateWithoutTransactionsInput, BillingTaskUncheckedUpdateWithoutTransactionsInput>
  }

  export type BillingTaskUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    estimatedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFieldUpdateOperationsInput | $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey?: StringFieldUpdateOperationsInput | string
    settleIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    refundIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    lockExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    account?: CreditAccountUpdateOneRequiredWithoutBillingTasksNestedInput
  }

  export type BillingTaskUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    estimatedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFieldUpdateOperationsInput | $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey?: StringFieldUpdateOperationsInput | string
    settleIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    refundIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    lockExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type BillingTaskCreateManyAccountInput = {
    id: string
    bizType: string
    bizId: string
    estimatedPoints: Decimal | DecimalJsLike | number | string
    frozenPoints?: Decimal | DecimalJsLike | number | string
    settledPoints?: Decimal | DecimalJsLike | number | string
    refundedPoints?: Decimal | DecimalJsLike | number | string
    status: $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey: string
    settleIdempotencyKey?: string | null
    refundIdempotencyKey?: string | null
    lockExpireAt?: Date | string | null
    frozenAt?: Date | string | null
    settledAt?: Date | string | null
    refundedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    version?: number
  }

  export type CreditTransactionCreateManyAccountInput = {
    id: string
    grantId?: string | null
    billingTaskId?: string | null
    transactionType: $Enums.TransactionType
    direction: $Enums.TransactionDirection
    points: Decimal | DecimalJsLike | number | string
    totalBalanceBefore: Decimal | DecimalJsLike | number | string
    totalBalanceAfter: Decimal | DecimalJsLike | number | string
    lockedBalanceBefore: Decimal | DecimalJsLike | number | string
    lockedBalanceAfter: Decimal | DecimalJsLike | number | string
    availableBalanceAfter: Decimal | DecimalJsLike | number | string
    bizType: string
    bizId: string
    sourceOrderId?: string | null
    refTransactionId?: string | null
    descriptionCode: string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BillingTaskUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    estimatedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFieldUpdateOperationsInput | $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey?: StringFieldUpdateOperationsInput | string
    settleIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    refundIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    lockExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    transactions?: CreditTransactionUpdateManyWithoutBillingTaskNestedInput
  }

  export type BillingTaskUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    estimatedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFieldUpdateOperationsInput | $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey?: StringFieldUpdateOperationsInput | string
    settleIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    refundIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    lockExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    transactions?: CreditTransactionUncheckedUpdateManyWithoutBillingTaskNestedInput
  }

  export type BillingTaskUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    estimatedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frozenPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    settledPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    refundedPoints?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBillingTaskStatusFieldUpdateOperationsInput | $Enums.BillingTaskStatus
    pricingSnapshotJson?: NullableJsonNullValueInput | InputJsonValue
    freezeIdempotencyKey?: StringFieldUpdateOperationsInput | string
    settleIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    refundIdempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    lockExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type CreditTransactionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    grantId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    sourceOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    refTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionCode?: StringFieldUpdateOperationsInput | string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billingTask?: BillingTaskUpdateOneWithoutTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    grantId?: NullableStringFieldUpdateOperationsInput | string | null
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    sourceOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    refTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionCode?: StringFieldUpdateOperationsInput | string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    grantId?: NullableStringFieldUpdateOperationsInput | string | null
    billingTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    sourceOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    refTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionCode?: StringFieldUpdateOperationsInput | string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateManyBillingTaskInput = {
    id: string
    accountId: string
    grantId?: string | null
    transactionType: $Enums.TransactionType
    direction: $Enums.TransactionDirection
    points: Decimal | DecimalJsLike | number | string
    totalBalanceBefore: Decimal | DecimalJsLike | number | string
    totalBalanceAfter: Decimal | DecimalJsLike | number | string
    lockedBalanceBefore: Decimal | DecimalJsLike | number | string
    lockedBalanceAfter: Decimal | DecimalJsLike | number | string
    availableBalanceAfter: Decimal | DecimalJsLike | number | string
    bizType: string
    bizId: string
    sourceOrderId?: string | null
    refTransactionId?: string | null
    descriptionCode: string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateWithoutBillingTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    grantId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    sourceOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    refTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionCode?: StringFieldUpdateOperationsInput | string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: CreditAccountUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateWithoutBillingTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    grantId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    sourceOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    refTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionCode?: StringFieldUpdateOperationsInput | string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyWithoutBillingTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    grantId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    direction?: EnumTransactionDirectionFieldUpdateOperationsInput | $Enums.TransactionDirection
    points?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lockedBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availableBalanceAfter?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bizType?: StringFieldUpdateOperationsInput | string
    bizId?: StringFieldUpdateOperationsInput | string
    sourceOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    refTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    descriptionCode?: StringFieldUpdateOperationsInput | string
    metadataJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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