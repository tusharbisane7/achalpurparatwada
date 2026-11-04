
import React, { useMemo, useState } from "react";
import {
  Search, MapPin, Phone, Clock, Navigation, Store, ShoppingBag,
  Utensils, HeartPulse, Smartphone, GraduationCap, Car, Hammer,
  BriefcaseBusiness, Sparkles, SlidersHorizontal, X, ArrowUpRight,
  BadgeCheck, Users, Camera, ChevronDown
} from "lucide-react";
import "./Business.scss";

const categories = [
  "All Businesses",
  "Grocery & Supermarkets",
  "Clothing & Fashion",
  "Jewellery",
  "Electronics & Mobiles",
  "Medical & Pharmacy",
  "Furniture & Home",
  "Books & Stationery",
  "Agriculture",
  "Food & Restaurants",
  "Hotels & Accommodation",
  "Beauty & Salon",
  "Automobile",
  "Hardware & Construction",
  "Education",
  "Professional Services",
  "Other Services",
];

const businesses = [
  {
    id: 1,
    name: "Jai Shree Krishna Fashion",
    category: "Clothing & Fashion",
    type: "Family clothing, sarees, fabrics and fashion",
    area: "Achalpur / Paratwada",
    address: "Opposite Jain Mandir, Sadar Bazar, Bhoipura, Achalpur, Maharashtra 444805",
    phone: "+919423623538",
    hours: "Mon–Sat: 10:00 AM–9:00 PM; Sun: 9:00 AM–9:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=900",
    description: "Clothing and fabric shopping for women, men and children.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 2,
    name: "J. J. Showroom",
    category: "Clothing & Fashion",
    type: "Clothing showroom",
    area: "Achalpur / Paratwada",
    address: "Sadar Bazar, Bhoipura, Achalpur, Maharashtra 444805",
    phone: "+919284624131",
    hours: "Daily: 10:00 AM–9:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900",
    description: "Local clothing showroom for everyday and occasion shopping.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 3,
    name: "S T Y L E Menswear",
    category: "Clothing & Fashion",
    type: "Men's clothing store",
    area: "Paratwada",
    address: "Near Sundrabai Boys High School, Civil Lines, Paratwada, Achalpur, Maharashtra 444805",
    phone: "",
    hours: "Daily: 11:30 AM–10:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-151 clothing?w=900",
    description: "Men's casual and western wear.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 4,
    name: "Laxmi Baby Fashion",
    category: "Clothing & Fashion",
    type: "Baby and kids clothing",
    area: "Paratwada",
    address: "Durani Chowk, Bhoipura, Achalpur, Maharashtra 444805",
    phone: "+919422159725",
    hours: "Mon–Sat: 10:00 AM–9:00 PM; Sun: 10:00 AM–10:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=900",
    description: "Babywear and kids' fashion.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 5,
    name: "RJ Fashion",
    category: "Clothing & Fashion",
    type: "Clothing, men's wear and sarees",
    area: "Paratwada",
    address: "Behind Mohan General Stores, Durani Chowk, Sadar Bazar, Bhoipura, Achalpur, Maharashtra 444805",
    phone: "+918446666648",
    hours: "Daily: 9:30 AM–9:30 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900",
    description: "Local fashion and clothing store.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 6,
    name: "Shri Radhe Rani Showroom",
    category: "Clothing & Fashion",
    type: "Sarees and family clothing showroom",
    area: "Paratwada",
    address: "1, Tilak Chowk, Sadar Bazar, Bhoipura, Achalpur, Maharashtra 444805",
    phone: "+919970270706",
    hours: "Daily: 10:00 AM–9:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900",
    description: "Sarees and family clothing collection.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 7,
    name: "RamKamal Mart (RK)",
    category: "Grocery & Supermarkets",
    type: "Supermarket and daily essentials",
    area: "Paratwada",
    address: "Vidarbha Mill Bus Stop, Vivekanand Colony, Paratwada, Maharashtra 444805",
    phone: "",
    hours: "Daily: 10:00 AM–10:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900",
    description: "Groceries and everyday household essentials.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 8,
    name: "S-Mart & Kids World",
    category: "Grocery & Supermarkets",
    type: "Grocery and household store",
    area: "Paratwada",
    address: "Mishra Line, Bhoipura, Paratwada, Achalpur, Maharashtra 444805",
    phone: "",
    hours: "Daily: 10:30 AM–9:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=900",
    description: "Grocery, household products and family shopping.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 9,
    name: "Saboo Mart",
    category: "Grocery & Supermarkets",
    type: "Mart and grocery store",
    area: "Paratwada",
    address: "Opposite Fatima Convent High School, Amravati Road, Vidarbha Housing Board Colony, Paratwada, Maharashtra 444806",
    phone: "",
    hours: "Online listing reports approximately 10:00 AM–9:00 PM; confirm locally",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1601593768792-7f1f7e9d1b3a?w=900",
    description: "Local mart for grocery and household shopping.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 10,
    name: "Genericart Medicine Store – Arohi Swast Aushadhi Seva",
    category: "Medical & Pharmacy",
    type: "Pharmacy and medical store",
    area: "Paratwada",
    address: "Shop D/11, Plot 12, Paratwada–Amravati Road, near Athavadi Bazar, Pensionpura, Achalpur, Maharashtra 444805",
    phone: "+918087232705",
    hours: "Mon–Sat: 9:00 AM–10:00 PM; Sunday hours not listed",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=900",
    description: "Pharmacy and medical supplies.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 11,
    name: "Tekwani Medical",
    category: "Medical & Pharmacy",
    type: "Medical store and pharmacy",
    area: "Achalpur / Paratwada",
    address: "Vakil Line, Bhoipura, Achalpur, Maharashtra 444805",
    phone: "+918830769740",
    hours: "Daily: 9:00 AM–11:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900",
    description: "Medicines and selected healthcare supplies.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 12,
    name: "CRIO Furniture",
    category: "Furniture & Home",
    type: "Furniture showroom and manufacturer",
    area: "Paratwada",
    address: "Anjangaon Road, beside Kakaji Dhaba, Paratwada, Achalpur, Maharashtra 444806",
    phone: "+918668835338",
    hours: "Mon: 11:00 AM–9:00 PM; other listed days: approximately 10:00 AM–9:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900",
    description: "Furniture for home and office.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 13,
    name: "CRIO Furniture Mall (Shiva Furniture World)",
    category: "Furniture & Home",
    type: "Furniture mall and wholesale showroom",
    area: "Paratwada",
    address: "Anjangaon Road, beside Kakaji Dhaba, Paratwada, Maharashtra 444806",
    phone: "+917272849292",
    hours: "Listed hours: approximately 10:00 AM–8:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900",
    description: "Furniture showroom and factory-outlet style store.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 14,
    name: "Shree Krushna Enterprises",
    category: "Electronics & Mobiles",
    type: "Electronics, appliances and furniture",
    area: "Paratwada",
    address: "Shri Krushna Tower, Civil Lines, Paratwada, Maharashtra 444806",
    phone: "+919960782705",
    hours: "Listed hours: approximately 10:00 AM–9:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900",
    description: "Home appliances, electronics, furniture and water filters.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 15,
    name: "My Mobile Shop",
    category: "Electronics & Mobiles",
    type: "Mobile phone shop",
    area: "Paratwada",
    address: "Jaistambh–Pensionpura Road, Pensionpura, Achalpur, Maharashtra 444805",
    phone: "+919766285912",
    hours: "Not published; contact the store",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900",
    description: "Mobile shop serving customers in Paratwada.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 16,
    name: "Shree Ram Book Depot",
    category: "Books & Stationery",
    type: "Bookshop and stationery store",
    area: "Paratwada",
    address: "Jaistambh Chowk, Main Road, Paratwada, Maharashtra 444805",
    phone: "+917972087699",
    hours: "Daily: 8:30 AM–10:00 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900",
    description: "Books, stationery, art and school supplies.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 17,
    name: "Anuj Book Depot",
    category: "Books & Stationery",
    type: "Bookshop and stationery store",
    area: "Paratwada",
    address: "Bhoipura, Paratwada, Achalpur, Maharashtra 444805",
    phone: "+919422890235",
    hours: "Daily: 9:30 AM–9:15 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900",
    description: "Books and stationery for students and families.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 18,
    name: "Sneh Book Depot",
    category: "Books & Stationery",
    type: "Bookshop and stationery store",
    area: "Paratwada",
    address: "Shrivastava Complex, Main Road, Civil Lines, Paratwada, Achalpur, Maharashtra 444805",
    phone: "+917223222184",
    hours: "Daily: 9:00 AM–10:30 PM",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900",
    description: "Academic books, competitive exam books and stationery.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 19,
    name: "Abhinav Krushi Udyog",
    category: "Agriculture",
    type: "Agricultural supplies",
    area: "Paratwada",
    address: "Main Road, Bhoipura, Paratwada, Achalpur, Maharashtra 444805",
    phone: "+919096745645",
    hours: "Not published; contact the store",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900",
    description: "Agriculture-related products and supplies.",
    source: "Public business listing",
    verified: false,
  },
  {
    id: 20,
    name: "Ghore Machinery and Tools",
    category: "Hardware & Construction",
    type: "Machinery and tools store",
    area: "Paratwada",
    address: "Jaistambh–Pensionpura Road, Paratwada Chowk, Achalpur, Maharashtra 444805",
    phone: "+919623372690",
    hours: "Not published; contact the store",
    owner: "Not disclosed",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900",
    description: "Machinery and tools for local customers.",
    source: "Public business listing",
    verified: false,
  },
];

const categoryIcons = {
  "All Businesses": Store,
  "Grocery & Supermarkets": ShoppingBag,
  "Clothing & Fashion": Sparkles,
  Jewellery: Sparkles,
  "Electronics & Mobiles": Smartphone,
  "Medical & Pharmacy": HeartPulse,
  "Furniture & Home": Store,
  "Books & Stationery": GraduationCap,
  Agriculture: Store,
  "Food & Restaurants": Utensils,
  "Hotels & Accommodation": Store,
  "Beauty & Salon": Sparkles,
  Automobile: Car,
  "Hardware & Construction": Hammer,
  Education: GraduationCap,
  "Professional Services": BriefcaseBusiness,
  "Other Services": Store,
};

function mapsUrl(item) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${item.name}, ${item.address}`
  )}`;
}

export default function Business() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Businesses");
  const [area, setArea] = useState("All Areas");
  const [showFilters, setShowFilters] = useState(false);

  const filteredBusinesses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return businesses.filter((item) => {
      const matchesCategory =
        category === "All Businesses" || item.category === category;

      const matchesArea =
        area === "All Areas" || item.area === area || item.area === "Achalpur / Paratwada";

      const matchesSearch =
        !query ||
        [
          item.name,
          item.category,
          item.type,
          item.area,
          item.address,
          item.description,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesArea && matchesSearch;
    });
  }, [search, category, area]);

  const totalCategories = new Set(businesses.map((item) => item.category)).size;

  return (
    <div className="business-page">
      <section className="business-hero">
        <div className="business-hero__overlay" />
        <div className="business-hero__content">
          <span className="business-eyebrow">
            <Sparkles size={15} /> LOCAL BUSINESS NETWORK
          </span>
          <h1>
            Discover Local.
            <br />
            <span>Support Local.</span>
          </h1>
          <p>
            Explore shops, services, stores and local enterprises across
            Achalpur and Paratwada.
          </p>

          <div className="business-hero__search">
            <Search size={20} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search shops, services or categories..."
              aria-label="Search businesses"
            />
            {search && (
              <button onClick={() => setSearch("")} aria-label="Clear search">
                <X size={18} />
              </button>
            )}
          </div>

          <div className="business-hero__stats">
            <div>
              <strong>{businesses.length}+</strong>
              <span>Starter listings</span>
            </div>
            <div>
              <strong>{totalCategories}+</strong>
              <span>Categories represented</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Local areas</span>
            </div>
          </div>
        </div>
        <div className="business-hero__image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
            alt="Retail shopping store"
          />
        </div>
      </section>

      <section className="business-directory">
        <div className="business-section-heading">
          <div>
            <span className="business-kicker">THE LOCAL MARKETPLACE</span>
            <h2>Explore Businesses</h2>
            <p>Find the right local store, service or business for your needs.</p>
          </div>
          <button
            className="business-filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={17} />
            Filters
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="business-area-tabs">
          {["All Areas", "Achalpur", "Paratwada"].map((item) => (
            <button
              key={item}
              className={area === item ? "active" : ""}
              onClick={() => setArea(item)}
            >
              {item === "All Areas" ? <MapPin size={15} /> : null}
              {item}
            </button>
          ))}
        </div>

        {showFilters && (
          <div className="business-filter-panel">
            <div>
              <label htmlFor="business-category">Business category</label>
              <select
                id="business-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <button
              onClick={() => {
                setCategory("All Businesses");
                setArea("All Areas");
                setSearch("");
              }}
            >
              Reset filters
            </button>
          </div>
        )}

        <div className="business-category-list">
          {categories.map((item) => {
            const Icon = categoryIcons[item] || Store;
            return (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                <span><Icon size={18} /></span>
                {item}
              </button>
            );
          })}
        </div>

        <div className="business-results-heading">
          <div>
            <h3>{category === "All Businesses" ? "Local Businesses" : category}</h3>
            <p>{filteredBusinesses.length} listings found</p>
          </div>
          <span className="business-result-note">
            <MapPin size={15} /> Achalpur & Paratwada
          </span>
        </div>

        {filteredBusinesses.length ? (
          <div className="business-grid">
            {filteredBusinesses.map((item, index) => (
              <article
                className="business-card"
                key={item.id}
                style={{ "--card-index": index }}
              >
                <div className="business-card__image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="business-card__category">{item.category}</span>
                  <span className="business-card__area">{item.area}</span>
                </div>

                <div className="business-card__body">
                  <div className="business-card__title">
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.type}</p>
                    </div>
                    <span className="business-card__icon"><Store size={19} /></span>
                  </div>

                  <p className="business-card__description">{item.description}</p>

                  <div className="business-card__details">
                    <div>
                      <MapPin size={16} />
                      <span>{item.address}</span>
                    </div>
                    <div>
                      <Clock size={16} />
                      <span>{item.hours}</span>
                    </div>
                    <div>
                      <Users size={16} />
                      <span>Ownership: {item.owner}</span>
                    </div>
                  </div>

                  <div className="business-card__actions">
                    {item.phone ? (
                      <a href={`tel:${item.phone}`}>
                        <Phone size={16} /> Call Now
                      </a>
                    ) : (
                      <span className="business-no-phone">Phone not listed</span>
                    )}
                    <a
                      className="business-map-link"
                      href={mapsUrl(item)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Navigation size={16} /> Directions
                    </a>
                  </div>
                  <div className="business-card__source">
                    <span><BadgeCheck size={13} /> Public listing – verify before visiting</span>
                    <span>{item.source}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="business-empty">
            <div><Search size={30} /></div>
            <h3>No businesses found</h3>
            <p>Try another name, category or area.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All Businesses");
                setArea("All Areas");
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      <section className="business-owner-cta">
        <div className="business-owner-cta__icon"><Store size={27} /></div>
        <div>
          <span>ARE YOU A LOCAL BUSINESS OWNER?</span>
          <h2>Put your business on the map.</h2>
          <p>
            Add your shop, contact details, timings, photos and services to
            help more people discover your business.
          </p>
        </div>
        <a href="mailto:business@achalpurparatwada.com?subject=Business%20Listing%20Request">
          List Your Business <ArrowUpRight size={18} />
        </a>
      </section>

      <p className="business-disclaimer">
        Directory information is collected from publicly available listings.
        Contact details and opening hours can change. Confirm details directly
        with the business. Ownership information is displayed only when
        voluntarily confirmed by the owner.
      </p>
    </div>
  );
}
