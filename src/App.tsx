import { Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/PostsPage";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { ContactPage } from "./pages/ContactPage";
import { SignInPage } from "./pages/SignInPage";
import { DashboardPage } from "./pages/DashboardPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostDetailsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="signin" element={<SignInPage />} />

        {/* Protected route*/}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>

        {/* Custom 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
