import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem
          title='HOME'
          Icon={<HomeIcon className='h-8 mb-1 group-hover:animate-bounce' />}
        />
        <HeaderItem
          title='TRENDING'
          Icon={
            <LightningBoltIcon className='h-8 mb-1 group-hover:animate-bounce' />
          }
        />
        <HeaderItem
          title='VERIFIED'
          Icon={
            <BadgeCheckIcon className='h-8 mb-1 group-hover:animate-bounce' />
          }
        />
        <HeaderItem
          title='COLLECTIONS'
          Icon={
            <CollectionIcon className='h-8 mb-1 group-hover:animate-bounce' />
          }
        />
        <HeaderItem
          title='SEARCH'
          Icon={<SearchIcon className='h-8 mb-1 group-hover:animate-bounce' />}
        />
        <HeaderItem
          title='ACCOUNT'
          Icon={<UserIcon className='h-8 mb-1 group-hover:animate-bounce' />}
        />
      </div>

      <Image
        src='http://links.papareact.com/ua6'
        width={200}
        height={100}
        className='object-contain'
        alt='hulu'
      />
    </header>
  )
}

export default Header
