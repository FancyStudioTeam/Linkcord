import satori from "satori";
import { APIMemberKind, type AnyEntryPointMember, type AnyTopLevelKind } from "#extractor/types";

const RAW_COLORS: Record<AnyTopLevelKind, string> = {
  [APIMemberKind.Enum]: "oklch(76.9% 0.188 70.08)",
  [APIMemberKind.Interface]: "oklch(69.6% 0.17 162.48)",
  [APIMemberKind.TypeAlias]: "oklch(64.5% 0.246 16.439)",
  [APIMemberKind.Variable]: "oklch(71.5% 0.143 215.221)",
};

export const createOpenGraphImage = async (member: AnyEntryPointMember): Promise<string> => {
  const { name, kind } = member;
  const color = RAW_COLORS[kind];
  const { default: extraBoldFont } = await import("./assets/JetBrainsMono_ExtraBold.ttf?arraybuffer");
  const jsx = (
    <div
      style={{
        backgroundColor: "oklch(14.1% 0.005 285.823)",
        color: "#fff",
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "1.5rem",
          gap: "1rem",
          margin: "1.5rem",
        }}
      >
        <span
          style={{
            color,
          }}
        >
          {kind}
        </span>
        {name}
      </div>
    </div>
  );
  const svgStringData = await satori(jsx, {
    fonts: [
      {
        data: extraBoldFont,
        name: "JetBrainsMono_ExtraBold",
      },
    ],
    height: 720,
    width: 1280,
  });

  return svgStringData;
};
