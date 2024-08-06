import React from 'react'
import Header from '../signin/_header'
import style from '../signin/page.module.css'
import ActivateForm from './activateForm'
import cn from '@/utils/classnames'

const Activate = () => {
  return (
    <div className={cn(
      style.background,
      'flex w-full min-h-screen',
      'sm:p-4 lg:p-8',
      'gap-x-20',
      'justify-center lg:justify-start',
    )}>
      <div className={
        cn(
          'flex w-full flex-col bg-white shadow rounded-2xl shrink-0',
          'space-between',
        )
      }>
        <Header />
        <ActivateForm />
        <div className='px-8 py-2 text-sm font-normal text-gray-500'>
              Copyright © 2023 - {new Date().getFullYear()} Cyclical, All Rights Reserved. 阿芙若科技 版权所有
        </div>
        <div className='px-8 pb-6 text-sm font-normal text-gray-500'>
              莱州市阿芙若信息网络科技有限公司 ICP备案号：
          <a href = 'https://beian.miit.gov.cn/#/Integrated/index' target='blank' rel='noopener noreferrer'>鲁ICP备2024105088号-1</a>
          <a href = 'http://www.beian.gov.cn/portal/index.do' target='blank' rel='noopener noreferrer'>       鲁公网安备37068302000567号</a>
        </div>
      </div>
    </div>
  )
}

export default Activate
