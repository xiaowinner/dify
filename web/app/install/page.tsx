import React from 'react'
import Header from '../signin/_header'
import style from '../signin/page.module.css'
import InstallForm from './installForm'
import classNames from '@/utils/classnames'

const Install = () => {
  return (
    <div className={classNames(
      style.background,
      'flex w-full min-h-screen',
      'p-4 lg:p-8',
      'gap-x-20',
      'justify-center lg:justify-start',
    )}>
      <div className={
        classNames(
          'flex w-full flex-col bg-white shadow rounded-2xl shrink-0',
          'md:w-[608px] space-between',
        )
      }>
        <Header />
        <InstallForm />
        <div className='px-8 py-2 text-sm font-normal text-gray-500'>
          Copyright © 2023 - {new Date().getFullYear()} Cyclical, All Rights Reserved. 阿芙若科技 版权所有
        </div>
        <div className='px-8 pb-6 text-sm font-normal text-gray-500'>
          莱州市阿芙若信息网络科技有限公司 ICP备案号：
          <a href = 'https://beian.miit.gov.cn/#/Integrated/index' target='blank' rel='noopener noreferrer'>鲁ICP备2024105088号-1</a>
        </div>
      </div>
    </div>
  )
}

export default Install
