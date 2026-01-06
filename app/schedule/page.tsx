// 課程表頁面 - Server Component
// 上半部顯示課程表，下半部顯示選中的課程詳細資訊
import { schedule } from "@/lib/messages";
import CalendarPageClient from "./components/calendar-page.client";

export default function CalendarPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* メインコンテンツ */}
      <main className="relative z-10 container mx-auto px-4 md:px-0 py-8">
        {/* タイトルセクション */}
        <div className="text-center my-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 font-[var(--font-outfit)]">
            {schedule.PageTitle}
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            {schedule.PageDescription}
          </p>
        </div>

        {/* カレンダーと詳細情報のレイアウト（上下分割） */}
        <div className="flex flex-col gap-6 h-full">
          <CalendarPageClient />
        </div>
      </main>
    </div>
  );
}
