import { Link } from 'react-chrome-extension-router'

import { Database, Lock, Network, Rocket } from 'lucide-react'
import { BrowserCleanerMainPage } from './components/extensions/browser-cleaner/pages/MainPage'
import DatabaseViewer from './components/extensions/database-viewer/App'
import PacketSniffer from './components/extensions/packet-sniffer/App'
import { MainPage } from './components/extensions/password-manager/pages/MainPage'

export const App = () => {
  return (
    // 800x600 px is the maximum popup size for Chrome extensions
    <div className="h-[420px] w-[370px] bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-4 items-center justify-center">
          <img src="./logo.png" className="h-12" alt="" />
          <p className="text-3xl font-bold">Dev3 Tools</p>
        </div>
        <div>
          <p className="text-center text-sm">Four essential tools for power users</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            component={MainPage}
            className="bg-neutral-800 hover:bg-neutral-800/75 px-5 py-3 rounded w-full"
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
            component={PacketSniffer}
            className="bg-neutral-800 hover:bg-neutral-800/75 px-5 py-3 rounded w-full"
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
            component={DatabaseViewer}
            className="bg-neutral-800 hover:bg-neutral-800/75 px-5 py-3 rounded w-full"
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
            className="bg-neutral-800 hover:bg-neutral-800/75 px-5 py-3 rounded w-full"
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
