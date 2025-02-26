"use client";

import React, { useEffect, useState, Suspense } from "react";
import "./style.css";
import { useSearchParams } from "next/navigation";
import { MdNavigateNext, MdArrowBackIos } from "react-icons/md";

const NextJsBookViewer = () => {
  const [leftPage, setLeftPage] = useState("");
  const [rightPage, setRightPage] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [backAnimate, setBackAnimate] = useState(false);
  const [width, setWidth] = useState(1000);

  const searchParams = useSearchParams();
  const param1 = searchParams.get("val1");
  const param2 = searchParams.get("val2");

  const fetchData = async (param, page, setPage) => {
    try {
      const response = await fetch(`/api/data?book_name=${encodeURIComponent(param)}&pageNo=${encodeURIComponent(page)}`);
      const res = await response.json();
      setPage(res.book_data || "No Data");
    } catch (error) {
      console.error("Error fetching data:", error);
      setPage("Error loading page");
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    fetchData(param1, pageNo, setLeftPage);
    fetchData(param2, pageNo + 1, setRightPage);
  }, [pageNo, animate]);

  const nextPage = () => {
    setTimeout(() => setPageNo(pageNo + 2), 1500);
    setAnimate(true);
  };

  const previousPage = () => {
    setTimeout(() => setPageNo(pageNo - 2), 1500);
    setBackAnimate(true);
  };

  const animationEnd = () => {
    setAnimate(false);
    setBackAnimate(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {width > 490 ? (
        <div className="con">
          <div className="mybook">
            <div className="page1">
              {param1}
              <pre dangerouslySetInnerHTML={{ __html: leftPage }} />
            </div>
            <div onAnimationEnd={animationEnd} className={`page2 ${animate ? "animate" : ""} ${backAnimate ? "previous_page" : ""}`}>
              {param2}
              <pre dangerouslySetInnerHTML={{ __html: rightPage }} />
            </div>
          </div>
          <div className="buttons">
            <MdArrowBackIos onClick={previousPage} style={{ fontSize: "30px" }} />
            <div>{pageNo}</div> <div>mark</div> <div>{pageNo + 1}</div>
            <MdNavigateNext onClick={nextPage} style={{ fontSize: "50px" }} />
          </div>
        </div>
      ) : (
        <div className="view_mob_con">
          <div className="mob_mybook">
            <div className="mob_page1">
              {param1}
              <pre dangerouslySetInnerHTML={{ __html: leftPage }} />
            </div>
            <div onAnimationEnd={animationEnd} className={`mob_page2 ${animate ? "animate" : ""} ${backAnimate ? "previous_page" : ""}`}>
              {param2}
              <pre dangerouslySetInnerHTML={{ __html: rightPage }} />
            </div>
          </div>
          <div className="mob_buttons">
            <MdArrowBackIos onClick={previousPage} style={{ fontSize: "20px" }} />
            <div>{pageNo}</div> <div>mark</div> <div>{pageNo + 1}</div>
            <MdNavigateNext onClick={nextPage} style={{ fontSize: "40px" }} />
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default NextJsBookViewer;
