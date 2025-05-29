import React from 'react'

const FindDreamJob = () => {
    const programmingLanguages = [
        "C#", "C++", "Flutter", "HTML/CSS", "Java", "JavaScript", "Kotlin", "Machine Learning", "Next.js", "Node.js", "PHP", "Python", "React", "React Native", "Ruby on Rails", "SQL", "SwiftUI", "TypeScript"
    ]
  return (
    <div className="w-[94%] my-16">
        <h1 className="text-[35px] font-bold md:text-5xl">Find your dream job</h1>
        <div className='flex mt-8 md:mt-16 md:gap-[9px] flex-wrap gap-[4px]'>
          {programmingLanguages.map((programmingLanguage, index) => (
            <div key={index} className="p-[16px] border-[1px] border-gray-200 md:p-[18px] cursor-pointer w-fit rounded-xl font-semibold">{programmingLanguage}</div>
          ))}
        </div>
    </div>
  )
}

export default FindDreamJob