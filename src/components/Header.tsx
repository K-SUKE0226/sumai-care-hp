'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-500 bg-clip-text text-transparent">
              住まいサポートケア
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition font-medium">
              会社情報
            </Link>
            <Link href="/philosophy" className="text-gray-700 hover:text-orange-600 transition font-medium">
              理念・想い
            </Link>
            <Link href="/network" className="text-gray-700 hover:text-orange-600 transition font-medium">
              連携ネットワーク
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-orange-600 transition font-medium">
              作業実績
            </Link>
            <Link href="/contact" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition font-semibold">
              お問い合わせ
            </Link>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            aria-label="メニュー"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-500 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-6">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-lg font-semibold text-gray-800 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg transition"
              >
                トップページ
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-lg font-semibold text-gray-800 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg transition"
              >
                会社情報
              </Link>
              <Link
                href="/philosophy"
                onClick={closeMenu}
                className="text-lg font-semibold text-gray-800 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg transition"
              >
                理念・想い
              </Link>
              <Link
                href="/network"
                onClick={closeMenu}
                className="text-lg font-semibold text-gray-800 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg transition"
              >
                連携ネットワーク
              </Link>
              <Link
                href="/gallery"
                onClick={closeMenu}
                className="text-lg font-semibold text-gray-800 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg transition"
              >
                作業実績
              </Link>

              <div className="border-t border-gray-200 my-4"></div>

              <div className="text-sm font-bold text-gray-500 px-4 py-2">サービス一覧</div>
              <Link
                href="/services/seikatsu-shien"
                onClick={closeMenu}
                className="text-base text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition"
              >
                住環境整理・生活支援
              </Link>
              <Link
                href="/services/jutaku-shokai"
                onClick={closeMenu}
                className="text-base text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition"
              >
                住宅紹介・居住支援
              </Link>
              <Link
                href="/services/reuse"
                onClick={closeMenu}
                className="text-base text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition"
              >
                リユース・地域連携
              </Link>
              <Link
                href="/services/hikkoshi"
                onClick={closeMenu}
                className="text-base text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition"
              >
                福祉に寄り添う引越し支援
              </Link>
              <Link
                href="/services/hokan"
                onClick={closeMenu}
                className="text-base text-gray-700 hover:text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition"
              >
                福祉型保管サービス
              </Link>

              <div className="border-t border-gray-200 my-4"></div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="bg-gradient-to-r from-orange-600 to-rose-500 text-white text-center px-6 py-3 rounded-full font-bold hover:shadow-lg transition mt-2"
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
