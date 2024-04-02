import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './homepage.css'

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <Helmet>
        <title>aulaguard</title>
        <meta name="description" content="Aulaguard is a service." />
        <meta property="og:title" content="aulaguard" />
        <meta property="og:description" content="Aulaguard is a service." />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8a11f148-f21f-4980-bcd5-f693bc27e439/c661f24b-c96a-45d9-9238-61e4e6b8312c?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div data-role="Header" className="homepage-header">
        <a
          href="/"
          target="_blank"
          rel="noreferrer noopener"
          className="homepage-link"
        >
          <img
            alt="logo"
            src="/lynx-transparent-1500w.png"
            className="homepage-image"
          />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noreferrer noopener"
          className="homepage-link01"
        >
          <p className="homepage-text">
            <span>aulaguard</span>
            <br></br>
          </p>
        </a>
        <div className="homepage-nav">
          <div className="homepage-about">
            <svg viewBox="0 0 1024 1024" className="homepage-mac">
              <path d="M597.333 426.667v170.667h-170.667v-170.667zM768 170.667c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003h-85.333v-85.333c0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003zM597.333 341.333h-170.667v-85.333c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005h85.333v170.667h-85.333c-47.104 0-89.856 19.157-120.661 50.005s-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661v-85.333h170.667v85.333c0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005h-85.333v-170.667h85.333c47.104 0 89.856-19.157 120.661-50.005s50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661zM341.333 341.333h-85.333c-23.595 0-44.843-9.515-60.331-25.003s-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM341.333 682.667v85.333c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003zM682.667 682.667h85.333c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331z"></path>
            </svg>
            <a
              href="/about"
              target="_blank"
              rel="noreferrer noopener"
              className="homepage-link02"
            >
              <label className="homepage-about1">
                <span>About</span>
                <br></br>
              </label>
            </a>
          </div>
          <svg viewBox="0 0 1024 1024" className="homepage-circ2">
            <path d="M512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <div className="homepage-faq">
            <svg viewBox="0 0 1024 1024" className="homepage-message">
              <path d="M726 512q0 18-13 30t-31 12h-426l-170 172v-598q0-18 12-30t30-12h554q18 0 31 12t13 30v384zM896 256q18 0 30 12t12 30v640l-170-170h-470q-18 0-30-12t-12-30v-86h554v-384h86z"></path>
            </svg>
            <a
              href="/support"
              target="_blank"
              rel="noreferrer noopener"
              className="homepage-link03"
            >
              <label className="homepage-faq1">
                <span>Support</span>
                <br></br>
              </label>
            </a>
          </div>
          <svg viewBox="0 0 1024 1024" className="homepage-circ1">
            <path d="M512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <div className="homepage-contacts">
            <svg viewBox="0 0 1024 1024" className="homepage-player">
              <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
            </svg>
            <a
              href="/contacts"
              target="_blank"
              rel="noreferrer noopener"
              className="homepage-link04"
            >
              <label className="homepage-contacts1">
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
          className="homepage-link05"
        >
          <p className="homepage-download">Download AulaGuard</p>
        </a>
      </div>
      <div className="homepage-welcome">
        <div className="homepage-welcome-container">
          <h1 className="homepage-text09">
            <span>Welcome!</span>
            <br></br>
          </h1>
          <a
            href="https://drive.google.com/drive/folders/1tkuM8JOQwPdt_0A3Jz83aHoCEuHtO_ja?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="homepage-link06"
          >
            <div className="homepage-download1">
              <svg viewBox="0 0 1024 1024" className="homepage-icon05">
                <path d="M853.333 640v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 537.003v-409.003c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v409.003l-140.501-140.501c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c3.925 3.925 8.619 7.083 13.824 9.259s10.795 3.243 16.341 3.243c10.923 0 21.845-4.181 30.165-12.501l213.333-213.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
              </svg>
              <span className="homepage-text12">
                <span>Download AulaGuard</span>
                <br></br>
              </span>
            </div>
          </a>
          <p className="homepage-text15">
            <span>
              Aulaguard: Your site dashboard&apos;s security shield. Defend
              against cyber threats, safeguard data, and prevent bad actors.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </p>
          <a
            href="/about"
            target="_blank"
            rel="noreferrer noopener"
            className="homepage-link07"
          >
            <div className="homepage-about2">
              <svg viewBox="0 0 1024 1024" className="homepage-icon07">
                <path d="M170 214v596h342v86h-342q-34 0-59-26t-25-60v-596q0-34 25-60t59-26h342v86h-342zM726 298l212 214-212 214-60-62 110-110h-434v-84h434l-110-112z"></path>
              </svg>
              <span className="homepage-text18">
                <span>About</span>
                <br></br>
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="homepage-news">
        <div className="homepage-search">
          <div className="homepage-head-container">
            <h1 className="homepage-text21">Search - Information Security</h1>
            <svg viewBox="0 0 1024 1024" className="homepage-icon09">
              <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
            </svg>
          </div>
          <div className="homepage-search-list">
            <span className="homepage-text22">
              <span>Search the Vulnerability Database</span>
              <br></br>
            </span>
            <div className="homepage-search-container">
              <form
                action="https://cve.mitre.org/cgi-bin/cvekey.cgi"
                method="get"
                className="homepage-cve"
              >
                <svg viewBox="0 0 1024 1024" className="homepage-icon11">
                  <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search cve.mitre.org "
                  className="homepage-textinput input"
                />
              </form>
              <form
                action="https://vulmon.com/searchpage"
                method="get"
                className="homepage-vulmon"
              >
                <svg viewBox="0 0 1024 1024" className="homepage-icon13">
                  <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search vulmon.com"
                  className="homepage-textinput1 input"
                />
              </form>
              <form
                action="https://sploitus.com/search"
                method="get"
                className="homepage-sploitus"
              >
                <svg viewBox="0 0 1024 1024" className="homepage-icon15">
                  <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search sploitus.com"
                  className="homepage-textinput2 input"
                />
              </form>
            </div>
          </div>
          <div className="homepage-engine">
            <span className="homepage-text25">
              <span>Search Engines</span>
              <br></br>
            </span>
            <form
              action="https://www.google.com/search"
              method="get"
              className="homepage-google"
            >
              <svg viewBox="0 0 1024 1024" className="homepage-icon17">
                <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search google.com"
                className="homepage-textinput3 input"
              />
            </form>
            <form
              action="https://duckduckgo.com/"
              method="get"
              className="homepage-ddd"
            >
              <svg viewBox="0 0 1024 1024" className="homepage-icon19">
                <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search duckduckgo.com"
                className="homepage-textinput4 input"
              />
            </form>
          </div>
        </div>
        <div className="homepage-social">
          <h1 className="homepage-text28">
            <span>Twitter - #Infosec</span>
            <br></br>
          </h1>
          <div className="homepage-container1">
            <div className="homepage-container2">
              <Script
                html={`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">⚠️BREAKING⚠️Allegedly, a threat actor has exposed data from FICO <a href="https://twitter.com/FICO?ref_src=twsrc%5Etfw">@FICO</a> dated March 2024. They claim the data shows Full Name, SSN, Drivers License and A LOT of other confidential info. <a href="https://twitter.com/hashtag/Clearnet?src=hash&amp;ref_src=twsrc%5Etfw">#Clearnet</a> <a href="https://twitter.com/hashtag/DarkWebInformer?src=hash&amp;ref_src=twsrc%5Etfw">#DarkWebInformer</a> <a href="https://twitter.com/hashtag/Cyberattack?src=hash&amp;ref_src=twsrc%5Etfw">#Cyberattack</a> <a href="https://twitter.com/hashtag/Cybercrime?src=hash&amp;ref_src=twsrc%5Etfw">#Cybercrime</a> <a href="https://twitter.com/hashtag/Infosec?src=hash&amp;ref_src=twsrc%5Etfw">#Infosec</a> <a href="https://twitter.com/hashtag/CTI?src=hash&amp;ref_src=twsrc%5Etfw">#CTI</a> <a href="https://twitter.com/hashtag/FICO?src=hash&amp;ref_src=twsrc%5Etfw">#FICO</a> <a href="https://t.co/Ia7T9JoSJL">pic.twitter.com/Ia7T9JoSJL</a></p>&mdash; Dark Web Informer (@DarkWebInformer) <a href="https://twitter.com/DarkWebInformer/status/1774097373326614581?ref_src=twsrc%5Etfw">March 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`}
              ></Script>
            </div>
          </div>
          <div className="homepage-container3">
            <div className="homepage-container4">
              <Script
                html={`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">OS ranks in terms of the total numbers of distinct CVEs reported in 2023 👇 <a href="https://twitter.com/hashtag/cybersecurity?src=hash&amp;ref_src=twsrc%5Etfw">#cybersecurity</a> <a href="https://twitter.com/hashtag/infosec?src=hash&amp;ref_src=twsrc%5Etfw">#infosec</a> <a href="https://t.co/Jvo2HUjRk1">pic.twitter.com/Jvo2HUjRk1</a></p>&mdash; Dan Nanni (@xmodulo) <a href="https://twitter.com/xmodulo/status/1774046202272616519?ref_src=twsrc%5Etfw">March 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`}
              ></Script>
            </div>
          </div>
          <div className="homepage-container5">
            <div className="homepage-container6">
              <Script
                html={`<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Which is the best Firewall?<a href="https://twitter.com/hashtag/firewall?src=hash&amp;ref_src=twsrc%5Etfw">#firewall</a> <a href="https://twitter.com/hashtag/pfsense?src=hash&amp;ref_src=twsrc%5Etfw">#pfsense</a> <a href="https://twitter.com/hashtag/opnsense?src=hash&amp;ref_src=twsrc%5Etfw">#opnsense</a> <a href="https://twitter.com/hashtag/unifi?src=hash&amp;ref_src=twsrc%5Etfw">#unifi</a> <a href="https://twitter.com/hashtag/cisco?src=hash&amp;ref_src=twsrc%5Etfw">#cisco</a> <a href="https://twitter.com/hashtag/protect?src=hash&amp;ref_src=twsrc%5Etfw">#protect</a> <a href="https://twitter.com/hashtag/cybersecurity?src=hash&amp;ref_src=twsrc%5Etfw">#cybersecurity</a> <a href="https://twitter.com/hashtag/wifi?src=hash&amp;ref_src=twsrc%5Etfw">#wifi</a> <a href="https://twitter.com/hashtag/infosec?src=hash&amp;ref_src=twsrc%5Etfw">#infosec</a> <a href="https://twitter.com/hashtag/informationsecurity?src=hash&amp;ref_src=twsrc%5Etfw">#informationsecurity</a> <a href="https://twitter.com/hashtag/cyber?src=hash&amp;ref_src=twsrc%5Etfw">#cyber</a> <a href="https://twitter.com/hashtag/hack?src=hash&amp;ref_src=twsrc%5Etfw">#hack</a> <a href="https://twitter.com/hashtag/hacking?src=hash&amp;ref_src=twsrc%5Etfw">#hacking</a> <a href="https://twitter.com/hashtag/hacker?src=hash&amp;ref_src=twsrc%5Etfw">#hacker</a> <a href="https://t.co/fnGUrXCz8K">pic.twitter.com/fnGUrXCz8K</a></p>&mdash; David Bombal (@davidbombal) <a href="https://twitter.com/davidbombal/status/1773719892962758869?ref_src=twsrc%5Etfw">March 29, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`}
              ></Script>
            </div>
          </div>
          <div className="homepage-container7"></div>
        </div>
      </div>
      <footer className="homepage-footer">
        <div className="homepage-aula-container">
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className="homepage-link08"
          >
            <img
              alt="logo"
              src="/lynx-transparent-1500w.png"
              className="homepage-image1"
            />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer noopener"
            className="homepage-link09"
          >
            <p className="homepage-text31">
              <span>aulaguard</span>
              <br></br>
            </p>
          </a>
        </div>
        <p className="homepage-text34">
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

export default Homepage
