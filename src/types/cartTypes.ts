export interface CartItem {
  id: number;
  title: string;
  price: number;
  images: string;
  categoryId: number;
  quantity: number;
}

export type CartState = {
  items: CartItem[];
};

export type AddItemAction = {
  type: "ADD_ITEM";
  payload: CartItem;
};

export type RemoveItemAction = {
  type: "REMOVE_ITEM";
  payload: { id: number };
};

export type UpdateQuantityAction = {
  type: "UPDATE_QUANTITY";
  payload: { id: number; quantity: number };
};

export type CartAction =
  | AddItemAction
  | RemoveItemAction
  | UpdateQuantityAction;
