import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VideosPage from "./pages/VideosPage";
import ClassVideosPage from "./pages/ClassVideosPage";
import LiveClassPage from "./pages/LiveClassPage";
import InfoVideosPage from "./pages/InfoVideosPage";
import NoticeBoardPage from "./pages/NoticeBoardPage";
import ExamRankingPage from "./pages/ExamRankingPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="live-class" element={<LiveClassPage />} />
        <Route path="informational-videos" element={<InfoVideosPage />} />
        <Route path="videos" element={<VideosPage />} />
        <Route path="videos/:classId" element={<ClassVideosPage />} />
        <Route path="notice-board" element={<NoticeBoardPage />} />
        <Route path="notice-board/:id" element={<NoticeBoardPage />} />
        <Route path="exam-ranking" element={<ExamRankingPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* old PHP addresses still work */}
        <Route path="index.php" element={<Navigate to="/" replace />} />
        <Route path="about.php" element={<Navigate to="/about" replace />} />
        <Route path="live-class.php" element={<Navigate to="/live-class" replace />} />
        <Route path="demo-video.php" element={<Navigate to="/informational-videos" replace />} />
        <Route path="notice-board.php" element={<Navigate to="/notice-board" replace />} />
        <Route path="news-feed.php" element={<Navigate to="/exam-ranking" replace />} />
        <Route path="contact.php" element={<Navigate to="/contact" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
