function HeaderItem({ title, Icon }) {
  return (
    <div className='group flex flex-col items-center cursor-pointer w-12 sm:20 hover:text-white'>
      {Icon}
      <p className='tracking-widest opacity-0 group-hover:opacity-100'>
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
