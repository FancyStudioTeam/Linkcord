import { ChevronsUpDown } from "lucide-react";
import { Collapsible as RadixCollapsible } from "radix-ui";
import { Fragment, type ReactNode, useState } from "react";
import type { AnyEntryPointMember } from "#extractor/types";
import { Separator } from "./Separator.jsx";

const _renderItem = <Item extends AnyEntryPointMember>(
  item: Item,
  renderFunction: RenderFunction<Item>,
  options: RenderItemOptions,
): ReactNode => {
  const { enableSeparator, index } = options;
  const itemKey = `${item.kind}:${item.name}`;
  const shouldShowSeparator = enableSeparator && !!index;

  return (
    <Fragment key={itemKey}>
      {shouldShowSeparator && <Separator />}
      {renderFunction(item)}
    </Fragment>
  );
};

export const Collapsible = <Item extends AnyEntryPointMember>({
  enableSeparator = false,
  items,
  renderItem,
  titleNode,
}: {
  enableSeparator?: boolean;
  items: Item[];
  renderItem: RenderFunction<Item>;
  titleNode: ReactNode;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <RadixCollapsible.Root onOpenChange={setOpen} open={open}>
      <RadixCollapsible.Trigger className="flex w-full cursor-pointer select-none items-center justify-between gap-2 font-extrabold text-xl transition-opacity hover:opacity-50">
        {titleNode}
        <ChevronsUpDown className="size-5" />
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content className="mt-4 flex flex-col gap-2">
        {items.map((item, index) =>
          _renderItem(item, renderItem, {
            enableSeparator,
            index,
          }),
        )}
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};

interface RenderItemOptions {
  enableSeparator: boolean;
  index: number;
}

type RenderFunction<Item extends AnyEntryPointMember> = (item: Item) => ReactNode;
