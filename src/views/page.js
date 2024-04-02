import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>aulaguard</title>
        <meta name="description" content="Aulaguard is a service." />
        <meta property="og:title" content="aulaguard" />
        <meta property="og:description" content="Aulaguard is a service." />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8a11f148-f21f-4980-bcd5-f693bc27e439/80bba30d-af48-4079-800d-349736ba4290?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div data-role="Header" className="page-header">
        <a
          href="/"
          target="_blank"
          rel="noreferrer noopener"
          className="page-link"
        >
          <img
            alt="logo"
            src="/lynx-transparent-1500w.png"
            className="page-image"
          />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noreferrer noopener"
          className="page-link1"
        >
          <p className="page-text">
            <span>aulaguard</span>
            <br></br>
          </p>
        </a>
        <div className="page-nav">
          <div className="page-about">
            <svg viewBox="0 0 1024 1024" className="page-mac">
              <path d="M597.333 426.667v170.667h-170.667v-170.667zM768 170.667c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003h-85.333v-85.333c0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003zM597.333 341.333h-170.667v-85.333c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005h85.333v170.667h-85.333c-47.104 0-89.856 19.157-120.661 50.005s-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661v-85.333h170.667v85.333c0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005h-85.333v-170.667h85.333c47.104 0 89.856-19.157 120.661-50.005s50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661zM341.333 341.333h-85.333c-23.595 0-44.843-9.515-60.331-25.003s-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM341.333 682.667v85.333c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003zM682.667 682.667h85.333c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331z"></path>
            </svg>
            <a
              href="/about"
              target="_blank"
              rel="noreferrer noopener"
              className="page-link2"
            >
              <label className="page-about1">
                <span>About</span>
                <br></br>
              </label>
            </a>
          </div>
          <svg viewBox="0 0 1024 1024" className="page-circ2">
            <path d="M512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <div className="page-faq">
            <svg viewBox="0 0 1024 1024" className="page-message">
              <path d="M726 512q0 18-13 30t-31 12h-426l-170 172v-598q0-18 12-30t30-12h554q18 0 31 12t13 30v384zM896 256q18 0 30 12t12 30v640l-170-170h-470q-18 0-30-12t-12-30v-86h554v-384h86z"></path>
            </svg>
            <a
              href="/support"
              target="_blank"
              rel="noreferrer noopener"
              className="page-link3"
            >
              <label className="page-faq1">
                <span>Support</span>
                <br></br>
              </label>
            </a>
          </div>
          <svg viewBox="0 0 1024 1024" className="page-circ1">
            <path d="M512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <div className="page-contacts">
            <svg viewBox="0 0 1024 1024" className="page-player">
              <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
            </svg>
            <a
              href="/contacts"
              target="_blank"
              rel="noreferrer noopener"
              className="page-link4"
            >
              <label className="page-contacts1">
                <span>Links</span>
                <br></br>
              </label>
            </a>
          </div>
        </div>
        <a
          href="https://drive.google.com/drive/folders/1tkuM8JOQwPdt_0A3Jz83aHoCEuHtO_ja?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className="page-link5"
        >
          <p className="page-download">Download AulaGuard</p>
        </a>
      </div>
      <div className="page-welcome">
        <h1 className="page-text09">404 Not Found</h1>
        <div className="page-container1">
          <div className="page-container2">
            <Script
              html={`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">ICE COLD FACT 💥 <a href="https://t.co/Gk4oKH7KoA">pic.twitter.com/Gk4oKH7KoA</a></p>&mdash; ICE T (@FINALLEVEL) <a href="https://twitter.com/FINALLEVEL/status/1770423266630418927?ref_src=twsrc%5Etfw">March 20, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`}
            ></Script>
          </div>
        </div>
      </div>
      <footer className="page-footer">
        <div className="page-aula-container">
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className="page-link6"
          >
            <img
              alt="logo"
              src="/lynx-transparent-1500w.png"
              className="page-image1"
            />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className="page-link7"
          >
            <p className="page-text10">
              <span>aulaguard</span>
              <br></br>
            </p>
          </a>
        </div>
        <p className="page-text13">
          AulaGuard © 2024 by Lynx is licensed under CC BY-NC-ND 4.0
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </p>
      </footer>
    </div>
  )
}

export default Page
