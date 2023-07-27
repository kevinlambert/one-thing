import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerGroupMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isAdmin?: boolean | null;
  readonly groupID: string;
  readonly accountID: string;
  readonly GroupMemberThingPeriod?: ThingPeriod | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly groupMemberGroupMemberThingPeriodId?: string | null;
}

type LazyGroupMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isAdmin?: boolean | null;
  readonly groupID: string;
  readonly accountID: string;
  readonly GroupMemberThingPeriod: AsyncItem<ThingPeriod | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly groupMemberGroupMemberThingPeriodId?: string | null;
}

export declare type GroupMember = LazyLoading extends LazyLoadingDisabled ? EagerGroupMember : LazyGroupMember

export declare const GroupMember: (new (init: ModelInit<GroupMember>) => GroupMember) & {
  copyOf(source: GroupMember, mutator: (draft: MutableModel<GroupMember>) => MutableModel<GroupMember> | void): GroupMember;
}

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly GroupMembers?: (GroupMember | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly GroupMembers: AsyncCollection<GroupMember>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

type EagerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly plan?: string | null;
  readonly AccountSphere?: (ThingPeriod | null)[] | null;
  readonly AccountThingPeriod?: (ThingPeriod | null)[] | null;
  readonly AccountGroupMembers?: (ThingPeriod | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly plan?: string | null;
  readonly AccountSphere: AsyncCollection<ThingPeriod>;
  readonly AccountThingPeriod: AsyncCollection<ThingPeriod>;
  readonly AccountGroupMembers: AsyncCollection<ThingPeriod>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}

type EagerSphere = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sphere, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly SphereThingPeriods?: (ThingPeriod | null)[] | null;
  readonly accountID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySphere = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sphere, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly SphereThingPeriods: AsyncCollection<ThingPeriod>;
  readonly accountID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sphere = LazyLoading extends LazyLoadingDisabled ? EagerSphere : LazySphere

export declare const Sphere: (new (init: ModelInit<Sphere>) => Sphere) & {
  copyOf(source: Sphere, mutator: (draft: MutableModel<Sphere>) => MutableModel<Sphere> | void): Sphere;
}

type EagerThingPeriod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ThingPeriod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parentID?: string | null;
  readonly text?: string | null;
  readonly periodInterval?: string | null;
  readonly periodIncrement?: number | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly createdDateTime?: string | null;
  readonly updatedDateTime?: string | null;
  readonly sphereID: string;
  readonly accountID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyThingPeriod = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ThingPeriod, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parentID?: string | null;
  readonly text?: string | null;
  readonly periodInterval?: string | null;
  readonly periodIncrement?: number | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly createdDateTime?: string | null;
  readonly updatedDateTime?: string | null;
  readonly sphereID: string;
  readonly accountID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ThingPeriod = LazyLoading extends LazyLoadingDisabled ? EagerThingPeriod : LazyThingPeriod

export declare const ThingPeriod: (new (init: ModelInit<ThingPeriod>) => ThingPeriod) & {
  copyOf(source: ThingPeriod, mutator: (draft: MutableModel<ThingPeriod>) => MutableModel<ThingPeriod> | void): ThingPeriod;
}