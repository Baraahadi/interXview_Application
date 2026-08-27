import React from 'react';
import { View } from 'react-native';
import { BriefcaseBusiness } from 'lucide-react-native';

import RoleCard from '../RoleCard/RoleCard';
import styles from './RoleOrbit.styles';

export default function RoleOrbit({ roles }) {
  const roleRows = [
    [roles[1]],
    [roles[0], roles[2]],
    [roles[3], roles[4]],
    [roles[5], roles[6]],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.outerRing} />
      <View style={styles.innerRing} />

      <View style={styles.centerIllustration}>
        <BriefcaseBusiness size={30} color="#6240E8" strokeWidth={2} />
      </View>

      <View style={styles.rolesContainer}>
        {roleRows.map((row, rowIndex) => (
          <View
            key={`role-row-${rowIndex}`}
            style={[styles.roleRow, row.length === 1 && styles.singleRoleRow]}
          >
            {row.map(role => (
              <RoleCard
                key={role.title}
                title={role.title}
                icon={role.icon}
                iconColor={role.iconColor}
                iconBackground={role.iconBackground}
                selected={role.selected}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}
