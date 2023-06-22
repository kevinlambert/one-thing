import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerPeriods = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Periods, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly order?: number | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPeriods = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Periods, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly order?: number | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Periods = LazyLoading extends LazyLoadingDisabled ? EagerPeriods : LazyPeriods

export declare const Periods: (new (init: ModelInit<Periods>) => Periods) & {
  copyOf(source: Periods, mutator: (draft: MutableModel<Periods>) => MutableModel<Periods> | void): Periods;
}

type EagerThing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Thing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly period?: string | null;
  readonly text?: string | null;
  readonly createdDateTime?: string | null;
  readonly updatedDateTime?: string | null;
  readonly Periods?: Periods | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly thingPeriodsId?: string | null;
}

type LazyThing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Thing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly period?: string | null;
  readonly text?: string | null;
  readonly createdDateTime?: string | null;
  readonly updatedDateTime?: string | null;
  readonly Periods: AsyncItem<Periods | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly thingPeriodsId?: string | null;
}

export declare type Thing = LazyLoading extends LazyLoadingDisabled ? EagerThing : LazyThing

export declare const Thing: (new (init: ModelInit<Thing>) => Thing) & {
  copyOf(source: Thing, mutator: (draft: MutableModel<Thing>) => MutableModel<Thing> | void): Thing;
}