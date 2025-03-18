import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'

function GridLayout() {
    let listArticle = []
    for (let i=0; i<20; i++) {
        listArticle.push(
            <div key={i}
                className="basis-[25%] p-3">
                <button className="gridLayout_item flex flex-col justify-center">
                    <Image
                        className="gridLayout_poster w-full aspect-square rounded-md duration-200"
                        src="" alt="" />
                    <span className="text-wrap text-left font-semibold text-2xl underline duration-200">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </span>
                    <div>tag</div>
                    {/* Tac gia, luu, yeu thich */}
                    <div className="w-full flex justify-between items-center">
                        <div className="flex">
                            <div className="flex items-center">
                                <img
                                    className="rounded-full w-[35px] aspect-square"
                                    src="" alt="" />
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
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap">
            {listArticle}
        </div>
    )
}
export default GridLayout;