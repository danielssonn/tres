
## Key Architecture Principles

### **Phase 1: MDM Systems Provide Domain-Specific Subgraphs**
- **Entity Facts Only**: Each MDM provides facts about individual entities (names, identifiers, addresses, document references)
- **Domain Relationships**: Each MDM maintains its own domain-specific relationships:
  - Capital Markets MDM: Capital Markets MDM repository
  - Commercial MDM: Commercial Banking MDM repository
  - CNB: City National Bank MDM repository
- **No Cross-System Relationships**: MDMs don't attempt to define relationships with entities from other systems

### **Phase 2: Proof Documents Establish Cross-System Relationships**
- **Independent Evidence**: Proof documents exist independently of any MDM system
- **Entity References**: Documents reference entities that may exist across multiple MDMs
- **Relationship Assertions**: Documents contain explicit statements about relationships between entities

### **Phase 3: Entity Resolution Across MDMs**
- **Fingerprint Matching**: Entities are matched across MDMs using names, identifiers, jurisdictions
- **Canonical Entity IDs**: Multiple MDM references resolve to single canonical entities
- **Cross-Reference Mapping**: Maintains mapping between canonical IDs and all MDM references

### **Phase 4: Unified Graph Model**
```
Unified Graph = MDM Subgraphs + Cross-System Relationships

Where:
- MDM Subgraphs: Domain-specific relationships within each MDM
- Cross-System Relationships: Proven through independent evidence documents
- Entity Resolution: Links entities across all systems
```

### **Phase 5: Queryable Interface**
- **Complete Entity View**: Shows entity across all MDMs plus cross-system relationships
- **Proof Traceability**: Every cross-system relationship backed by verifiable documents
- **Natural Language Queries**: "Who owns X?", "Who operates for Y?", "What proof supports Z?"

## What This Achieves

**Regulatory Compliance**: Every cross-system relationship has independent proof documents
**MDM Autonomy**: Each MDM continues operating in its domain without cross-system dependencies  
**Defensible Relationships**: Clear evidence trail for any relationship assertion
**Operational Separation**: Relationship discovery doesn't require MDM system modifications
**Scalability**: New MDM systems can be added without affecting existing relationships

The system now correctly treats each MDM as providing **entity facts** and **domain subgraphs**, while cross-system relationships emerge only from **independent proof analysis** - exactly as you specified.