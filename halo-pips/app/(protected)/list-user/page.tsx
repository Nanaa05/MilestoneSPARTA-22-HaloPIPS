'use client'
import { useState } from 'react'
import { Search, MessageSquare, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const warga = Array(27).fill(null).map((_, i) => ({
  id: i + 1,
  year: 2020 + Math.floor(i / 9),
  image: `/placeholder.svg?height=100&width=100&text=Cat ${i + 1}`
}))

export default function CatChat() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-HMIF-600 via-HMIF-450 to-HMIF-300">
      <header className="bg-HMIF-600 p-4">
        <div className="w-8 h-5 flex flex-col justify-between">
          <div className="h-0.5 bg-white"></div>
          <div className="h-0.5 bg-white"></div>
          <div className="h-0.5 bg-white"></div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8 text-HMIF-100">
          Ayo berbicara dengan Mahasiswa Jurusan (^-^~)
        </h1>

        <div className="flex gap-4 mb-8">
          <Select>
            <SelectTrigger className="w-[180px] bg-lime-200 text-green-800 border-green-600">
              <SelectValue placeholder="Filter By Angkatan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex-grow relative">
            <Input
              type="text"
              placeholder="Search By Name/NIM"
              className="w-full pl-10 pr-4 py-2 bg-lime-200 text-green-800 border-green-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-800" size={20} />
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <MessageSquare className="mr-2" size={20} />
            Chat
          </Button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4">
          {warga.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center">
              <img
                src={cat.image}
                alt={`Cat ${cat.id}`}
                className="w-20 h-20 rounded-full object-cover mb-2"
              />
              <span className="text-xs text-green-900">{cat.year}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}