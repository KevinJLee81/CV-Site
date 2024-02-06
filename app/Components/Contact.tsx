import React from 'react'

export const Contact = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-200 text-base-content rounded fixed bottom-0 py-2">
        <nav className="grid grid-flow-col gap-6">
          <a href="https://www.linkedin.com/in/kevinjlee81/" target='_BLANK'>
            <img className="h-8" src="../../in.svg" alt="" />
          </a>

          <a href="https://github.com/KevinJLee81" target='_BLANK'>
            <img className="h-8" src="../../Github.svg" alt="" />
          </a>

          <a href="mailto:kevinjlee81@gmail.com" target='_BLANK'>
            <img className="h-8" src="../../mail.svg" alt="" />
          </a>

        </nav>
      </footer>
    </>
  )
}

export default Contact