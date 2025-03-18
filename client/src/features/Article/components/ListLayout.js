import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons'

function ListLayout() {
    let listArticle = []
    for (let i=0; i<20; i++) {
        listArticle.push(
            <div key={i}
                className='py-3 border-b border-gray'>
                <button className="gridLayout_item flex justify-center items-center">
                    <img
                        className="gridLayout_poster h-[30vh] mr-5 aspect-square rounded-md duration-200"
                        src="./assets/exp-ava-1.jpg" alt="" />
                    <div className='text-left'>
                        <span className="text-wrap text-left font-semibold text-2xl underline duration-200">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </span>
                        <div>tag</div>
                        <p className='text-soft-black'>
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, itaque tempore temporibus dolores quasi aperiam. Placeat, asperiores, ut a fugit laborum sed quas rem accusantium tempore consectetur optio voluptates eos."
                        </p>
                        {/* Tac gia, luu, yeu thich */}
                        <div className="w-full flex justify-between items-center">
                            <div className="flex">
                                <div className="flex items-center">
                                    <img
                                        className="rounded-full w-[35px] aspect-square"
                                        src="./assets/exp-ava.jpg" alt="" />
                                </div>
                                <div className="text-left">
                                    <div>Tác giả</div>
                                    <div>2 giờ trước</div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        )
    }

    return (
        <div className="">
            {listArticle}
        </div>
    )
}
export default ListLayout;