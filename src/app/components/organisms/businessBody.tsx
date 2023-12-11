"use client";

import { Store } from "../../../../types";
import { usePathname } from "next/navigation";
import PromptCard from "../molecules/promptCard";
import ProductCard from "../molecules/productCard";
import { ActionButton } from "../atoms/actionButton";
import SocialLink from "../molecules/socialLink";
import {
  EmailIcon,
  GlobeIcon,
  FacebookIcon,
  PhoneIcon,
  InstagramIcon,
  PinIcon,
} from "../atoms/icons";
import Image from "next/image";
import Card from "../atoms/card";

export default function BusinessBody({
  allBusinesses,
}: {
  allBusinesses: Store[];
}) {
  const pathname = usePathname();
  const businessId = pathname.split("/")[2];
  const business = allBusinesses.find(
    (business) => business.store_id === businessId
  );
  const hasProducts =
    business?.product_1_img ||
    business?.product_2_img ||
    business?.product_3_img;

  return business ? (
    <div className="text-customDarkGreen">
      <Image
        src={business.img_splash}
        alt="Business image"
        width={500}
        height={200}
        className="bg-customBlue w-full object-cover h-96 border-b-[1.5px] border-customDarkGreen"
      />
      <div className="grid md:grid-cols-12 gap-4 mx-8 md:mx-0">
        <div className="md:col-start-2 md:col-span-4">
          <Image
            src={business.img_profile}
            alt="Business profile"
            width={200}
            height={200}
            className=" w-80 h-80 bg-customDarkGreen rounded-full object-cover -mt-28 border-[1.5px] border-customDarkGreen z-10"
          />
          <div className="mt-4">
            <Card>
              <div className="grid grid-cols-1">
                <h1 className="text-lg font-bold">{business.store_name}</h1>
                <h1 className="font-medium">{"By: " + business.owner_name}</h1>
              </div>
              <div className="border-t border-customDarkGreen my-2"></div>
              <div className="flex flex-row gap-2">
                <p>
                  {business.address
                    ? "Located at " + business.address
                    : "Located in " + business.location}
                  .{" "}
                  {business.store_name +
                    " falls under the category of " +
                    business.store_category.toLowerCase()}
                  .{" "}
                  {business.store_start_year
                    ? "Started in " + business.store_start_year + "."
                    : null}
                </p>
              </div>

              <div className="border-t border-customDarkGreen my-2"></div>
              <SocialLink link={business.website} icon={<GlobeIcon />} />
              <SocialLink
                link={business.email}
                isLink={false}
                icon={<EmailIcon />}
              />
              <SocialLink
                isLink={false}
                link={business.phone_number}
                icon={<PhoneIcon />}
              />
              <SocialLink
                link={business.facebook}
                icon={<FacebookIcon />}
                alternativeText="Facebook"
              />
              <SocialLink
                link={business.instagram}
                icon={<InstagramIcon />}
                alternativeText="Instagram"
              />
            </Card>
          </div>
        </div>

        {business.short_summary && business.extended_summary ? (
          <div className="md:col-start-6 md:col-span-6 sm:col-span-full md:-mt-28">
            <Card>
              <div className="font-bold pb-2 text-2xl">
                {business.short_summary}
              </div>
              <div>{business.extended_summary}</div>
              {business.store_message ? (
                <div className="bg-customDarkGreen flex-grow mt-8 rounded-2xl">
                  <p className="text-customWhite p-4 font-medium">
                    Message from {business.owner_name}:
                  </p>
                  <div className="border-t border-customWhite"></div>
                  <h1 className="text-customWhite p-8 font-bold text-2xl ">
                    {business.store_message}
                  </h1>
                </div>
              ) : null}
            </Card>
          </div>
        ) : (
          <div className="md:col-start-6 md:col-span-6 sm:col-span-full md:mt-28">
            <Card>
              <p>
                Unable to load business details. Please return back to all
                businesses.
              </p>
            </Card>
          </div>
        )}
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-2 col-span-10">
          {business.img_1 ? (
            <Image
              src={business.img_1}
              alt=""
              width={500}
              height={200}
              className="bg-customBlue mt-4 w-full object-cover h-96 border-[1.5px] border-customDarkGreen rounded-2xl"
            />
          ) : null}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:my-4 mt-4">
            {business.prompt_1 && business.prompt_answer_1 ? (
              <PromptCard
                question={business.prompt_1}
                answer={business.prompt_answer_1}
              />
            ) : null}
            {business.prompt_2 && business.prompt_answer_2 ? (
              <PromptCard
                question={business.prompt_2}
                answer={business.prompt_answer_2}
              />
            ) : null}
            {business.prompt_3 && business.prompt_answer_3 ? (
              <PromptCard
                question={business.prompt_3}
                answer={business.prompt_answer_3}
              />
            ) : null}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {business.img_2 ? (
              <Image
                src={business.img_2}
                alt="Business image"
                width={200}
                height={200}
                className="bg-customBlue object-cover w-full h-96 border-[1.5px] border-customDarkGreen rounded-2xl"
              />
            ) : null}
            {business.img_3 ? (
              <Image
                src={business.img_3}
                alt="Business image"
                width={200}
                height={200}
                className="bg-customBlue object-cover w-full h-96 border-[1.5px] border-customDarkGreen rounded-2xl"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Unable to load business</h1>
    </div>
  );
}
