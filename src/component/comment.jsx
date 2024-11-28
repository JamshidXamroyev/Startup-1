import { useState } from "react"

const Comment = () => {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")

    const sendTelegramm = (e) => {
        e.preventDefault()
        const object = { name, comment }
        const telegramTokenBot = '7410085185:AAFGWnQccU_r1VQGBuFxykh6EpozLMINIu8'
		const chatId = '6581009051'

        fetch(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: chatId,
				text: `
Name:  ${object.name}
Coment:  ${object.comment}`,
			}),
		}).finally(() => {
            setComment("")
            setName("")
        })
  }
  return (
    <div className="pl:my-40 my-20 pl:mx-16 mx-4">
        <div className="flex flex-wrap gap-5 max-pl:flex-col">
            <div className="pl:w-[32%] w-full border px-6 py-4 rounded-lg">
                <div className="flex items-center mb-6">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4"/>
                    <div>
                        <div className="text-lg font-medium text-gray-800">John Doe</div>
                        <div className="text-gray-500">2 hours ago</div>
                    </div>
                </div>
                <p className="text-lg leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem
                    nulla. Donec consequat urna a tortor sagittis lobortis.</p>
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-thumbs-up"></i> Like</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-comment-alt"></i> Reply</a>
                    </div>
                    <div class="flex items-center">
                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-flag"></i> Report</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-share-square"></i> Share</a>
                    </div>
                </div>
            </div>

            <div className="pl:w-[32%] w-full border px-6 py-4 rounded-lg">
                <div className="flex items-center mb-6">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4"/>
                    <div>
                        <div className="text-lg font-medium text-gray-800">John Doe</div>
                        <div className="text-gray-500">2 hours ago</div>
                    </div>
                </div>
                <p className="text-lg leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem
                    nulla. Donec consequat urna a tortor sagittis lobortis.</p>
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-thumbs-up"></i> Like</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-comment-alt"></i> Reply</a>
                    </div>
                    <div class="flex items-center">
                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-flag"></i> Report</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-share-square"></i> Share</a>
                    </div>
                </div>
            </div>

            <div className="pl:w-[32%] w-full border px-6 py-4 rounded-lg">
                <div className="flex items-center mb-6">
                    <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4"/>
                    <div>
                        <div className="text-lg font-medium text-gray-800">John Doe</div>
                        <div className="text-gray-500">2 hours ago</div>
                    </div>
                </div>
                <p className="text-lg leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem
                    nulla. Donec consequat urna a tortor sagittis lobortis.</p>
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-thumbs-up"></i> Like</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-comment-alt"></i> Reply</a>
                    </div>
                    <div class="flex items-center">
                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4"><i className="far fa-flag"></i> Report</a>
                        <a href="#" className="text-gray-500 hover:text-gray-700"><i className="far fa-share-square"></i> Share</a>
                    </div>
                </div>
            </div>
        </div>

        <form className="mt-8 bg-white p-4 rounded-lg shadow" onSubmit={(e) => sendTelegramm(e)}>
            <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
            <div className="mb-4">
                <label for="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            </div>
            <div className="mb-4">
                <label for="comment" className="block text-gray-700 font-medium mb-2">Comment</label>
                <textarea  value={comment} onChange={e => setComment(e.target.value)} id="comment" name="comment" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Post Comment
            </button>
        </form>
    </div>
  )
}

export default Comment