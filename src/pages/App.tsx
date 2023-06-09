import { Database, Lock, Network, Rocket } from 'lucide-react'
import { Link } from 'react-chrome-extension-router'

import { MainPage as BrowserCleanerMainPage } from '~/pages/browser-cleaner/MainPage'
import { MainPage as DatabaseViewerMainPage } from '~/pages/database-viewer/MainPage'
import { MainPage as PacketSnifferMainPage } from '~/pages/packet-sniffer/MainPage'
import { MainPage as PasswordManagerMainPage } from '~/pages/password-manager/MainPage'

export const App = () => {
  return (
    <div className="h-[420px] w-[370px] bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-center gap-4">
          <img src="./logo.png" className="h-12" alt="Dev3 Logo" />
          <p className="text-3xl font-bold">Dev3 Tools</p>
        </div>
        <div>
          <p className="text-center text-sm">Four essential tools for power users</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            component={PasswordManagerMainPage}
            className="w-full rounded border border-neutral-400/50 px-5 py-3 hover:bg-blue-500/25 dark:border-neutral-600/50 dark:bg-neutral-800"
          >
            <div className="flex items-center gap-5">
              <Lock />
              <div className="flex flex-col font-medium">
                <p>Dev3 Password Manager</p>
                <p className="text-xs font-light">Securely store and manage your passwords</p>
              </div>
            </div>
          </Link>
          <Link
            component={PacketSnifferMainPage}
            className="w-full rounded border border-neutral-400/50 px-5 py-3 hover:bg-blue-500/25 dark:border-neutral-600/50 dark:bg-neutral-800"
          >
            <div className="flex items-center gap-5">
              <Network />
              <div className="flex flex-col font-medium">
                <p>Dev3 Packet Sniffer</p>
                <p className="text-xs font-light">Analyze your network traffic</p>
              </div>
            </div>
          </Link>
          <Link
            component={DatabaseViewerMainPage}
            className="w-full rounded border border-neutral-400/50 px-5 py-3 hover:bg-blue-500/25 dark:border-neutral-600/50 dark:bg-neutral-800"
          >
            <div className="flex items-center gap-5">
              <Database />
              <div className="flex flex-col font-medium">
                <p>Dev3 Database Viewer</p>
                <p className="text-xs font-light">View and manage your browser's databases</p>
              </div>
            </div>
          </Link>
          <Link
            component={BrowserCleanerMainPage}
            className="w-full rounded border border-neutral-400/50 px-5 py-3 hover:bg-blue-500/25 dark:border-neutral-600/50 dark:bg-neutral-800"
          >
            <div className="flex items-center gap-5">
              <Rocket />
              <div className="flex flex-col font-medium">
                <p>Dev3 Browser Cleaner</p>
                <p className="text-xs font-light">Clear browser data and boost performance</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
