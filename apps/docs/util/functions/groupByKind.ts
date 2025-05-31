import type { AnyMember, AnyMemberKind } from "@fancystudioteam/api-extractor";

export const groupByKind = <Member extends AnyMember>(members: Member[]): GroupByKind<Member> =>
  members.reduce<GroupByKind<Member>>(
    (accumulator, member) => {
      const { kind } = member;
      let group = accumulator[kind];

      if (!group) {
        group = [];
      }

      group.push(member);

      return accumulator;
    },
    {} as GroupByKind<Member>,
  );

type GroupByKind<Member> = Record<AnyMemberKind, Member[]>;
