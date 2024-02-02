import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearGap = currentYear - 2024;
  return (
    <footer className="w-screen py-10 md:py-14 select-none">
      <div className="h-8 flex justify-center items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {yearGap ? `2024 - ${currentYear}` : `2024`} Jiwon Park All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer