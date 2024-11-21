import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TemplateProvider } from '@/contexts/TemplateContext';
import { Builder } from '@/pages/Builder';
import { PrintPage } from '@/pages/PrintPage';

function App() {
  const basename = import.meta.env.DEV ? '' : '/cv_wizardy';

  return (
    <BrowserRouter basename={basename}>
      <TemplateProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/builder" replace />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/editor" element={<Builder />} />
          <Route path="/print" element={<PrintPage />} />
          <Route path="*" element={<Navigate to="/builder" replace />} />
        </Routes>
      </TemplateProvider>
    </BrowserRouter>
  );
}

export default App;