export interface ConclusionResponse {
  data: [
    {
      id: string;
      registrationDate: string;
      position: string;
      region: string;
      plannedActions: string;
      eventDate: string;
      eventPlace: string;
      investigator: string;
      status: string;
      eventRelation: string;
      investigationType: string;
      isBusinessRelated: true;
      justification: string;
      actionResult: string;
      approvals: Approval[];
      called: Called[];
      incident: Incident[];
      defender: Defender[];
    },
  ];
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    sortBy: [string[]];
  };
  links: {
    current: string;
  };
}

export interface Approval {
  id: string;
  position: string;
  name: string;
  status: string;
  date: string;
  rejectionReason: string;
}

export interface Called {
  id: string;
  iin: string;
  name: string;
  pensionIin: string;
  workplace: string;
  lastCall: string;
  caller: string;
  status: string;
  arrivedAt: string;
  leftAt: string;
  reason: string;
}

export interface Incident {
  id: string;
  registrationDate: string;
  article: string;
  solution: string;
  description: string;
}

export interface Defender {
  id: string;
  iin: string;
  name: string;
}
