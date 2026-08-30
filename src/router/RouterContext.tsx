import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { RoutePath } from '../types';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string, options?: { replace?: boolean; state?: unknown }) => void;
  isActive: (path: string, exact?: boolean) => boolean;
  selectedProjectId: string | null;
  openProjectModal: (projectId: string) => void;
  closeProjectModal: () => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

function normalizePath(rawPath: string): string {
  // Remove hash or query params for base matching
  let clean = rawPath.split('?')[0].split('#')[0];
  if (!clean.startsWith('/')) clean = '/' + clean;
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }
  return clean || '/';
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('project');
    }
    return null;
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = normalizePath(window.location.pathname);
      setCurrentPath(path);
      const params = new URLSearchParams(window.location.search);
      setSelectedProjectId(params.get('project'));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((path: string, options?: { replace?: boolean; state?: unknown }) => {
    const normalized = normalizePath(path);
    setCurrentPath(normalized);

    // Update browser URL
    if (typeof window !== 'undefined') {
      if (options?.replace) {
        window.history.replaceState(options?.state || {}, '', normalized);
      } else {
        window.history.pushState(options?.state || {}, '', normalized);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const openProjectModal = useCallback((projectId: string) => {
    setSelectedProjectId(projectId);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('project', projectId);
      window.history.pushState({}, '', url.toString());
    }
  }, []);

  const closeProjectModal = useCallback(() => {
    setSelectedProjectId(null);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('project');
      window.history.pushState({}, '', url.toString());
    }
  }, []);

  const isActive = useCallback(
    (path: string, exact = false) => {
      const norm = normalizePath(path);
      if (exact || norm === '/') {
        return currentPath === norm;
      }
      return currentPath === norm || currentPath.startsWith(norm + '/');
    },
    [currentPath]
  );

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        isActive,
        selectedProjectId,
        openProjectModal,
        closeProjectModal,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export const Link: React.FC<{
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  id?: string;
  title?: string;
}> = ({ to, className = '', children, onClick, id, title }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only intercept normal left clicks without modifier keys
    if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      if (onClick) onClick(e);
      navigate(to);
    }
  };

  return (
    <a
      id={id}
      href={to}
      title={title}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};
