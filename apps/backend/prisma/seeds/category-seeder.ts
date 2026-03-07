import { PrismaClient } from "@prisma/client";

export type SeededCategories = {
  engineeringId: number;
  designId: number;
  marketingId: number;
  salesId: number;
  hrId: number;
  analyticsId: number;
  financeId: number;
  contentId: number;
};

export const seedCategories = async (
  prisma: PrismaClient
): Promise<SeededCategories> => {
  const engineering = await prisma.category.create({
    data: { name: "Engineering", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"
      />
    </svg>` },
  });

  const design = await prisma.category.create({
    data: { name: "Design", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="m8.813 3l-.688.719l-4.406 4.406L3 8.813L10.188 16l-5 5l-.063.313l-1.094 5.5l-.312 1.468l1.469-.312l5.5-1.094l.312-.063l5-5l7.156 7.157l.688-.719l4.406-4.406l.719-.688L21.812 16l4.938-4.938a4.1 4.1 0 0 0 0-5.812a4.1 4.1 0 0 0-2.906-1.219a4.1 4.1 0 0 0-2.907 1.219L16 10.188zm0 2.844l1.937 1.968l-1.469 1.47l1.438 1.437l1.469-1.469l2.374 2.375l-2.968 2.969l-5.781-5.781zm15.03.125c.52 0 1.048.234 1.5.687c.903.903.903 2.067 0 2.969l-.655.656l-2.97-2.969l.657-.656c.453-.453.95-.687 1.469-.687zm-3.53 2.75l2.968 2.969L11.188 23.78a7 7 0 0 0-2.97-2.968zm.093 8.687l2.375 2.375l-1.5 1.5l1.438 1.438l1.5-1.5l1.906 1.906l-3 3l-5.719-5.719zm-13.468 5a4.97 4.97 0 0 1 2.656 2.657l-3.313.656z"
      />
    </svg>` },
  });

  const marketing = await prisma.category.create({
    data: { name: "Marketing", icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 5.882V19.24a1.76 1.76 0 0 1-3.417.592l-2.147-6.15M18 13a3 3 0 1 0 0-6M5.436 13.683A4.001 4.001 0 0 1 7 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a4 4 0 0 1-1.564-.317"
      />
    </svg>` },
  });

  const sales = await prisma.category.create({
    data: { name: "Sales", icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M4.616 20q-.691 0-1.153-.462T3 18.384V8.616q0-.691.463-1.153T4.615 7H9V5.615q0-.69.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616v9.769q0 .69-.463 1.153T19.385 20zM10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zm10 7.5h-6V16h-4v-1.5H4v3.885q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.424zm-9 .5h2v-2h-2zm-7-1.5h6V12h4v1.5h6V8.616q0-.231-.192-.424T19.385 8H4.615q-.23 0-.423.192T4 8.616zm8 .5"
      />
    </svg>` },
  });

  const hr = await prisma.category.create({
    data: { name: "HR", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
      <g fill="none">
        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="M12 12c1.873 0 3.57.62 4.815 1.487c1.183.825 2.185 2.051 2.185 3.37c0 .724-.309 1.324-.796 1.77c-.458.421-1.056.694-1.672.88C15.301 19.88 13.68 20 12 20s-3.301-.12-4.532-.493c-.616-.186-1.214-.459-1.673-.88C5.31 18.182 5 17.582 5 16.858c0-1.319 1.002-2.545 2.185-3.37C8.43 12.62 10.127 12 12 12m7 1c1.044 0 1.992.345 2.693.833c.64.447 1.307 1.19 1.307 2.096c0 .517-.225.946-.56 1.253c-.306.281-.684.446-1.029.55c-.47.142-1.025.215-1.601.247c.122-.345.19-.72.19-1.122c0-1.535-.959-2.839-2.032-3.744A4.8 4.8 0 0 1 19 13M5 13q.537.002 1.032.113C4.96 14.018 4 15.322 4 16.857c0 .402.068.777.19 1.122c-.576-.032-1.13-.105-1.601-.247c-.345-.104-.723-.269-1.03-.55A1.68 1.68 0 0 1 1 15.93c0-.905.666-1.649 1.307-2.096A4.76 4.76 0 0 1 5 13m13.5-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M12 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8"
        />
      </g>
    </svg>` },
  });

  const ana = await prisma.category.create({
    data: { name: "Analytics", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="M7 18v-2m5 2v-3m5 3v-5M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
        <path d="M5.992 11.486c2.155.072 7.042-.253 9.822-4.665m-1.822-.533l1.876-.302c.228-.029.564.152.647.367l.495 1.638" />
      </g>
    </svg>` },
  });

  const finance = await prisma.category.create({
    data: { name: "Finance", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
      >
        <path d="M14 13V9a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-2" />
        <rect width="30" height="22" x="4" y="19" rx="2" />
        <path d="M4 28h30m0-5v12M4 23v12m7-1h8m6 0h2" />
      </g>
    </svg>` },
  });

  const content = await prisma.category.create({
    data: { name: "Content", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </g>
    </svg>` },
  });

  return {
    engineeringId: engineering.id,
    designId: design.id,
    marketingId: marketing.id,
    salesId: sales.id,
    hrId: hr.id,
    analyticsId: ana.id,
    financeId: finance.id,
    contentId: content.id,
  };
};