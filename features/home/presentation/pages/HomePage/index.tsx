import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DefaultLayout from "@layouts/default";

import TitleWithLink from "@libs/presentation/components/titles/TitleWithLink";
import MainSlider from "@features/home/presentation/components/MainSlider";
import CompaniesSlider from "@features/home/presentation/components/OrganizationsSlider";
import CategoryBar from "@features/home/presentation/components/CategoryBar";
import VacancySlider from "@libs/presentation/components/cards/VacancySlider";

import { useTranslation } from "next-i18next";
import { useAppDispatch, useAppSelector } from "@core/store";

import CardsList from "@libs/presentation/components/cards/CardsList";
import { Lang } from "@core/store/global";
import { getHomeData } from "@features/home/presentation/store/homePageSlice";

import BlurImage from "@libs/presentation/components/elements/BlurImage";
import OGPMeta from "@libs/presentation/components/elements/OGPMeta";

import styles from "./HomePage.module.scss";
import { Product } from "@libs/domain/model/product";
import { VacancyShort } from "@libs/domain/model/vacancy";
import { Service } from "@libs/domain/model/service";
import { Category } from "@libs/domain/model/category";
import { ImgExporter } from "@core/helpers/ImgExporter";

function HomePage() {
  const { Icons, blob } = ImgExporter;

  const {
    homeData: { companies, products, services, vacancies, banners, slides, categories },
    loading
  } = useAppSelector((state) => state.home);
  const { t } = useTranslation(["catalog/homepage", "catalog/categories", "common"]);

  const { locale } = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHomeData(locale as Lang));
  }, [dispatch, locale]);

  const fakeHomeBanner = [
    {
      id: 1,
      image: {
        desktop: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png",
        mobile: "https://example.com",
        blurHash: "",
        currentImage: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
      },
      url: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
    },
    {
      id: 2,
      image: {
        desktop: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png",
        mobile: "https://example.com",
        blurHash: "",
        currentImage: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
      },
      url: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
    },
    {
      id: 3,
      image: {
        desktop: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png",
        mobile: "https://example.com",
        blurHash: "",
        currentImage: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
      },
      url: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
    }
  ];

  const fakeHomeSlides = [
    {
      id: 1,
      image: {
        desktop: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png",
        mobile: "https://example.com",
        blurHash: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
        currentImage: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
      },
      url: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
    },
    {
      id: 2,
      image: {
        desktop: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png",
        mobile: "https://example.com",
        blurHash: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
        currentImage: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
      },
      url: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
    },
    {
      id: 3,
      image: {
        desktop: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png",
        mobile: "https://example.com",
        blurHash: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
        currentImage: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
      },
      url: "https://web.tbuy.am/_next/static/media/NoPath%20-%20Copy%20(5).daf94e06.png"
    }
  ];

  const fakeProducts: Product[] = [
    new Product({
      id: 1,
      title: "Product 1",
      images: [
        {
          original:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurHash:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      addedToFavorite: false,
      addedToCompare: true,
      company: { id: 101, name: "Company A", logo: "" },
      price: 50
      // discountPrice: 40,
      // discount: 20,
    }),
    new Product({
      id: 2,
      title: "Product 2",
      images: [
        {
          original:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurHash:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      addedToFavorite: true,
      addedToCompare: false,
      company: { id: 102, name: "Company B", logo: "" },
      price: 75
      // discountPrice: 60,
      // discount: 20,
    }),
    // Add more products as needed
    new Product({
      id: 3,
      title: "Product 3",
      images: [
        {
          original:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurHash:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      addedToFavorite: true,
      addedToCompare: false,
      company: { id: 102, name: "Company B", logo: "" },
      price: 75
      // discountPrice: 60
      // discount: 20,
    }),
    new Product({
      id: 4,
      title: "Product 4",
      images: [
        {
          original:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurHash:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      addedToFavorite: true,
      addedToCompare: false,
      company: { id: 102, name: "Company B", logo: "" },
      price: 75
      // discountPrice: 60
      // discount: 20,
    }),
    new Product({
      id: 4,
      title: "Product 4",
      images: [
        {
          original:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurHash:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      addedToFavorite: true,
      addedToCompare: false,
      company: { id: 102, name: "Company B", logo: "" },
      price: 75
      // discountPrice: 60
      // discount: 20,
    })
  ];

  const fakeVacansy: VacancyShort[] = [
    new VacancyShort({
      id: 1,
      title: "Product 1",
      shortDesc: "hello",
      location: "Masis",
      date: "13 Մարտ 2024",
      company: {
        id: 101,
        name: "Company A",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////85+b97ez/+vrxgHj1oJvqAADrFwDxfHXzjof+9/bvW1DtSjzsNCPrHgDyg3vsOCfrIwfuU0ftPS7sKxbsMB3yiILsLRr4wb72raj729n84+H2qaXuTkHwZlv5ycb60c7YnRLdAAAAm0lEQVR4Ad3JhQ2AUAxF0eLufNz2n5K+psFG4EYqh36YZV9Zzsdczw80P4zilyUpeUEm5QWF5aWwqiZWNXKrRhXWGkbRvCPGtleFZUAoDJj1pahTt5kgVAzIavNmZ/2Fw3ihySescdkrDkHACmSbiUSbXnDwsyxYBC+DtoxDkGVQYGUJqK5iqmGgproNfq75XjHTK2c/rnabftcJGa8LyUwUCQcAAAAASUVORK5CYII="
      }
    }),
    new VacancyShort({
      id: 2,
      title: "Product 1",
      shortDesc: "hello",
      location: "Masis",
      date: "13 Մարտ 2022",
      company: {
        id: 101,
        name: "Company A",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////85+b97ez/+vrxgHj1oJvqAADrFwDxfHXzjof+9/bvW1DtSjzsNCPrHgDyg3vsOCfrIwfuU0ftPS7sKxbsMB3yiILsLRr4wb72raj729n84+H2qaXuTkHwZlv5ycb60c7YnRLdAAAAm0lEQVR4Ad3JhQ2AUAxF0eLufNz2n5K+psFG4EYqh36YZV9Zzsdczw80P4zilyUpeUEm5QWF5aWwqiZWNXKrRhXWGkbRvCPGtleFZUAoDJj1pahTt5kgVAzIavNmZ/2Fw3ihySescdkrDkHACmSbiUSbXnDwsyxYBC+DtoxDkGVQYGUJqK5iqmGgproNfq75XjHTK2c/rnabftcJGa8LyUwUCQcAAAAASUVORK5CYII="
      }
    }),
    // Add more products as needed
    new VacancyShort({
      id: 3,
      title: "Product 1",
      shortDesc: "hello",
      location: "Masis",
      date: "13 Մարտ 2022",
      company: {
        id: 101,
        name: "Company A",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////85+b97ez/+vrxgHj1oJvqAADrFwDxfHXzjof+9/bvW1DtSjzsNCPrHgDyg3vsOCfrIwfuU0ftPS7sKxbsMB3yiILsLRr4wb72raj729n84+H2qaXuTkHwZlv5ycb60c7YnRLdAAAAm0lEQVR4Ad3JhQ2AUAxF0eLufNz2n5K+psFG4EYqh36YZV9Zzsdczw80P4zilyUpeUEm5QWF5aWwqiZWNXKrRhXWGkbRvCPGtleFZUAoDJj1pahTt5kgVAzIavNmZ/2Fw3ihySescdkrDkHACmSbiUSbXnDwsyxYBC+DtoxDkGVQYGUJqK5iqmGgproNfq75XjHTK2c/rnabftcJGa8LyUwUCQcAAAAASUVORK5CYII="
      }
    }),
    new VacancyShort({
      id: 4,
      title: "Product 1",
      shortDesc: "hello",
      location: "Masis",
      date: "13 Մարտ 2022",
      company: {
        id: 101,
        name: "Company A",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////85+b97ez/+vrxgHj1oJvqAADrFwDxfHXzjof+9/bvW1DtSjzsNCPrHgDyg3vsOCfrIwfuU0ftPS7sKxbsMB3yiILsLRr4wb72raj729n84+H2qaXuTkHwZlv5ycb60c7YnRLdAAAAm0lEQVR4Ad3JhQ2AUAxF0eLufNz2n5K+psFG4EYqh36YZV9Zzsdczw80P4zilyUpeUEm5QWF5aWwqiZWNXKrRhXWGkbRvCPGtleFZUAoDJj1pahTt5kgVAzIavNmZ/2Fw3ihySescdkrDkHACmSbiUSbXnDwsyxYBC+DtoxDkGVQYGUJqK5iqmGgproNfq75XjHTK2c/rnabftcJGa8LyUwUCQcAAAAASUVORK5CYII="
      }
    }),
    new VacancyShort({
      id: 5,
      title: "Product 1",
      shortDesc: "hello",
      location: "Masis",
      date: "13 Մարտ 2022",
      company: {
        id: 101,
        name: "Company A",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////85+b97ez/+vrxgHj1oJvqAADrFwDxfHXzjof+9/bvW1DtSjzsNCPrHgDyg3vsOCfrIwfuU0ftPS7sKxbsMB3yiILsLRr4wb72raj729n84+H2qaXuTkHwZlv5ycb60c7YnRLdAAAAm0lEQVR4Ad3JhQ2AUAxF0eLufNz2n5K+psFG4EYqh36YZV9Zzsdczw80P4zilyUpeUEm5QWF5aWwqiZWNXKrRhXWGkbRvCPGtleFZUAoDJj1pahTt5kgVAzIavNmZ/2Fw3ihySescdkrDkHACmSbiUSbXnDwsyxYBC+DtoxDkGVQYGUJqK5iqmGgproNfq75XjHTK2c/rnabftcJGa8LyUwUCQcAAAAASUVORK5CYII="
      }
    })
  ];

  const fakeService: Service[] = [
    new Service({
      id: 1,
      title: "Product 1",
      images: [
        {
          original:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurHash: ""
        }
      ],
      addedToFavorite: false,
      addedToCompare: false,
      company: {
        id: 101,
        name: "Company A",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////85+b97ez/+vrxgHj1oJvqAADrFwDxfHXzjof+9/bvW1DtSjzsNCPrHgDyg3vsOCfrIwfuU0ftPS7sKxbsMB3yiILsLRr4wb72raj729n84+H2qaXuTkHwZlv5ycb60c7YnRLdAAAAm0lEQVR4Ad3JhQ2AUAxF0eLufNz2n5K+psFG4EYqh36YZV9Zzsdczw80P4zilyUpeUEm5QWF5aWwqiZWNXKrRhXWGkbRvCPGtleFZUAoDJj1pahTt5kgVAzIavNmZ/2Fw3ihySescdkrDkHACmSbiUSbXnDwsyxYBC+DtoxDkGVQYGUJqK5iqmGgproNfq75XjHTK2c/rnabftcJGa8LyUwUCQcAAAAASUVORK5CYII="
      }
    }),
    new Service({
      id: 2,
      title: "Product 1",
      images: [
        {
          original:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurHash: ""
        }
      ],
      addedToFavorite: false,
      addedToCompare: false,
      company: {
        id: 101,
        name: "Company A",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////85+b97ez/+vrxgHj1oJvqAADrFwDxfHXzjof+9/bvW1DtSjzsNCPrHgDyg3vsOCfrIwfuU0ftPS7sKxbsMB3yiILsLRr4wb72raj729n84+H2qaXuTkHwZlv5ycb60c7YnRLdAAAAm0lEQVR4Ad3JhQ2AUAxF0eLufNz2n5K+psFG4EYqh36YZV9Zzsdczw80P4zilyUpeUEm5QWF5aWwqiZWNXKrRhXWGkbRvCPGtleFZUAoDJj1pahTt5kgVAzIavNmZ/2Fw3ihySescdkrDkHACmSbiUSbXnDwsyxYBC+DtoxDkGVQYGUJqK5iqmGgproNfq75XjHTK2c/rnabftcJGa8LyUwUCQcAAAAASUVORK5CYII="
      }
    }),
    // Add more products as needed
    new Service({
      id: 3,
      title: "Product 1",
      images: [
        {
          original:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurHash: ""
        }
      ],
      addedToFavorite: false,
      addedToCompare: false,
      company: {
        id: 101,
        name: "Company A",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////85+b97ez/+vrxgHj1oJvqAADrFwDxfHXzjof+9/bvW1DtSjzsNCPrHgDyg3vsOCfrIwfuU0ftPS7sKxbsMB3yiILsLRr4wb72raj729n84+H2qaXuTkHwZlv5ycb60c7YnRLdAAAAm0lEQVR4Ad3JhQ2AUAxF0eLufNz2n5K+psFG4EYqh36YZV9Zzsdczw80P4zilyUpeUEm5QWF5aWwqiZWNXKrRhXWGkbRvCPGtleFZUAoDJj1pahTt5kgVAzIavNmZ/2Fw3ihySescdkrDkHACmSbiUSbXnDwsyxYBC+DtoxDkGVQYGUJqK5iqmGgproNfq75XjHTK2c/rnabftcJGa8LyUwUCQcAAAAASUVORK5CYII="
      }
    }),
    new Service({
      id: 4,
      title: "Product 1",
      images: [
        {
          original:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurHash: ""
        }
      ],
      addedToFavorite: false,
      addedToCompare: false,
      company: {
        id: 101,
        name: "Company A",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////85+b97ez/+vrxgHj1oJvqAADrFwDxfHXzjof+9/bvW1DtSjzsNCPrHgDyg3vsOCfrIwfuU0ftPS7sKxbsMB3yiILsLRr4wb72raj729n84+H2qaXuTkHwZlv5ycb60c7YnRLdAAAAm0lEQVR4Ad3JhQ2AUAxF0eLufNz2n5K+psFG4EYqh36YZV9Zzsdczw80P4zilyUpeUEm5QWF5aWwqiZWNXKrRhXWGkbRvCPGtleFZUAoDJj1pahTt5kgVAzIavNmZ/2Fw3ihySescdkrDkHACmSbiUSbXnDwsyxYBC+DtoxDkGVQYGUJqK5iqmGgproNfq75XjHTK2c/rnabftcJGa8LyUwUCQcAAAAASUVORK5CYII="
      }
    }),
    new Service({
      id: 5,
      title: "Product 1",
      images: [
        {
          original:
            "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800",
          blurHash: ""
        }
      ],
      addedToFavorite: false,
      addedToCompare: false,
      company: {
        id: 101,
        name: "Company A",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////85+b97ez/+vrxgHj1oJvqAADrFwDxfHXzjof+9/bvW1DtSjzsNCPrHgDyg3vsOCfrIwfuU0ftPS7sKxbsMB3yiILsLRr4wb72raj729n84+H2qaXuTkHwZlv5ycb60c7YnRLdAAAAm0lEQVR4Ad3JhQ2AUAxF0eLufNz2n5K+psFG4EYqh36YZV9Zzsdczw80P4zilyUpeUEm5QWF5aWwqiZWNXKrRhXWGkbRvCPGtleFZUAoDJj1pahTt5kgVAzIavNmZ/2Fw3ihySescdkrDkHACmSbiUSbXnDwsyxYBC+DtoxDkGVQYGUJqK5iqmGgproNfq75XjHTK2c/rnabftcJGa8LyUwUCQcAAAAASUVORK5CYII="
      }
    })
  ];

  const fakeCategories: Category[] = [
    new Category({
      id: 1,
      label: "Category 1",
      icon: (
        <Icons.categoryIcon />
      ), // Replace with your SVG icon content
      numberOfSubcategories: 3,
      subcategories: [
        new Category({
          id: 11,
          label: "Subcategory 1-1",
          icon: "<svg>...</svg>",
          numberOfSubcategories: 1
        }),
        new Category({
          id: 12,
          label: "Subcategory 1-2",
          icon: "<svg>...</svg>",
          numberOfSubcategories: 0
        }),
        new Category({
          id: 13,
          label: "Subcategory 1-3",
          icon: "<svg>...</svg>",
          numberOfSubcategories: 0
        })
      ]
    }),
    new Category({
      id: 2,
      label: "Category 2",
      icon: (
       <Icons.HouseIcon />
      
      ), // Replace with your SVG icon content
      numberOfSubcategories: 2,
      subcategories: [
        new Category({
          id: 21,
          label: "Subcategory 2-1",
          icon: "<svg>...</svg>",
          numberOfSubcategories: 0
        }),
        new Category({
          id: 22,
          label: "Subcategory 2-2",
          icon: "<svg>...</svg>",
          numberOfSubcategories: 0
        })
      ]
    }),
    new Category({
      id: 3,
      label: "Category 3",
      icon: (
       <Icons.ConstructionIcon />
      ), // Replace with your SVG icon content
      numberOfSubcategories: 2,
      subcategories: [
        new Category({
          id: 21,
          label: "Subcategory 2-1",
          icon: "<svg>...</svg>",
          numberOfSubcategories: 0
        }),
        new Category({
          id: 22,
          label: "Subcategory 2-2",
          icon: "<svg>...</svg>",
          numberOfSubcategories: 0
        })
      ]
    }),
    new Category({
      id: 4,
      label: "Category 2",
      icon: (
       <Icons.TransportIcon />
      ), // Replace with your SVG icon content
      numberOfSubcategories: 2,
      subcategories: [
        new Category({
          id: 21,
          label: "Subcategory 2-1",
          icon: "<svg>...</svg>",
          numberOfSubcategories: 0
        }),
        new Category({
          id: 22,
          label: "Subcategory 2-2",
          icon: "<svg>...</svg>",
          numberOfSubcategories: 0
        })
      ]
    })
    // Add more categories as needed
  ];
  return (
    <>
      <OGPMeta />
      <DefaultLayout>
        <CategoryBar categories={fakeCategories} />
        <div className={"container"}>
          {/* <TitleWithLink
            linkPath={"/"}
            linkText={`${t("see_all", { ns: "common" })}`}
            className={styles.title_marg}
          >
            {t("organizations")}
          </TitleWithLink> */}

          {/* <CompaniesSlider companies={companies} loading={loading} /> */}

          <MainSlider
            banners={fakeHomeBanner}
            slides={fakeHomeSlides}
            loading={false}
          />

          <TitleWithLink
            linkPath={`/services`}
            linkText={`${t("see_all", { ns: "common" })}`}
            className={styles.title_marg}
          >
            {t("services")}
          </TitleWithLink>
          <CardsList className={styles.section_margin} cards={fakeService} loading={false} />

          <TitleWithLink
            linkPath={`/products`}
            linkText={`${t("see_all", { ns: "common" })}`}
            className={styles.title_marg}
          >
            {!!fakeProducts?.length && fakeProducts[0]?.title && fakeProducts[0]?.title}
          </TitleWithLink>
          <CardsList
            className={styles.section_margin}
            cards={(!!fakeProducts?.length && fakeProducts) || []}
            loading={false}
          />

          {fakeVacansy?.length && (
            <>
              <TitleWithLink
                linkPath={"/vacancies"}
                linkText={`${t("see_all", { ns: "common" })}`}
                className={styles.title_marg}
              >
                {t("vacancies")}
              </TitleWithLink>

              <VacancySlider vacancies={fakeVacansy} />
            </>
          )}

          {/* {(fakeProducts || [1, 2, 3]).slice(1).map((productCategory, i) => (
            <Fragment key={`${productCategory.id}_${i}`}>
              <TitleWithLink
                linkPath={"/products"}
                linkText={`${t("see_all", { ns: "common" })}`}
                className={styles.title_marg}
              >
                {productCategory.title}
              </TitleWithLink>
              <CardsList
                className={styles.section_margin}
                cards={productCategory as any}
                loading={loading}
              />
            </Fragment>
          ))} */}

          <div className={styles.suggestions}>
            {!!fakeHomeBanner &&
              fakeHomeBanner.slice(0, 2).map((banner, i) => (
                <Link
                  href={banner.url}
                  key={`${banner.url}_${i}`}
                  className={styles.suggestions__picture}
                >
                  {/* <BlurImage
                    src={banner.image.currentImage}
                    alt={banner.image.currentImage}
                    blurHash={banner.image.blurHash}
                    className={styles.suggestions__picture_img}
                    width={754}
                    height={384}
                  /> */}
                  <img
                    alt="img"
                    width={1000}
                    height={1000}
                    src={banner.image.currentImage}
                    className={styles.suggestions__picture_img}
                  />
                </Link>
              ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default HomePage;
