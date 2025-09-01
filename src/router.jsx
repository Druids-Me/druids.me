import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./styles/global.css" // global styles loaded once

const Home = lazy(() => import("./routes/Home.jsx"))
const MarkdownPage = lazy(() => import("./routes/MarkdownPage.jsx"))
const NotFound = lazy(() => import("./routes/NotFound.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/md/:slug",
    element: (
      <Suspense fallback={null}>
        <MarkdownPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    ),
  },
])

export default function AppRouter() {
  // global styles loaded once
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}