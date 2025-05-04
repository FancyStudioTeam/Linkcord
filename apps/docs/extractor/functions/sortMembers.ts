import type { AnyMember } from "#extractor/types";

const sortFunction = <Item extends AnyMember>(a: Item, b: Item): number => {
  const { name: _a } = a;
  const { name: _b } = b;

  return _a > _b ? 1 : -1;
};

export const sortMembers = <Item extends AnyMember>(members: Item[]) => members.sort(sortFunction);
