import { ApiItemKind, ApiModel } from "@microsoft/api-extractor-model";

export const model = new ApiModel();

model.loadPackage("public/api/types.api.json");

export const packageMember = model.members.find((member) => member.kind === ApiItemKind.Package);
export const entryPointMember = packageMember?.members.find((member) => member.kind === ApiItemKind.EntryPoint);
