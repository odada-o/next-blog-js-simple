import React from 'react'

const EditPage = () => {
  return (
    <div className='container mx-auto'>
      <h2 className='sr-only'>포스트 글쓰기</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 h-screen'>
        {/* 제목 */}
        <div>
          <label htmlFor="tit" className='sr-only'>제목</label>
          <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="tit" id="tit" 
          placeholder='제목을 입력하세요.'           
          className='text-5xl font-black py-5 border-b-4 border-gray-400 w-full' />
        </div>

        {/* 본문 */}
        <div className='flex-1'>
          <label htmlFor="cont" className='sr-only'>내용</label>
          <textarea 
          name="cont" id="cont" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='당신의 이야기를 적어보세요.' 
          className='w-full h-full text-2xl'></textarea>
        </div>

        {/* 확인, 취소 */}
        <div className='border-t-2 border-gray-300 flex justify-end'>
          <button className='p-7 bg-gray-400'>취소</button>
          <button type='submit' className='p-7 bg-purple-400'>등록</button>
        </div>
      </form>
    </div>
  )
}

export default EditPage