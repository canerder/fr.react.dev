/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
<<<<<<< HEAD

import ButtonLink from 'components/ButtonLink';
import {DocsPageFooter} from 'components/DocsFooter';
import {Footer} from './Footer';
import {HomeContent} from './HomeContent';
import {IconNavArrow} from 'components/Icon/IconNavArrow';
=======
import {useRouter} from 'next/router';
import {SidebarNav} from './SidebarNav';
import {Footer} from './Footer';
import {Toc} from './Toc';
import SocialBanner from '../SocialBanner';
import {DocsPageFooter} from 'components/DocsFooter';
import {Seo} from 'components/Seo';
>>>>>>> b7bf6c16fb3152626a71c115b3242df6eb93bc6e
import PageHeading from 'components/PageHeading';
import type {RouteItem} from 'components/Layout/getRouteMeta';
import {Seo} from 'components/Seo';
import {SidebarNav} from './SidebarNav';
import SocialBanner from '../SocialBanner';
import {Suspense} from 'react';
import {Toc} from './Toc';
import {TocContext} from '../MDX/TocContext';
import {Languages, LanguagesContext} from '../MDX/LanguagesContext';
import type {TocItem} from 'components/MDX/TocContext';
import {TopNav} from './TopNav';
import cn from 'classnames';
<<<<<<< HEAD
import {getRouteMeta} from './getRouteMeta';
import {useRouter} from 'next/router';
=======
import Head from 'next/head';
>>>>>>> b7bf6c16fb3152626a71c115b3242df6eb93bc6e

import(/* webpackPrefetch: true */ '../MDX/CodeBlock/CodeBlock');

interface PageProps {
  children: React.ReactNode;
  toc: Array<TocItem>;
  routeTree: RouteItem;
  meta: {
    title?: string;
    titleForTitleTag?: string;
    canary?: boolean;
    description?: string;
  };
  section: 'learn' | 'reference' | 'community' | 'blog' | 'home' | 'unknown';
  languages?: Languages | null;
}

export function Page({
  children,
  toc,
  routeTree,
  meta,
  section,
  languages = null,
}: PageProps) {
  const {asPath} = useRouter();
  const cleanedPath = asPath.split(/[\?\#]/)[0];
  const {route, nextRoute, prevRoute, breadcrumbs, order} = getRouteMeta(
    cleanedPath,
    routeTree
  );
  const title = meta.title || route?.title || '';
  const canary = meta.canary || false;
  const description = meta.description || route?.description || '';
  const isHomePage = cleanedPath === '/';
  const isBlogIndex = cleanedPath === '/blog';

  let content;
  if (isHomePage) {
    content = <HomeContent />;
  } else {
    content = (
      <div className="ps-0">
        <div
          className={cn(
            section === 'blog' && 'mx-auto px-0 lg:px-4 max-w-5xl'
          )}>
          <PageHeading
            title={title}
            canary={canary}
            description={description}
            tags={route?.tags}
            breadcrumbs={breadcrumbs}
          />
        </div>
        <div className="px-5 sm:px-12">
          <div
            className={cn(
              'max-w-7xl mx-auto',
              section === 'blog' && 'lg:flex lg:flex-col lg:items-center'
            )}>
            <TocContext.Provider value={toc}>
              <LanguagesContext.Provider value={languages}>
                {children}
              </LanguagesContext.Provider>
            </TocContext.Provider>
          </div>
          {!isBlogIndex && (
            <DocsPageFooter
              route={route}
              nextRoute={nextRoute}
              prevRoute={prevRoute}
            />
          )}
        </div>
      </div>
    );
  }

  let hasColumns = true;
  let showSidebar = true;
  let showToc = true;
  if (isHomePage || isBlogIndex) {
    hasColumns = false;
    showSidebar = false;
    showToc = false;
  } else if (section === 'blog') {
    showToc = false;
    hasColumns = false;
    showSidebar = false;
  }

  let searchOrder;
  if (section === 'learn' || (section === 'blog' && !isBlogIndex)) {
    searchOrder = order;
  }

  return (
    <>
      <Seo
        title={title}
        titleForTitleTag={meta.titleForTitleTag}
        isHomePage={isHomePage}
        image={`/images/og-` + section + '.png'}
        searchOrder={searchOrder}
      />
      {(isHomePage || isBlogIndex) && (
        <Head>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="React Blog RSS Feed"
            href="/rss.xml"
          />
        </Head>
      )}
      <SocialBanner />
      <TopNav
        section={section}
        routeTree={routeTree}
        breadcrumbs={breadcrumbs}
      />
      <div
        className={cn(
          hasColumns &&
            'grid grid-cols-only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc'
        )}>
        {showSidebar && (
          <div className="lg:-mt-16 z-10">
            <div className="fixed top-0 py-0 shadow lg:pt-16 lg:sticky start-0 end-0 lg:shadow-none">
              <SidebarNav
                key={section}
                routeTree={routeTree}
                breadcrumbs={breadcrumbs}
              />
            </div>
          </div>
        )}
        {/* No fallback UI so need to be careful not to suspend directly inside. */}
        <Suspense fallback={null}>
          <main className="min-w-0 isolate">
            <article
              className="font-normal break-words text-primary dark:text-primary-dark"
              key={asPath}>
              {content}
            </article>
            <div
              className={cn(
                'self-stretch w-full',
                isHomePage && 'bg-wash dark:bg-gray-95 mt-[-1px]'
              )}>
              {!isHomePage && (
                <div className="w-full px-5 pt-10 mx-auto sm:px-12 md:px-12 md:pt-12 lg:pt-10">
<<<<<<< HEAD
                  {
                    <hr className="mx-auto max-w-7xl border-border dark:border-border-dark" />
                  }
                  {showSurvey && (
                    <>
                      <div className="flex flex-col items-center p-4 m-4">
                        <p className="mb-4 text-lg font-bold text-primary dark:text-primary-dark">
                          Comment trouvez-vous ces docs ?
                        </p>
                        <div>
                          <ButtonLink
                            href="https://www.surveymonkey.co.uk/r/PYRPF3X"
                            className="mt-1"
                            type="primary"
                            size="md"
                            target="_blank">
                            Dites-nous tout !
                            <IconNavArrow
                              displayDirection="end"
                              className="inline ms-1"
                            />
                          </ButtonLink>
                        </div>
                      </div>
                      <hr className="mx-auto max-w-7xl border-border dark:border-border-dark" />
                    </>
                  )}
=======
                  <hr className="mx-auto max-w-7xl border-border dark:border-border-dark" />
>>>>>>> b7bf6c16fb3152626a71c115b3242df6eb93bc6e
                </div>
              )}
              <div
                className={cn(
                  'py-12 px-5 sm:px-12 md:px-12 sm:py-12 md:py-16 lg:py-14',
                  isHomePage && 'lg:pt-0'
                )}>
                <Footer />
              </div>
            </div>
          </main>
        </Suspense>
        <div className="hidden -mt-16 lg:max-w-custom-xs 2xl:block">
          {showToc && toc.length > 0 && <Toc headings={toc} key={asPath} />}
        </div>
      </div>
    </>
  );
}
