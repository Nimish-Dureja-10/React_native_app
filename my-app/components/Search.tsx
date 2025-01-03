import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams, usePathname } from 'expo-router'
import icons from '@/constants/icons';
import {useDebouncedCallback} from "use-debounce";

const Search = () => {

  const path = usePathname();
  const params = useLocalSearchParams<{query:string}>();
  const [search, setSearch] = useState(params.query);

  // This will make search calls only after sometime so that not after every char is typed a request is made to db which is not neccessary.
  const debouncedSearch = useDebouncedCallback((text:string)=>
      router.setParams({query:text}),500
  );

  const handleSearch = (text:string) => {
    setSearch(text);
    debouncedSearch(text);
  }
    
  return (
    <View className='flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border-primary-100 mt-5 py-2'>
      <View className='flex flex-1 flex-row items-center justify-start z-50'>
        <Image source={icons.search} className="size-5" />
        <TextInput value={search} placeholder="Search for Anything" onChangeText={handleSearch} className="text-sm font-rubik text-black-300 ml-2 flex-1" />
        <TouchableOpacity>
            <Image source={icons.filter} className="size-5" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Search