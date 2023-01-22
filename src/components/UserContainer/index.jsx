import React from 'react'
import User from '../User'

export default function UserContainer() {
        const users = [
            {id:1,name:"Oksana Lench",city:"Berlin",age:34,job: "teacher", experience:true,foto:"https://avatars.mds.yandex.net/i?id=41422707633ac022ba93bb1d0c85ef7c34ce6a7e-7754586-images-thumbs&n=13"},
            {id:2,name:"Anna Lixon",city:"Amsterdam",age:21,job: "manager",experience:false,foto:"https://mixmag.io/wp-content/pics/93055/image009-98-720x720.jpg"},
            {id:3,name:"Emma Torner",city:"New York",age:56,job: "designer",experience:true,foto:"https://ireland.apollo.olxcdn.com/v1/files/m6dy9gs1het5-UA/image;s=972x972"},
            {id:4,name:"Olli Sumrey",city:"Madrid",age:18,job: "student",experience:false,foto:"https://avatars.mds.yandex.net/i?id=d2940a2a659b4f575014486da4f71ea3ec7678a0-8228018-images-thumbs&n=13"},
            {id:5,name:"Tony Storm",city:"Ansi",age:42,job: "engineer", experience:true,foto:"https://img.photolamus.com/_4ph_Cwk/x660/191542978529a18cef9dc007850265ac/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D1%82%D1%83%D1%80%D0%B0-%D0%B8%D0%B7-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B9.jpg"},
            {id:6,name:"Eddi Nolen",city:"Tokyo",age:38,job: "doctor",experience:true,foto:"https://sun9-82.userapi.com/impf/c631419/v631419961/386cb/tl5brI5vaXs.jpg?size=1100x1176&quality=96&sign=2bdbf22347c3623fe159417e128f320e&c_uniq_tag=QcPyGzB4aAyG5PqqPQcrUWbwqAAkNIBafQ0a2u6kzm0&type=album"},
            {id:7,name:"Sten Badden",city:"Odessa",age:21,job: "driver",experience:false, foto:"https://www.caricature-art.com/wp-content/uploads/2019/01/%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA-785x785.jpg"}
        ]
  return (
    <div>
      {users.map(item => <User key={item.id} {...item}/>)}
    </div>
  )
}

