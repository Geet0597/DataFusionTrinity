import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Applications from './components/Applications/Applications';
import Resources from "./components/Resources/Resources";
import ApplicationDetail from "./components/Applications/ApplicationDetail";
import ResourceDetail from "./components/Resources/ResourcesDetail";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/applications">
              <Route index element={<Applications />} />
              <Route path=":appName" element={<ApplicationDetail />} />
            </Route>
            <Route path="/resources">
              <Route index element={<Resources />} />
              <Route path=":appName" element={<ResourceDetail />} />
            </Route>
          </Routes>
        </main>
      </Layout>
    </>
  )
}

export default App
