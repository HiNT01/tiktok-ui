import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((it, index) => {
                        let Layout = DefaultLayout;
                        if (it.layout) {
                            Layout = it.layout;
                        } else if (it.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = it.component;
                        return (
                            <Route
                                key={index}
                                path={it.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
