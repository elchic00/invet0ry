import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CategoriesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BusinessMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Categories {
  readonly id: string;
  readonly name: string;
  readonly Items?: (Items | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Categories, CategoriesMetaData>);
  static copyOf(source: Categories, mutator: (draft: MutableModel<Categories, CategoriesMetaData>) => MutableModel<Categories, CategoriesMetaData> | void): Categories;
}

export declare class Items {
  readonly id: string;
  readonly name?: string | null;
  readonly itemCount?: number | null;
  readonly picture?: string | null;
  readonly sku?: string | null;
  readonly expire?: string | null;
  readonly price?: number | null;
  readonly owner?: string | null;
  readonly locationsID: string;
  readonly businessID: string;
  readonly isPerishable?: boolean | null;
  readonly categoriesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Items, ItemsMetaData>);
  static copyOf(source: Items, mutator: (draft: MutableModel<Items, ItemsMetaData>) => MutableModel<Items, ItemsMetaData> | void): Items;
}

export declare class Locations {
  readonly id: string;
  readonly name?: string | null;
  readonly street?: string | null;
  readonly town?: string | null;
  readonly zip?: number | null;
  readonly owner?: string | null;
  readonly Items?: (Items | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Locations, LocationsMetaData>);
  static copyOf(source: Locations, mutator: (draft: MutableModel<Locations, LocationsMetaData>) => MutableModel<Locations, LocationsMetaData> | void): Locations;
}

export declare class Business {
  readonly id: string;
  readonly name?: string | null;
  readonly currency?: string | null;
  readonly owner?: string | null;
  readonly Locations?: Locations | null;
  readonly Items?: (Items | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly businessLocationsId?: string | null;
  constructor(init: ModelInit<Business, BusinessMetaData>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business, BusinessMetaData>) => MutableModel<Business, BusinessMetaData> | void): Business;
}