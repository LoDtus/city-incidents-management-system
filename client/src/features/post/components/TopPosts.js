import { Button } from "antd";

// Chưa giống phong cách của newpaper, nên bỏ border đi
export default function TopPosts({ topPosts }) {
    function openGuideline() {

    }

    let posts = [];
    for (let i=0; i<10; i++) {
        posts.push(
            <Button
                className="w-full !h-[100px] mb-2 bg-white border border-gray-border rounded-md shadow-md
                duration-200 active:scale-90"
                onClick={() => openGuideline()}
            >

            </Button>
        );
    }

    return (
        <div className="flex flex-col w-full">
            <span className="font-semibold text-2xl">Top Posts</span>
            <div className="flex h-[500px]">
                <div className="basis-[80%] w-full h-full shadow-md bg-white border border-gray-border rounded-md">
                    
                </div>
                <div className="basis-[20%] h-full ml-2 overflow-y-auto">
                    {posts}
                </div>
            </div>
        </div>
    );
};