"use client";
import { Lora, Noto_Serif } from 'next/font/google';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeart_reg, faBookmark as faBookmark_reg } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeart_solid, faBookmark as faBookmark_solid, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { Button, Image } from "antd";
import { useState } from 'react';

export const lora = Lora({
    subsets: ['latin', 'vietnamese'],
});
export const notoSerif = Noto_Serif({
    subsets: ['latin', 'vietnamese'],
});

export default function GuidelineDetails() {
    const content = (
        <div>
            <p className={`${lora.className} font-normal tracking-wide mb-4`}>
            It can often be challenging to keep track of everything in Donald Trump’s US; the executive orders, the changes to decades-long protocols, the draconian legislation, the abandonment of established policies – and just the utter chaos.
            That in itself is part of the Trump administration’s strategy – throw everything at us all at once to see what sticks and what they can get away with. There is, in fact, so much happening simultaneously that it is virtually impossible to tackle it all.
            That is why efforts on the ground, in our communities and in our neighbourhoods are as vital as they ever were. Just liked the grassroots civil rights movement of the 1960s forced change at the top, now too is a moment when our work can and must push back against Trump and a far right that is strategically dismantling every measure of progress. We must resist in order to exist.
            </p>
            <p className={`${lora.className} font-normal tracking-wide mb-4`}>When Trump was being sworn into office on 20 January, my organisation, National Action Network, held a massive rally at the historic African Methodist Episcopal church in Washington DC. It was important for us to gather at this church, at a location that has long served as a place of refuge and comfort during dark times. As we once again find ourselves caught in the winds of uncertainty, chaos and injustice, we must organise, strategise and execute our own plan of action in order to save any measure of advancement and our hard-won civil rights.
            Despite the cruelty emanating from the Oval Office, there is a lot that can be done at the state and local level, and in our communities. In fact, state laws and policies often affect people more directly than federal policies at times. Therefore engaging state- and locally elected officials is vital – let them hear from you. After all, they are in office to serve the people and serve our interests, so our interests must be known. Whether it’s women’s reproductive rights, voting rights, LGBTQ+ rights, protecting immigrants, or any other issue, our concerns must be addressed. This is not a time for sitting back and watching helplessly; there is a lot that we can and must do to peacefully fight back.
            Here’s how we can push back</p>
            <p className={`${lora.className} font-normal tracking-wide mb-4`}>One of the first executive orders that Trump signed in office was to eliminate diversity, equity and inclusion (DEI) programmes in federal agencies. Many corporations, such as Target, McDonald’s, Walmart and others, unfortunately have fallen in line and capitulated to pressure from the right to either scale back significantly their DEI policies, or eliminate them altogether. It is why I announced on Martin Luther King Day that National Action Network will lead a strategic boycott of two companies that have dropped their DEI commitments.
            We’ve put together a group that is engaged in a 90-day study of which corporations have abandoned their DEI initiatives the most – and how much of their consumer base is in the Black community and how much of our wealth they receive. We will announce which companies we’re strategically boycotting at National Action Network’s upcoming annual conference, held from 2 to 5 April at the Sheraton Times Square hotel in New York City.
            Not only will we boycott specific entities that don’t respect us, but we are also simultaneously supporting those who stand with us.
            <p className={`${lora.className} font-normal tracking-wide mb-4`}></p>After retail giant Costco announced that it will remain firm in its DEI policies, I led hundreds of people in a “buy-cott” at a Costco in East Harlem. That was followed by similar buy-cotts at Costco locations in New Jersey, Los Angeles and all over the south. It is vital to proactively support those who support us. We must remember why we have DEI in the first place – in order to rectify institutional policies that purposefully excluded us. Trump and other businesses may attack DEI, but they cannot dictate where we spend our hard-earned dollars. Our actions will speak for us even as they try to silence us.
            This is just one example of how we can push back individually and collectively during these challenging and dark times. There is much that we can do at the local community level to protect ourselves and our neighbours, and speak out where needed. When they cut social services, help those less fortunate and help people understand how they can navigate an increasingly confusing system. When they continue to eliminate DEI and voting protections, make sure people are empowered to know how to weather the storms – and how to still participate in the electoral process.
            When they go after reproductive rights, help women know where and how they can seek the care they may need and </p>
            <p className={`${lora.className} font-normal tracking-wide mb-4`}>stay safe. When they target undocumented immigrants, make sure they know their rights. When they target the LGBTQ+ community, stand with them and continue to push for greater equality and inclusion. Over these next four years, it will be incumbent upon all of us to unite as one because the vile attacks against us are resting on a theory of divide and conquer.
            During the great civil rights movement, Black Americans and our allies organised, marched, boycotted and put enough pressure on the White House to bring about substantive change that was then codified into law. People didn’t just give us our rights out of the kindness of their hearts; we demanded them. It was pressure from the grassroots that then forced elected officials to act. We once again find ourselves living in an era where our work, our voices and our actions can and must speak volumes and bring about a nation where all of us are valued, protected and afforded the same rights and liberties.
            Trump and the right are counting on us to be defeated or deflated; we must strategise and push back because there are more of us than them. Those of us who care about diversity, inclusion, equality and justice far outweigh those working to destroy it. We just need to use our power effectively – and as one.
            </p>
        </div>
    );

    const [ liked, setLiked ] = useState(false);
    const [ saved, setSaved ] = useState(false);

    function likeGuideline() {
        setLiked(!liked);
    }

    function saveGuideline() {
        setSaved(!saved);
    }


    // https://www.theguardian.com/commentisfree/2025/mar/21/donald-trump-usa-europe-britain-opening-keir-starmer
    // tac gia, so liked, save, comment, ngay chinh sua, ngay dang, save, liked, comment, share, tag, summary
    // Thêm một vài đường kẻ ngang ngăn cách    
    // Thêm lượt xem, lượt xem được tính +1 nếu người dùng ở lại trang trên 30s
    // Phần tác giả có thể chuyển xuống dưới cũng được, nhưng phần số lượng like, nút save... thì phải ở bên trên
    // Sử dụng thêm một Ckeditor khác hoặc dùng một thư viện an toàn để để hiển thị (html) về cả detail của bài viết và cả cho preview bài viết
    return (
        <div className="w-full min-h-[100vh] flex">
            <div className='basis-[5%]'></div>
            <div className='basis-[70%]'>
                <div>
                    <Button className='border rounded-md mr-1 px-5'>Notification</Button>
                    <Button className='border rounded-md mr-1 px-5'>Interview</Button>
                    <Button className='border rounded-md mr-1 px-5'>Nature</Button>
                </div>
                <h1 className={`${notoSerif.className} font-bold text-4xl`}>
                    Trump is abandoning democracy and freedom. That creates an opening for Europe – and Britain
                </h1>
                <span className='font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam nesciunt tempora in maiores beatae qui aut aliquid. Necessitatibus qui tempora libero velit repudiandae labore perferendis? Adipisci obcaecati voluptatibus eum sint?</span>
                <div className='flex flex-col items-center'>
                    <div className='!rounded-lg !overflow-hidden'>
                        <Image
                            className='w-full h-fit rounded-lg'
                            src="https://i.guim.co.uk/img/media/25ff336b3beb6792a897bb621f33346b01460a52/0_81_6835_4103/master/6835.jpg?width=1900&dpr=2&s=none&crop=none"
                            alt=""
                        />
                    </div>
                    <span className='font-light text-sm text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum accusantium quibusdam aliquid voluptas expedita temporibus tempore quidem ipsa error eaque, pariatur nemo. Cupiditate adipisci ab modi vel unde ea culpa.</span>
                    <div className='w-full flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div className='w-[50px] rounded-full overflow-hidden'>
                                <img
                                    src="https://i.pinimg.com/originals/c5/79/db/c579db725a63ac384300412aa75beb12.jpg"
                                    alt="Nguyen Trung Long"
                                />
                            </div>
                            <div>
                                <span>By Nguyen Trung Long</span>
                                <div className='flex'>
                                    <span>Published at 01/01/2025</span>
                                    <span>|</span>
                                    <span>Updated at 22/02/2025</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <Button
                                className='rounded-full'
                                color={liked ? 'danger' : 'black' }
                                variant='outlined'
                                onClick={() => likeGuideline()}
                            >
                                <FontAwesomeIcon className={liked ? 'hidden' : ''} icon={faHeart_reg} />
                                <FontAwesomeIcon className={liked ? '' : 'hidden'} icon={faHeart_solid} />
                                <span className='font-semibold'>1.2M Likes</span>
                            </Button>
                            <Button
                                className='ml-1'
                                onClick={() => saveGuideline()}
                            >
                                <FontAwesomeIcon className={saved ? 'hidden' : ''} icon={faBookmark_reg} />
                                <FontAwesomeIcon className={saved ? '' : 'hidden'} icon={faBookmark_solid} />
                            </Button>
                            <Button
                                className='ml-1'
                            >
                                <FontAwesomeIcon icon={faShareNodes} />
                            </Button>
                            <Button
                                className='ml-1'
                            >
                                <FontAwesomeIcon icon={faShareNodes} />
                                <span>Translate</span>
                            </Button>
                        </div>
                    </div>
                    <div className='flex bg-white-background w-[70%]'>
                        {content}
                    </div>
                </div>
            </div>
            <div className='basis-[30%] ml-2'>
                Recommended
            </div>
            <div className='basis-[5%]'></div>
        </div>
    );
};