import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import { colors } from "../../styles/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// --- Components ---

/**
 * Dropdown Menu component to show user options.
 * @param {object} props - The component props.
 * @param {function} props.onEditUser - Function to call on 'Edit User Info' press.
 * @param {function} props.onLogout - Function to call on 'Logout' press.
 */
const DropdownMenu = ({ onEditUser, onLogout }) => {
  return (
    <View style={stylesNav.dropdown}>
      <TouchableOpacity style={stylesNav.dropdownItem} onPress={onEditUser}>
        <MaterialCommunityIcons name="account-edit" size={20} color={colors.primary} />
        <Text style={stylesNav.dropdownText}>Edit User Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesNav.dropdownItem} onPress={onLogout}>
        <MaterialCommunityIcons name="logout" size={20} color="#E53935" />
        <Text style={[stylesNav.dropdownText, { color: '#E53935' }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};


// ⚠️ IMPORTANT: The 'navigation' prop is required here for the navigation calls to work.
export default function NavBar({ navigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEditUser = () => {
    setIsMenuOpen(false); // Close menu
    console.log("Navigating to Edit User Info...");
    
    // ✅ UNCOMMENTED NAVIGATION CALL
    if (navigation) {
      navigation.navigate("EditUser"); 
    } else {
      console.error("Navigation prop is missing on NavBar!");
    }
  };

  const handleLogout = () => {
    setIsMenuOpen(false); // Close menu
    console.log("Logging out...");
    // TODO: Add actual logout logic (clear tokens, navigate to Login screen)
  };

  return (
    <View>
      <View style={stylesNav.navBar}>
        {/* Title/Subtitle Section */}
        <View>
          <Text style={stylesNav.navBarTitle}>UATrackify</Text>
          <Text style={stylesNav.navBarSubtitle}>Form Tracker</Text>
        </View>

        {/* Menu Icon Section */}
        <Pressable onPress={toggleMenu} style={stylesNav.menuIconContainer}>
          <MaterialCommunityIcons
            name="menu" // Burger Icon
            size={30}
            color={colors.primary}
          />
        </Pressable>
      </View>

      {/* Dropdown Menu - Conditionally Rendered */}
      {isMenuOpen && (
        <DropdownMenu
          onEditUser={handleEditUser}
          onLogout={handleLogout}
        />
      )}
    </View>
  );
}

// --- Styles ---

const stylesNav = StyleSheet.create({
  // Existing Styles
  navBar: {
    height: 80,
    paddingHorizontal: 24,
    backgroundColor: colors.surface,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10, 
  },
  navBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  navBarSubtitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  menuIconContainer: {
    padding: 5, 
  },

  // New Dropdown Styles
  dropdown: {
    position: 'absolute',
    top: 80, 
    right: 24,
    width: 180,
    backgroundColor: colors.surface,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8, 
    zIndex: 20, 
    paddingVertical: 5,
  },
  dropdownItem: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.primary,
  },
});