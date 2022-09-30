interface Companies {
  id: number;
  slug: string;
  name: string;
  industry: string;
  location: string;
  website: string;
  email: boolean;
  phone: boolean;
  idno: string;
  mobile: boolean;
  employees: string;
  turnover: number;
  creation_year: number;
  creation_date: string;
  status: string;
  partners: [];
  full_location: string;
}

interface Company {
  id: number;
  name: string;
  status: {
    id: number;
    keyword: string;
    title: string;
  };
  is_resident: true;
  similar_companies: [
    {
      id: number;
      slug: string;
      name: string;
      parent_id: null;
      industry: string;
      location: string;
      site: string;
      email: boolean;
      phone: boolean;
    },
    {
      id: number;
      slug: string;
      name: string;
      parent_id: null;
      industry: string;
      location: string;
      site: string;
      email: boolean;
      phone: null;
    },
    {
      id: number;
      slug: string;
      name: string;
      parent_id: null;
      industry: string;
      location: string;
      site: string;
      email: boolean;
      phone: null;
    },
    {
      id: number;
      slug: string;
      name: string;
      parent_id: null;
      industry: string;
      location: string;
      site: string;
      email: boolean;
      phone: boolean;
    },
    {
      id: number;
      slug: string;
      name: string;
      parent_id: null;
      industry: string;
      location: string;
      site: string;
      email: boolean;
      phone: boolean;
    }
  ];
  history: [];
  changes: [];
  personal: {
    ADM: [
      {
        id: number;
        name: string;
        first_name: {
          id: number;
          title: string;
        };
        last_name: {
          id: number;
          title: string;
        };
        seniority: {
          id: string;
          title: string;
        };
        share_value: boolean;
        function: null;
        phone: null;
        email: null;
        linkedin: null;
        seniority_ids: string[];
        slug: string;
        description: {
          title: string;
        };
      }
    ];
    PRT: [
      {
        id: number;
        name: string;
        first_name: {
          id: number;
          title: string;
        };
        last_name: {
          id: number;
          title: string;
        };
        seniority: {
          id: string;
          title: string;
        };
        share_value: boolean;
        function: null;
        phone: null;
        email: null;
        linkedin: null;
        seniority_ids: string[];
        slug: string;
        description: {
          title: string;
        };
      },
      {
        id: number;
        name: string;
        first_name: {
          id: number;
          title: string;
        };
        last_name: {
          id: number;
          title: string;
        };
        seniority: {
          id: string;
          title: string;
        };
        share_value: boolean;
        function: null;
        phone: null;
        email: null;
        linkedin: null;
        seniority_ids: string[];
        slug: string;
        description: {
          title: string;
        };
      },
      {
        id: number;
        name: string;
        first_name: {
          id: number;
          title: string;
        };
        last_name: {
          id: number;
          title: string;
        };
        seniority: {
          id: string;
          title: string;
        };
        share_value: boolean;
        function: null;
        phone: null;
        email: null;
        linkedin: null;
        seniority_ids: string[];
        slug: string;
        description: {
          title: string;
        };
      }
    ];
  };
  general_data: {
    idno: string;
    creation_date: string;
    creation_year: number;
    size: {
      id: number;
      name: string;
    };
    description: string;
    special_description: {
      id: number;
      title: string;
    };
    business_hours: [
      {
        isActive: boolean;
        timeFrom: string;
        timeTill: string;
        title: string;
        value: string;
      },
      {
        isActive: boolean;
        timeFrom: string;
        timeTill: string;
        title: string;
        value: string;
      },
      {
        isActive: boolean;
        timeFrom: string;
        timeTill: string;
        title: string;
        value: string;
      },
      {
        isActive: boolean;
        timeFrom: string;
        timeTill: string;
        title: string;
        value: string;
      },
      {
        isActive: boolean;
        timeFrom: string;
        timeTill: string;
        title: string;
        value: string;
      },
      {
        isActive: boolean;
        timeFrom: string;
        timeTill: string;
        title: string;
        value: string;
      },
      {
        isActive: boolean;
        timeFrom: null;
        timeTill: null;
        title: string;
        value: string;
      }
    ];
    contact_info: {
      address_de_facto: {
        additional: {
          office: null;
          postal: string;
          lat: number;
          long: number;
          number: {
            title: string;
          };
          street: {
            title: string;
          };
          town: {
            title: string;
          };
          region: {
            title: string;
          };
        };
        location_ids: number[];
        title: string;
      };
      address_de_jur: {
        additional: {
          office: null;
          postal: string;
          lat: null;
          long: null;
          number: {
            title: string;
          };
          street: {
            title: string;
          };
          town: {
            title: string;
          };
          region: {
            title: string;
          };
        };
        location_ids: number[];
        title: string;
      };
      no_resident_address: string;
      phones: boolean[];
      faxes: [];
      mobile: boolean[];
      emails: boolean[];
      sites: string[];
      locations: null;
      location_ids: null;
      facebook: string;
      linkedin: null;
    };
    types_of_activity: {
      search_products_and_services: null;
      search_old_products_and_services: null;
      search_branch: null;
      products_and_services: null;
      old_products: null;
      old_products_id: null;
      old_services: null;
      old_services_id: null;
      activity_licensed: [];
      activity_unlicensed: [
        {
          id: string;
          title: {
            id: number;
            title: string;
          };
        },
        {
          id: string;
          title: {
            id: number;
            title: string;
          };
        },
        {
          id: string;
          title: {
            id: number;
            title: string;
          };
        },
        {
          id: string;
          title: {
            id: number;
            title: string;
          };
        },
        {
          id: string;
          title: {
            id: number;
            title: string;
          };
        }
      ];
    };
    branch: {
      id: number;
      title: string;
    };
    enterprise_type: {
      id: number;
      title: string;
    };
    turnover: {
      last: number;
      graph: [
        {
          turnover: number;
          year: number;
        },
        {
          turnover: number;
          year: number;
        },
        {
          turnover: number;
          year: number;
        },
        {
          turnover: number;
          year: number;
        }
      ];
    };
    social_capital: {
      value: number;
      type: {
        id: number;
        title: string;
      };
      countries: [
        {
          id: number;
          title: string;
        }
      ];
      description: null;
    };
    country_import: null;
    country_export: [];
    arrears: {
      status: boolean;
      date_checked: string;
    };
    export_order: number;
  };
}
